import styles from "./UploadImageButton.module.css";
import { UploadImageButtonType } from "../../../utils/type/button";

export default function UploadImageButton({
  label,
  ...rest
}: UploadImageButtonType) {
  return (
    <div className={styles.container}>
      <label className={styles.uploadBox}>
        <span className={styles.labelText}>{label}</span>
        <input
          type="file"
          accept="image/*"
          className={styles.hiddenInput}
          {...rest}
        />
      </label>
    </div>
  );
}
