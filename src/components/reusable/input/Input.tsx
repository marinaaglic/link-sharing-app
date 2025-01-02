import { InputType } from "../../../utils/type/input";
import styles from "./input.module.css";

export default function Input({
  type,
  label,
  id,
  className,
  error,
  ...props
}: InputType) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}{" "}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={id}
          {...props}
          type={type}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    </div>
  );
}
