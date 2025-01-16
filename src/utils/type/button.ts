import { ButtonHTMLAttributes } from "react";
import { AnchorHTMLAttributes } from "react";

export type ButtonLabelType = {
  label?: string;
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkType = {
  to: string;
  text: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
