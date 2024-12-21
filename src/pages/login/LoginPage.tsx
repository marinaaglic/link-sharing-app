import Form from "../../components/form/Form";
import Input from "../../components/reusable/input/Input";
import Button from "../../components/reusable/button/Button";
import styles from "./loginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <Form
          title="Login"
          text="Add your details below to get back into the app."
          linkText="Don't have an account? Create account"
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
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <Button text="Login" />
        </Form>
      </div>
    </div>
  );
}
