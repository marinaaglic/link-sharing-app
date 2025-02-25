import FormComponent from '../../components/form/loginAndRegister/FormComponent';
import styles from './loginPage.module.css';

export default function LoginPage() {
  return (
    <div className={styles.loginFormContainer}>
      <h1>Link Sharing App</h1>
      <div className={styles.loginCard}>
        <FormComponent title="Login" text="Add your details below to get back into the app." type="login" />
      </div>
    </div>
  );
}
