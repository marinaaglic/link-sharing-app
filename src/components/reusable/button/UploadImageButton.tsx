import styles from "./UploadImageButton.module.css";
import { UploadImageButtonType } from "../../../utils/type/button";

export default function UploadImageButton({
  label,
  text,
  ...rest
}: UploadImageButtonType) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <button {...rest} className={styles.uploadImageBtn}>
        {text}
      </button>
    </div>
  );
}
