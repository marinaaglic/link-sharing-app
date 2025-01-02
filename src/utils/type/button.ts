import { ComponentPropsWithoutRef } from "react";

export type ButtonType = {
  label?: string;
  text: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;
