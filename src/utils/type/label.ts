import { LabelHTMLAttributes } from "react";

export type LabelType = {
  id?: string;
  text: string;
  size?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;
