import { ComponentPropsWithoutRef } from "react";

export type InputType = {
  type: "text" | "number" | "email" | "password";
  label: string;
  id: string;
  className?: string;
  error?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<"input">;
