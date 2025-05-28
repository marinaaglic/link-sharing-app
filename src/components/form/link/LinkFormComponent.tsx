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
import { addUserLink, deleteLink } from "../../../utils/firebase/firebaseLinks";
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

  const watchedUrl = useWatch({ control, name: "url" });

  useEffect(() => {
    setIsFormValid(
      !!watchedUrl && !errors.url && selectedDropdownPlatform !== null
    );
  }, [watchedUrl, errors.url, selectedDropdownPlatform]);

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
    }
  }, [selectedPlatform, setValue, reset]);

  const handleSelectPlatform = (platform: IPlatform) => {
    setSelectedDropdownPlatform(platform);
    setPlatformError(null);
  };

  const onSubmitHandler: SubmitHandler<ILinkData> = async (data) => {
    try {
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
