import styles from "./NavBar.module.css";
import ButtonLink from "../reusable/button/ButtonLink";
import ButtonWithLabel from "../reusable/button/ButtonWithLabel";

export default function PreviewNavBar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.previewButtonsContainer}>
        <ButtonLink to="/links" variant="outlined">
          <span className={styles.linksText}>Back to Editor</span>
        </ButtonLink>
        <ButtonWithLabel text="Share Link" variant="default" />
      </div>
    </div>
  );
}
