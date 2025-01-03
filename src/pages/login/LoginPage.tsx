import styles from "./loginPage.module.css";

import FormComponent from "../../components/form/FormComponent";
import Input from "../../components/reusable/input/Input";
import ButtonWithLabel from "../../components/reusable/button/ButtonWithLabel";
import { IFormErrors } from "../../components/form/form";

import { Link } from "react-router-dom";
import { ChangeEvent, FocusEvent, useState } from "react";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<IFormErrors>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Can't be empty",
        password: "Please check again",
      }));
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <h1>Link Sharing App</h1>
      <div className={styles.loginCard}>
        <FormComponent
          title="Login"
          text="Add your details below to get back into the app."
        >
          <Input
            type="email"
            label="Email address"
            id="email"
            name="email"
            value={formValues.email}
            placeholder="e.g. alex@email.com"
            error={errors.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <Input
            type="password"
            label="Password"
            id="password"
            name="password"
            value={formValues.password}
            placeholder="Enter your password"
            error={errors.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <ButtonWithLabel text="Login" />
          <p className={styles.link}>
            Don't have an account?{" "}
            <Link to="/registration">Create account</Link>
          </p>
        </FormComponent>
      </div>
    </div>
  );
}
