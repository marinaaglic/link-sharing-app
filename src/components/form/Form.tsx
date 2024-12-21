import styles from "./form.module.css";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type FormProps = {
  title: string;
  text: string;
  linkText: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"form">;

export default function Form({ title, text, linkText, children }: FormProps) {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>{title}</h1>
      <p className={styles.formDescription}>{text}</p>
      <form className={styles.form}>{children}</form>
      <p className={styles.link}>{linkText}</p>
    </div>
  );
}
