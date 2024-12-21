import styles from "./registrationPage.module.css";

import Form from "../../components/form/Form";
import Input from "../../components/reusable/input/Input";
import Button from "../../components/reusable/button/Button";

export default function RegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.registrationCard}>
        <Form
          title="Create Account"
          text="Let's get you started sharing your links!"
        >
          <Input
            type="email"
            label="Email address"
            id="email"
            name="email"
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
            id="password"
            name="password"
            placeholder="At least 8 characters"
          />
          <p className={styles.passReq}>
            Password must contain at least 8 characters.
          </p>
          <Button text="Create new account" />
        </Form>
        <p className={styles.link}>Already have an account? Login</p>
      </div>
    </div>
  );
}
