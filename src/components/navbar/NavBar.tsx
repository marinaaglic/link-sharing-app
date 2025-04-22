import ButtonLink from "../reusable/button/ButtonLink";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <h2>Link Sharing App</h2>
        <div className={styles.buttonsContainer}>
          <ButtonLink to="/links" variant="default">
            <img src="/link-teal.svg" className={styles.linkIcon} />
            <span className={styles.linksText}>Links</span>
          </ButtonLink>
          <ButtonLink to="/profile-details" variant="default">
            <img src="/profile-teal.svg" className={styles.profileIcon} />
            <span className={styles.profileText}>Profile</span>
          </ButtonLink>
        </div>
        <div className={styles.previewButton}>
          <ButtonLink to="/preview" variant="outlined">
            <img src="/preview.svg" className={styles.previewIcon} />
            <span className={styles.previewText}>Preview</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
