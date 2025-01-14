import ButtonWithLabel from "../reusable/button/ButtonWithLabel";
import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarContainer}>
        <h2>Link Sharing App</h2>
        <div className={styles.buttonsContainer}>
          <ButtonWithLabel text="Links" />
          <ButtonWithLabel text="Profile Details" />
        </div>
        <div className={styles.previewButton}>
          <ButtonWithLabel text="Preview" />
        </div>
      </div>
    </div>
  );
}
