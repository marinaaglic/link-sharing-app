import { ButtonLabelType } from "../../../utils/type/button";
import styles from "./button.module.css";
import { ButtonLabelVariantClasses } from "../../../utils/variantClasses/buttonLabelVariantClasses";
import clsx from "clsx";

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
        className={clsx(variant && ButtonLabelVariantClasses[variant])}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}
