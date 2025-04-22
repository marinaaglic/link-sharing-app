import { InputHTMLAttributes } from "react";

export type InputType = {
  type: "text" | "number" | "email" | "password";
  id: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
