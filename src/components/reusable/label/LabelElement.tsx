import styles from "./LabelElement.module.css";
import { LabelType } from "../../../utils/type/label";
import { labelVariantClasses } from "../../../utils/variantClasses/labelVariantClasses";

export default function LabelElement({
  id,
  text,
  variant,
  ...rest
}: LabelType) {
  return (
    <div className={styles.labelWrapper}>
      <label
        htmlFor={id}
        {...rest}
        className={variant && labelVariantClasses[variant]}
      >
        {text}
      </label>
    </div>
  );
}
