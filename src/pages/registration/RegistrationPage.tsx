import styles from "./registrationPage.module.css";

import FormComponent from "../../components/form/FormComponent";

export default function RegistrationPage() {
  return (
    <div className={styles.registrationFormContainer}>
      <h1>Link Sharing App</h1>
      <div className={styles.registrationCard}>
        <FormComponent
          title="Create Account"
          text="Let's get you started sharing your links!"
          type="register"
        />
      </div>
    </div>
  );
}
