import { InputType } from "../../../utils/type/input";
import styles from "./input.module.css";

export default function Input({
  type,
  label,
  id,
  className,
  error,
  disabled,
  ...props
}: InputType) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}{" "}
      </label>
      <input id={id} name={id} {...props} className={styles.input} />
    </div>
  );
}
