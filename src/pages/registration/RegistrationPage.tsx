import styles from "./registrationPage.module.css";

import FormComponent from "../../components/form/FormComponent";
import Input from "../../components/reusable/input/Input";
import ButtonWithLabel from "../../components/reusable/button/ButtonWithLabel";
import { IFormErrors } from "../../components/form/form";

import { Link } from "react-router-dom";
import { ChangeEvent, FocusEvent, useState } from "react";

interface IRegistrationFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegistrationPage() {
  const [formValues, setFormValues] = useState<IRegistrationFormValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<IFormErrors>({
    email: "",
    password: "",
    confirmPassword: "",
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
        confirmPassword: "Passwords do not match",
      }));
    }
  };
  return (
    <div className={styles.registrationFormContainer}>
      <h1>Link Sharing App</h1>
      <div className={styles.registrationCard}>
        <FormComponent
          title="Create Account"
          text="Let's get you started sharing your links!"
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
            label="Create password"
            id="password"
            name="password"
            value={formValues.password}
            placeholder="At least 8 characters"
            error={errors.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <Input
            type="password"
            label="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            placeholder="At least 8 characters"
            error={errors.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <p className={styles.passReq}>
            Password must contain at least 8 characters.
          </p>
          <ButtonWithLabel text="Create new account" />
          <p className={styles.link}>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </FormComponent>
      </div>
    </div>
  );
}
