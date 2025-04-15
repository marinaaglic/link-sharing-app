import { LabelHTMLAttributes } from "react";

export type LabelType = {
  id?: string;
  text: string;
  size?: "small" | "medium";
} & LabelHTMLAttributes<HTMLLabelElement>;
