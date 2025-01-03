import styles from "./form.module.css";
import { FormType } from "./form";
import ButtonWithLabel from "../reusable/button/ButtonWithLabel";
import Input from "../reusable/input/Input";
import { Link } from "react-router-dom";

export default function FormComponent({
  title,
  text,
  type,
  onCTAClick,
}: FormType) {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>{title}</h1>
      <p className={styles.formSubtitle}>{text}</p>
      <form className={styles.form}>
        <Input type="email" label="Email address" id="email" name="email" />
        <Input type="password" label="Password" id="password" name="password" />
        {type === "register" && (
          <Input
            type="password"
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
          />
        )}
        <ButtonWithLabel
          text={type === "login" ? "Login" : "Create new account"}
          onClick={onCTAClick}
        />
        {type === "login" ? (
          <p className={styles.link}>
            Don't have an account?{" "}
            <Link to="/registration">Create account</Link>
          </p>
        ) : (
          <p className={styles.link}>
            Already have an account? <Link to="/">Login</Link>
          </p>
        )}
      </form>
    </div>
  );
}
