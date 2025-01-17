import styles from "../../components/reusable/button/buttonLink.module.css";
import { ButtonLinkVariant } from "../type/button";

export const buttonLinkVariantClasses: Record<ButtonLinkVariant, string> = {
  default: styles.buttonLinkDefault,
  outlined: styles.buttonLinkOutlined,
};
