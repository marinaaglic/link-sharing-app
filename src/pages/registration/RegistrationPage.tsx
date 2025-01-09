import styles from "./registrationPage.module.css";

import FormComponent from "../../components/form/FormComponent";

// interface IRegistrationFormValues {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

export default function RegistrationPage() {
  const handleRegistration = () => {
    console.log("Login action triggered");
  };
  return (
    <div className={styles.registrationFormContainer}>
      <h1>Link Sharing App</h1>
      <div className={styles.registrationCard}>
        <FormComponent
          title="Create Account"
          text="Let's get you started sharing your links!"
          type="register"
          onCTAClick={handleRegistration}
        />
      </div>
    </div>
  );
}
