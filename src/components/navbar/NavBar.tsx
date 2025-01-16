import ButtonWithLabel from "../reusable/button/ButtonWithLabel";
import ButtonLink from "../reusable/button/ButtonLink";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <h2>Link Sharing App</h2>
        <div className={styles.buttonsContainer}>
          <ButtonLink text="Links" to="/links" />
          <ButtonLink text="Profile Details" to="/profile-details" />
        </div>
        <div className={styles.previewButton}>
          <ButtonWithLabel text="Preview" />
        </div>
      </div>
    </div>
  );
}
