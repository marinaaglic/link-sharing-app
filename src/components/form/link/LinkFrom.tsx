import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Input from "../../reusable/input/Input";
import styles from "./linkForm.module.css";
import Dropdown from "../../reusable/dropdown/Dropdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { linkSchema } from "../../../utils/schema";
import { ILinkFormFields } from "./linkForm";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LinkFrom() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILinkFormFields>({
    resolver: zodResolver(linkSchema),
    mode: "onBlur",
  });
  return (
    <div>
      <form className={styles.linkForm}>
        <div className={styles.linkFormHeader}>
          <p>Link #1</p>
          <ButtonWithLabel text="Remove" variant="textOnly" />
        </div>
        <div className={styles.inputContainer}>
          <Dropdown />
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
