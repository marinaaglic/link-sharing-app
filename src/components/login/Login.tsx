import Input from "../reusable/Input";
import styles from "./login.module.css";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.content}>
          <h2>Login</h2>
          <p>Add your details below to get back into the app</p>
        </div>
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
      </div>
    </div>
  );
}
