import { InputType } from "../../../utils/type/input";
import styles from "./input.module.css";
import clsx from "clsx";

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
          className={clsx(styles.input, { [styles.inputError]: error })}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    </div>
  );
}
