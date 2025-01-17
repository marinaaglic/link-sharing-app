import ButtonLink from "../reusable/button/ButtonLink";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <h2>Link Sharing App</h2>
        <div className={styles.buttonsContainer}>
          <ButtonLink text="Links" to="/links" variant="default" />
          <ButtonLink
            text="Profile Details"
            to="/profile-details"
            variant="default"
          />
        </div>
        <div className={styles.previewButton}>
          <ButtonLink text="Preview" to="/preview" variant="outlined" />
        </div>
      </div>
    </div>
  );
}
