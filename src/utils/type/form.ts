import { ComponentPropsWithoutRef } from "react";
import { ReactNode } from "react";

export type FormType = {
  title: string;
  text: string;

  children: ReactNode;
} & ComponentPropsWithoutRef<"form">;
