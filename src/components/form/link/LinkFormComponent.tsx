import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import usePlatforms from "../../../hooks/usePlatforms";
import { linkSchema } from "../../../utils/schema";
import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Dropdown from "../../reusable/dropdown/Dropdown";
import Input from "../../reusable/input/Input";
import { ILinkFormFields, IPlatform } from "./linkForm";
import styles from "./linkForm.module.css";

interface LinkFormProps {
  onFormValidation: (valid: boolean) => void;
  setFormData: React.Dispatch<React.SetStateAction<ILinkFormFields | null>>;
  children: ReactNode;
}

export default function LinkForm({
  onFormValidation,
  setFormData,
  children,
}: LinkFormProps) {
  const {
    register,
    handleSubmit,
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

  const isFormValid =
    !!watch("url") && !errors.url && selectedPlatform !== null;
  useEffect(() => {
    onFormValidation(isFormValid);
  }, [isFormValid, onFormValidation]);

  const handleSelectPlatform = (platform: IPlatform) => {
    setSelectedPlatform(platform);
  };

  const onSubmitHandler: SubmitHandler<ILinkFormFields> = async (data) => {
    setFormData({
      platform: selectedPlatform?.name ?? " dummy platform",
      url: data.url || "dummy url",
    });
    console.log("Platform:", selectedPlatform?.name);
    console.log("url:", data.url);
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
      {children}
    </form>
  );
}
