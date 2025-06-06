import { forwardRef } from "react";
import { InputType } from "../../../utils/type/input";
import styles from "./Input.module.css";
import clsx from "clsx";

function Input(
  { type, id, error, ...rest }: InputType,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
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
  );
}

export default forwardRef(Input);
