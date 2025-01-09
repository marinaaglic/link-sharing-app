import { ButtonHTMLAttributes } from "react";

export type ButtonLabelType = {
  label?: string;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
