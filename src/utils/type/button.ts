import { ButtonHTMLAttributes, ReactNode } from "react";
import { AnchorHTMLAttributes } from "react";

export type ButtonLabelVariant =
  | "default"
  | "defaultSmall"
  | "long"
  | "square"
  | "textOnly";

export type ButtonLabelType = {
  label?: string;
  text: string;
  variant?: ButtonLabelVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkVariant = "default" | "outlined";

export type ButtonLinkType = {
  to: string;
  children: ReactNode;
  variant?: ButtonLinkVariant;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type UploadImageButtonType = {
  label?: string;
} & ButtonHTMLAttributes<HTMLInputElement>;
