import styles from "./ProfileDetailsForm.module.css";
import Input from "../../reusable/input/Input";
import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileDetailsSchema } from "../../../utils/schema";
import { useForm } from "react-hook-form";
import { IProfileDetails } from "./profileDetails";
import UploadImageButton from "../../reusable/button/UploadImageButton";
import LabelElement from "../../reusable/label/LabelElement";

export default function ProfileDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useForm<IProfileDetails>({
    resolver: zodResolver(profileDetailsSchema),
    mode: "onBlur",
  });

  return (
    <div className={styles.customizeWrapper}>
      <div>
        <h2>Profile Details</h2>
        <p>Add your details to add personal touch to your profile.</p>
      </div>
      <form>
        <div className={styles.uploadButton}>
          <LabelElement
            text="Profile picture"
            id="profilePicture"
            variant="medium"
          />
          <UploadImageButton label="+ Upload image" />
          <LabelElement
            text="Image must be below 1024x1024px. Use PNG or JPG format."
            variant="small"
          />
        </div>
        <div className={styles.inputElements}>
          <div className={styles.divRow}>
            <LabelElement
              text="First name*"
              htmlFor="firstName"
              variant="medium"
            />
            <Input
              id="firstName"
              type="text"
              placeholder="e.g. John"
              {...register("firstName")}
              error={errors.firstName?.message?.toString()}
            />
          </div>
          <div className={styles.divRow}>
            <LabelElement
              text="Last name*"
              htmlFor="lastName"
              variant="medium"
            />
            <Input
              id="lastName"
              type="text"
              placeholder="e.g. Appleseed"
              {...register("lastName")}
              error={errors.lastName?.message?.toString()}
            />
          </div>
          <div className={styles.divRow}>
            <LabelElement text="E-mail" htmlFor="email" variant="medium" />
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="e.g. email@example.com"
            />
          </div>
        </div>
        <hr />
        <div className={styles.saveButton}>
          <ButtonWithLabel text="Save" variant="defaultSmall" type="submit" />
        </div>
      </form>
    </div>
  );
}
