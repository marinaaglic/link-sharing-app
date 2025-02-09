import { FormHTMLAttributes } from "react";

export type FormType = {
  title: string;
  text: string;
  type: "login" | "register";
  onCTAClick?: () => void;
} & FormHTMLAttributes<HTMLFormElement>;

export interface IFormFields {
  email?: string;
  password?: string;
  confirmPassword?: string;
}
