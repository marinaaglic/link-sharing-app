import Input from "../reusable/Input";
import styles from "./registration.module.css";

type Props = {};

export default function Registration({}: Props) {
  return (
    <div className={styles.container}>
      <h1>Link Sharing App</h1>
      <div className={styles.registrationCard}>
        <h1 className={styles.registrationTitle}>Create account</h1>
        <p className={styles.registrationText}>
          Let's get you started sharing your links!
        </p>
        <form className={styles.registrationForm}>
          <Input
            type="email"
            label="E-mail address"
            id="e-mail"
            name="e-mail"
            placeholder="e.g. alex@email.com"
          />
          <Input
            type="password"
            label="Create password"
            id="password"
            name="password"
            placeholder="At least 8 characters"
          />
          <Input
            type="password"
            label="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="At least 8 characters"
          />
          <p className={styles.passwordReq}>
            Password must contain at least 8 charaters.
          </p>
          <button className={styles.registrationButton}>
            Create new account
          </button>
        </form>
        <p className={styles.link}>Already have an account? Login</p>
      </div>
    </div>
  );
}
