import styles from "./customizeLinks.module.css";
import ButtonWithLabel from "../reusable/button/ButtonWithLabel";

export default function CustomizeLinks() {
  return (
    <div className={styles.customizeWrapper}>
      <div className={styles.customizeHeader}>
        <h2>Customize your links</h2>
        <p className={styles.pHeader}>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <ButtonWithLabel text="+ Add new link" variant="long" />
      </div>
    </div>
  );
}
