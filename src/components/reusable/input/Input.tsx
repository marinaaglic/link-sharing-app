import { ComponentPropsWithoutRef } from "react";
import styles from "./input.module.css";

type InputProps = {
  type: "text" | "number" | "email" | "password";
  label: string;
  id: string;
  className?: string;
  error?: string;
  disabled?: boolean;
} & ComponentPropsWithoutRef<"input">;

export default function Input({
  type,
  label,
  id,
  className,
  error,
  disabled,
  ...props
}: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}{" "}
      </label>
      <input id={id} name={id} {...props} className={styles.input} />
    </div>
  );
}
