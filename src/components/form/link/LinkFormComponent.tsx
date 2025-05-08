import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import usePlatforms from "../../../hooks/usePlatforms";
import { linkSchema } from "../../../utils/schema";
import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Dropdown from "../../reusable/dropdown/Dropdown";
import Input from "../../reusable/input/Input";
import { ILinkData, IPlatform } from "./linkForm";
import styles from "./LinkForm.module.css";
import {
  addUserLink,
  deleteLink,
  updateLink,
} from "../../../utils/firebase/firebaseLinks";
import { useUserPlatforms } from "../../../context/UserPlatformsContext";
import LabelElement from "../../reusable/label/LabelElement";

export default function LinkForm({
  selectedPlatform,
}: {
  selectedPlatform: ILinkData | null;
}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<ILinkData>({
    resolver: zodResolver(linkSchema),
    mode: "onBlur",
  });
  const platforms = usePlatforms();
  const { userPlatforms, setUserPlatforms } = useUserPlatforms();

  const [selectedDropdownPlatform, setSelectedDropdownPlatform] =
    useState<IPlatform | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [platformError, setPlatformError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const watchedUrl = useWatch({ control, name: "url" });

  useEffect(() => {
    const isUrlValid = !!watchedUrl && !errors.url;
    const isPlatformSelected = selectedDropdownPlatform !== null;

    if (isEditing) {
      setIsFormValid(isUrlValid);
    } else {
      setIsFormValid(isUrlValid && isPlatformSelected);
    }
  }, [watchedUrl, errors.url, selectedDropdownPlatform, isEditing]);

  useEffect(() => {
    if (selectedPlatform) {
      setSelectedDropdownPlatform({
        id: selectedPlatform.id,
        name: selectedPlatform.platform,
      });
      setValue("url", selectedPlatform.url);
    } else {
      reset();
      setSelectedDropdownPlatform(null);
      setIsEditing(false);
    }
  }, [selectedPlatform, setValue, reset]);

  const handleSelectPlatform = (platform: IPlatform) => {
    setSelectedDropdownPlatform(platform);
    setPlatformError(null);
  };

  const onSubmitHandler: SubmitHandler<ILinkData> = async (data) => {
    try {
      if (!isEditing) {
        const isPlatformAdded = userPlatforms.some(
          (platform) => platform.id === selectedDropdownPlatform?.id
        );

        if (isPlatformAdded) {
          setPlatformError("Platform is already added.");
          return;
        }

        const newLink = await addUserLink({
          id: selectedDropdownPlatform?.id as string,
          platform: selectedDropdownPlatform?.name ?? " dummy platform",
          url: data.url || "dummy url",
        });
        console.log("Link saved.");
        reset();
        setUserPlatforms([...userPlatforms, newLink]);
      } else {
        if (!selectedPlatform || !selectedPlatform.docId) {
          console.log("No platform selected for editing.");
          return;
        }
        await updateLink(selectedPlatform.docId, data.url);
        console.log("Link updated.");

        setUserPlatforms((prev) =>
          prev.map((link) =>
            link.id === selectedPlatform.id ? { ...link, url: data.url } : link
          )
        );
      }
    } catch (error) {
      console.log("Error while saving link.", error);
    }
  };

  const deleteLinkHandler = async () => {
    if (!selectedPlatform || !selectedPlatform.docId) return;

    try {
      await deleteLink(selectedPlatform.docId);
      console.log(`Link ${selectedPlatform.docId} deleted from Firestore`);

      setUserPlatforms(
        userPlatforms.filter((link) => link.id !== selectedPlatform.id)
      );
      reset();
      setSelectedDropdownPlatform(null);
    } catch (error) {
      console.log("An error occurred while deleting:", error);
    }
  };

  return (
    <form className={styles.linkForm} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles.linkFormHeader}>
        <p>Link</p>
        <div className={styles.buttonDiv}>
          <ButtonWithLabel
            text="Edit"
            variant="textOnly"
            onClick={() => setIsEditing(true)}
          />
          <ButtonWithLabel
            text="Remove"
            variant="textOnly"
            onClick={deleteLinkHandler}
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <Dropdown
          options={platforms}
          selectedOption={selectedDropdownPlatform}
          onSelect={handleSelectPlatform}
        />
        <LabelElement text="Link" htmlFor="url" variant="small" />
        <Input
          type="text"
          id="url"
          placeholder="e.g. https://www.github.com/johnappleseed"
          {...register("url")}
          error={errors.url?.message?.toString()}
          disabled={!!selectedPlatform && !isEditing}
        />
      </div>
      {platformError && <p className={styles.errorMessage}>{platformError}</p>}
      <div className={styles.saveButton}>
        {" "}
        <ButtonWithLabel
          text="Save"
          variant="defaultSmall"
          type="submit"
          disabled={!isFormValid}
        />
      </div>
    </form>
  );
}
