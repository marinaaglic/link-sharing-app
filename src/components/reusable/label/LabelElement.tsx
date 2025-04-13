import styles from "./LabelElement.module.css";
import { LabelType } from "../../../utils/type/label";

export default function LabelElement({ id, text, size, ...rest }: LabelType) {
  return (
    <div className={styles.labelWrapper}>
      <label htmlFor={id} {...rest}>
        {text}
      </label>
    </div>
  );
}
