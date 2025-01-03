import styles from "./loginPage.module.css";

import FormComponent from "../../components/form/FormComponent";

// interface ILoginFormValues {
//   email: string;
//   password: string;
// }

export default function LoginPage() {
  const handleLogin = () => {
    console.log("Login action triggered");
  };

  return (
    <div className={styles.loginFormContainer}>
      <h1>Link Sharing App</h1>
      <div className={styles.loginCard}>
        <FormComponent
          title="Login"
          text="Add your details below to get back into the app."
          type="login"
          onCTAClick={handleLogin}
        />
      </div>
    </div>
  );
}
