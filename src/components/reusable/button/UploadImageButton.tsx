import styles from "./UploadImageButton.module.css";
import { UploadImageButtonType } from "../../../utils/type/button";

export default function UploadImageButton({
  label,
  ...rest
}: UploadImageButtonType) {
  const inputId = "upload-image-input";

  return (
    <div className={styles.container}>
      <label htmlFor={inputId} className={styles.uploadBox}>
        <span className={styles.labelText}>{label}</span>
      </label>
      <input
        id={inputId}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        {...rest}
      />
    </div>
  );
}
