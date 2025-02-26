import { useState } from "react";
import { addUserLink } from "../../utils/firebase/firebaseLinks";
import { ILinkFormFields } from "../form/link/linkForm";
import LinkForm from "../form/link/LinkFormComponent";
import ButtonWithLabel from "../reusable/button/ButtonWithLabel";
import styles from "./customizeLinks.module.css";

export default function CustomizeLinks() {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [formData, setFormData] = useState<ILinkFormFields | null>(null);

  const handleFormValidation = (valid: boolean) => {
    setIsFormValid(valid);
  };

  const handleSaveLink = async () => {
    if (formData && isFormValid) {
      console.log("Form data is ready:", formData);
      try {
        const newLink = await addUserLink(formData);
        console.log("Link saved.", newLink);
        setShowForm(false);
      } catch (error) {
        console.log("Error while saving link.", error);
      }
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
          <LinkForm
            onFormValidation={handleFormValidation}
            setFormData={setFormData}
          >
            <ButtonWithLabel
              text="Save"
              variant="defaultSmall"
              type="submit"
              disabled={!isFormValid}
              onClick={handleSaveLink}
            />
          </LinkForm>
        )}
      </div>
      <hr />
      <div className={styles.saveButton}></div>
    </div>
  );
}
