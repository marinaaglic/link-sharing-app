import { LabelHTMLAttributes } from "react";

export type LabelVariant = "small" | "medium";

export type LabelType = {
  id?: string;
  text: string;
  variant?: LabelVariant;
} & LabelHTMLAttributes<HTMLLabelElement>;
