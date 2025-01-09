import { InputHTMLAttributes } from "react";

export type InputType = {
  type: "text" | "number" | "email" | "password";
  label: string;
  id: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
