import { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  label?: string;
  text: string;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  label,
  text,
  className,
  ...props
}: ButtonProps) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <button className={styles.button} {...props}>
        {text}
      </button>
    </div>
  );
}
