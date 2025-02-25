import styles from "./customizeLinks.module.css";
import ButtonWithLabel from "../reusable/button/ButtonWithLabel";
import { useState } from "react";
import LinkFrom from "../form/link/LinkFrom";
import { addUserLink } from "../../utils/firebase/firebaseLinks";
import { ILinkFormFields } from "../form/link/linkForm";

export default function CustomizeLinks() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [formData, setFormData] = useState<ILinkFormFields | null>(null);

  const handleFormValidation = (valid: boolean) => {
    setIsFormValid(valid);
  };

  const handleSaveLink = async () => {
    if (formData) {
      console.log("Form data: ", formData);
      try {
        const newLink = await addUserLink(formData);
        console.log("Link saved.", newLink);
        setShowForm(false);
      } catch (error) {
        console.log("Error while saving link.", error);
      }
    } else {
      console.log("No form data to save.");
    }
  };

  return (
    <div className={styles.customizeWrapper}>
      <div className={styles.customizeHeader}>
        <h2>Customize your links</h2>
        <p className={styles.pHeader}>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <ButtonWithLabel
          text="+ Add new link"
          variant="long"
          onClick={() => setShowForm(!showForm)}
        />
      </div>
      <div className={styles.addedLinks}>
        {showForm ? (
          <>
            <h2>Let's get you started</h2>
            <p className={styles.pGetStared}>
              Use the "Add new link" button to get started. Once you have more
              than one link, you can reorder and edit them. We are here to help
              you share your profiles with everyone!
            </p>
          </>
        ) : (
          <LinkFrom
            onFormValidation={handleFormValidation}
            setFormData={setFormData}
          />
        )}
      </div>
      <hr />
      <div className={styles.saveButton}>
        <ButtonWithLabel
          text="Save"
          variant="defaultSmall"
          disabled={!isFormValid}
          onClick={handleSaveLink}
        />
      </div>
    </div>
  );
}
