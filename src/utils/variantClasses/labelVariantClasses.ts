import styles from "../../components/reusable/label/LabelElement.module.css";
import { LabelVariant } from "../type/label";

export const labelVariantClasses: Record<LabelVariant, string> = {
  small: styles.labelSmall,
  medium: styles.labelMedium,
};
