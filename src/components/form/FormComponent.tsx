import styles from "./form.module.css";
import { FormType } from "./form";
import ButtonWithLabel from "../reusable/button/ButtonWithLabel";
import Input from "../reusable/input/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/schema";

export default function FormComponent({
  title,
  text,
  type,
  onCTAClick,
}: FormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>{title}</h1>
      <p className={styles.formSubtitle}>{text}</p>
      <form className={styles.form}>
        <Input
          type="email"
          label="Email address"
          id="email"
          {...register("email")}
          error={errors.email?.message?.toString()}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          {...register("password")}
          error={errors.password?.message?.toString()}
        />
        {type === "register" && (
          <Input
            type="password"
            label="Confirm Password"
            id="confirmPassword"
            {...register("confirmPassword")}
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
