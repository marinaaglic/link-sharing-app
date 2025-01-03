import { FormHTMLAttributes } from "react";
import { ReactNode } from "react";

export type FormType = {
  title: string;
  text: string;

  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export interface IFormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}
