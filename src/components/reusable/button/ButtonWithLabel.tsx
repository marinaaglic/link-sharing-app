import { ButtonLabelType } from "../../../utils/type/button";
import styles from "./button.module.css";

export default function ButtonWithLabel({
  label,
  text,
  ...rest
}: ButtonLabelType) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <button className={styles.button} {...rest}>
        {text}
      </button>
    </div>
  );
}
