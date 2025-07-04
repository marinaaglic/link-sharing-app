import styles from "./Form.module.css";
import { FormType, IFormFields } from "./form";
import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Input from "../../reusable/input/Input";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../utils/schema";
import { useAuth } from "../../../context/UserAuthContext";
import { createNewAccount, signIn } from "../../../utils/firebase/firebaseUser";
import { useNavigate } from "react-router-dom";
import LabelElement from "../../reusable/label/LabelElement";

export default function FormComponent({ title, text, type }: FormType) {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: zodResolver(loginSchema(type)),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormFields> = async (data) => {
    try {
      const action = type === "register" ? createNewAccount : signIn;
      const userCredentials = await action(data.email!, data.password!);

      if (userCredentials) {
        const successMessage = type === "register" ? "Saved!" : "Logged in!";
        console.log(successMessage);
        setCurrentUser(userCredentials.user);
        navigate("/links");
        reset();
      }
    } catch (error: any) {
      const errorMessage =
        type === "register" ? "Create account failed." : "Login failed.";

      console.error(errorMessage, error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>{title}</h1>
      <p className={styles.formSubtitle}>{text}</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <LabelElement text="E-mail address" htmlFor="email" variant="small" />
        <Input
          type="email"
          id="email"
          {...register("email")}
          error={errors.email?.message?.toString()}
        />
        <LabelElement text="Password" htmlFor="password" variant="small" />
        <Input
          type="password"
          id="password"
          {...register("password")}
          error={errors.password?.message?.toString()}
        />
        {type === "register" && (
          <div>
            <LabelElement
              text="Confirm password"
              htmlFor="confirmPassword"
              variant="small"
            />
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message?.toString()}
            />
          </div>
        )}
        <ButtonWithLabel
          text={type === "login" ? "Login" : "Create new account"}
          type="submit"
          variant="default"
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
