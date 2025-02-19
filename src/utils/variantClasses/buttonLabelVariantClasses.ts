import styles from "../../components/reusable/button/buttonWithLabel.module.css";
import { ButtonLabelVariant } from "../type/button";

export const buttonLabelVariantClasses: Record<ButtonLabelVariant, string> = {
  default: styles.buttonLabelDefault,
  defaultSmall: styles.buttonLabelSmall,
  long: styles.buttonLabelLong,
  square: styles.buttonLabelSquare,
  textOnly: styles.buttonLabelText,
};
