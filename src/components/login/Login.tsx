import Input from "../reusable/Input";
import styles from "./login.module.css";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className={styles.container}>
      <h1>Link Sharing App</h1>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Login</h1>
        <p className={styles.loginText}>
          Add your details below to get back into the app
        </p>
        <form className={styles.loginForm}>
          <Input
            type="email"
            label="E-mail address"
            id="e-mail"
            name="e-mail"
            placeholder="e.g. alex@email.com"
          />
          <Input
            type="password"
            label="Password"
            id="password"
            name="username"
            placeholder="Enter your password"
          />
          <button className={styles.loginButton}>Login</button>
        </form>
        <p className={styles.link}>Don't have an account? Create account</p>
      </div>
    </div>
  );
}
