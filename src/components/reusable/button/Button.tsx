import { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  text: string;
  className?: string;
  onClick: () => void;
} & ComponentPropsWithoutRef<"button">;

export default function Button({
  label,
  text,
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <button className={className} onClick={onClick} {...props}>
        {text}
      </button>
    </div>
  );
}
