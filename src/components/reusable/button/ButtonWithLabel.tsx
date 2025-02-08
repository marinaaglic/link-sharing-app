import { ButtonLabelType } from "../../../utils/type/button";
import styles from "./buttonWithLabel.module.css";
import { buttonLabelVariantClasses } from "../../../utils/variantClasses/buttonLabelVariantClasses";

export default function ButtonWithLabel({
  label,
  text,
  variant,
  ...rest
}: ButtonLabelType) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <button
        className={variant && buttonLabelVariantClasses[variant]}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}
