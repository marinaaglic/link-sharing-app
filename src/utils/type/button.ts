import { ButtonHTMLAttributes } from "react";
import { AnchorHTMLAttributes } from "react";

export type ButtonLabelVariant = "default" | "defaultSmall" | "long" | "square";

export type ButtonLabelType = {
  label?: string;
  text: string;
  variant?: ButtonLabelVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkVariant = "default" | "outlined";

export type ButtonLinkType = {
  to: string;
  text: string;
  variant?: ButtonLinkVariant;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
