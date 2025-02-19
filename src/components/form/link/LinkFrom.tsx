import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Input from "../../reusable/input/Input";
import styles from "./linkForm.module.css";
import Dropdown from "../../reusable/dropdown/Dropdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { linkSchema } from "../../../utils/schema";
import { ILinkFormFields } from "./linkForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IPlatform } from "./linkForm";
import usePlatforms from "../../../hooks/usePlatforms";

interface LinkFormProps {
  onFormValidation: (valid: boolean) => void;
}

export default function LinkFrom({ onFormValidation }: LinkFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ILinkFormFields>({
    resolver: zodResolver(linkSchema),
    mode: "onBlur",
  });
  const platforms = usePlatforms();

  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
    null
  );

  const handleSelectPlatform = (platform: IPlatform) => {
    setSelectedPlatform(platform);
  };

  const urlValue = watch("url");
  const isFormValid = !!urlValue && !errors.url && selectedPlatform !== null;

  useEffect(() => {
    onFormValidation(isFormValid);
  }, [isFormValid, onFormValidation]);

  return (
    <div>
      <form className={styles.linkForm}>
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
      </form>
    </div>
  );
}
