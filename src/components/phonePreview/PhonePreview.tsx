import styles from "./phonePreview.module.css";

export default function PhonePreview() {
  return (
    <div className={styles.phoneWrapper}>
      <div className={styles.phoneOutline}>
        <div className={styles.phoneInline}>
          <div className={styles.profileCircle}></div>
          <div className={styles.contact}></div>
          <div className={styles.name}></div>
        </div>
      </div>
    </div>
  );
}
