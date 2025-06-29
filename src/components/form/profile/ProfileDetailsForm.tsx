import styles from "./ProfileDetailsForm.module.css";
import Input from "../../reusable/input/Input";
import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileDetailsSchema } from "../../../utils/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProfileDetails } from "./profileDetails";
import UploadImageButton from "../../reusable/button/UploadImageButton";
import LabelElement from "../../reusable/label/LabelElement";
import {
  saveUserDetails,
  uploadProfileImage,
} from "../../../utils/firebase/firebaseUser";
import { useState } from "react";
import { auth } from "../../../utils/firebase/firebaseConfig";

export default function ProfileDetailsForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IProfileDetails>({
    resolver: zodResolver(profileDetailsSchema),
    mode: "onBlur",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const onSubmitHandler: SubmitHandler<IProfileDetails> = async (data) => {
    console.log(data);
    try {
      let imageUrl: string | undefined = undefined;

      if (imageFile && auth.currentUser) {
        imageUrl = await uploadProfileImage(imageFile, auth.currentUser.uid);
      }
      const profileDetails = await saveUserDetails({
        firstName: data.firstName as string,
        lastName: data.lastName as string,
        email: data.email as string,
        img: imageUrl,
      });

      console.log("Profile saved: ", profileDetails);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div className={styles.customizeWrapper}>
      <div>
        <h2>Profile Details</h2>
        <p>Add your details to add personal touch to your profile.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={styles.uploadButton}>
          <LabelElement
            text="Profile picture"
            id="profilePicture"
            variant="medium"
          />
          <UploadImageButton
            label="+ Upload image"
            onChange={handleImageChange}
          />
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
