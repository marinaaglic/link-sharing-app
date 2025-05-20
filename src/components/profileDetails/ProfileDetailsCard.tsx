import styles from "./ProfileDetailsCard.module.css";

export default function ProfileDetailsCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.profileHeader}>
        <div className={styles.profilePicture}></div>
        <h2>Name</h2>
        <span>E-mail</span>
      </div>
      <div className={styles.addedLinks}></div>
    </div>
  );
}
