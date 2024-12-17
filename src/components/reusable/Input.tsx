import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  type: "text" | "number" | "email" | "password";
  label: string;
  id: string;
  className?: string;
  error?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<"input">;

export default function Input({}: InputProps) {
  return <div>Input</div>;
}
