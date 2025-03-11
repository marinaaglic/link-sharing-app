import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import usePlatforms from "../../../hooks/usePlatforms";
import { linkSchema } from "../../../utils/schema";
import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Dropdown from "../../reusable/dropdown/Dropdown";
import Input from "../../reusable/input/Input";
import { ILinkData, IPlatform } from "./linkForm";
import styles from "./linkForm.module.css";
import { addUserLink } from "../../../utils/firebase/firebaseLinks";
import { useUserPlatforms } from "../../../context/UserPlatformsContext";

export default function LinkForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ILinkData>({
    resolver: zodResolver(linkSchema),
    mode: "onBlur",
  });
  const platforms = usePlatforms();
  const { userPlatforms, setUserPlatforms } = useUserPlatforms();

  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
    null
  );
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [platformError, setPlatformError] = useState<string | null>(null);

  useEffect(() => {
    setIsFormValid(!!watch("url") && !errors.url && selectedPlatform !== null);
  }, [watch("url"), errors.url, selectedPlatform]);

  const handleSelectPlatform = (platform: IPlatform) => {
    setSelectedPlatform(platform);
    setPlatformError(null);
  };

  const onSubmitHandler: SubmitHandler<ILinkData> = async (data) => {
    try {
      const isPlatformAdded = userPlatforms.some(
        (platform) => platform.id === selectedPlatform?.id
      );

      if (isPlatformAdded) {
        setPlatformError("Platform is already added.");
        return;
      }
      const newLink = await addUserLink({
        id: selectedPlatform?.id as string,
        platform: selectedPlatform?.name ?? " dummy platform",
        url: data.url || "dummy url",
      });
      console.log("Link saved.");
      reset();
      setUserPlatforms([...userPlatforms, newLink]);
    } catch (error) {
      console.log("Error while saving link.", error);
    }
  };

  return (
    <form className={styles.linkForm} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={styles.linkFormHeader}>
        <p>Link #1</p>
        <div className={styles.buttonDiv}>
          <ButtonWithLabel text="Edit" variant="textOnly" />
          <ButtonWithLabel text="Remove" variant="textOnly" />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <Dropdown
          options={platforms}
          selectedOption={selectedPlatform}
          onSelect={handleSelectPlatform}
        />
        <Input
          label="Link"
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
