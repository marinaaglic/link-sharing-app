import { ButtonHTMLAttributes } from "react";
import { AnchorHTMLAttributes } from "react";

export type ButtonLabelType = {
  label?: string;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkVariant = "default" | "outlined";

export type ButtonLinkType = {
  to: string;
  text: string;
  variant?: ButtonLinkVariant;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
