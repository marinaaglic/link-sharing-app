import styles from "../../components/reusable/button/button.module.css";
import { ButtonLabelVariant } from "../type/button";

export const buttonLabelVariantClasses: Record<ButtonLabelVariant, string> = {
  default: styles.buttonLabelDefault,
  long: styles.buttonLabelLong,
  square: styles.buttonLabelSquare,
};
