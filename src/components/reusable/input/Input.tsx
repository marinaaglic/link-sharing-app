import { InputType } from "../../../utils/type/input";
import styles from "./input.module.css";

export default function Input({ type, label, id, error, ...rest }: InputType) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={id}
          {...rest}
          type={type}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    </div>
  );
}
