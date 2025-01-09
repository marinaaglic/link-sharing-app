import { forwardRef } from "react";
import { InputType } from "../../../utils/type/input";
import styles from "./input.module.css";
import clsx from "clsx";

function Input(
  { type, label, id, error, ...rest }: InputType,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={id}
          ref={ref}
          {...rest}
          type={type}
          className={clsx(styles.input, { [styles.inputError]: error })}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    </div>
  );
}

export default forwardRef(Input);
