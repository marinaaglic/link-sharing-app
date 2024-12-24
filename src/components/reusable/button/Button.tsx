import { ButtonType } from "../../../utils/type/button";
import styles from "./button.module.css";

export default function Button({
  label,
  text,
  className,
  ...props
}: ButtonType) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <button className={styles.button} {...props}>
        {text}
      </button>
    </div>
  );
}
