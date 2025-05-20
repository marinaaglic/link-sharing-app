import styles from "./ProfileDetails.module.css";

export default function ProfileDetailsCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.profilePicture}></div>
      <div className={styles.userInfo}>
        <h2>Name</h2>
        <span>E-mail</span>
      </div>
      <div className={styles.addedLinks}></div>
    </div>
  );
}
