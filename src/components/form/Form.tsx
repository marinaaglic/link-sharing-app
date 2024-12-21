import styles from "./form.module.css";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type FormProps = {
  title: string;
  text: string;
  children: ReactNode;
  submitHandler: () => void;
} & ComponentPropsWithoutRef<"form">;

export default function Form({
  title,
  text,
  children,
  submitHandler,
}: FormProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={text}>{text}</p>
      <form className={styles.form} onSubmit={submitHandler}>
        {children}
      </form>
    </div>
  );
}
