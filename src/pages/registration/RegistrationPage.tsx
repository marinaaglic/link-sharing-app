import styles from "./registrationPage.module.css";

import Form from "../../components/form/Form";
import Input from "../../components/reusable/input/Input";
import Button from "../../components/reusable/button/Button";
import { FormErrors } from "../../utils/type/form";

import { Link } from "react-router-dom";
import { ChangeEvent, FocusEvent, useState } from "react";

interface RegistrationFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegistrationPage() {
  const [formValues, setFormValues] = useState<RegistrationFormValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
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
      }));
    }
  };
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
            id="password"
            name="password"
            value={formValues.confirmPassword}
            placeholder="At least 8 characters"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <p className={styles.passReq}>
            Password must contain at least 8 characters.
          </p>
          <Button text="Create new account" />
          <p className={styles.link}>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
