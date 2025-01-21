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
      <div className={styles.addedLinks}>
        <h2>Let's get you started</h2>
        <p className={styles.pGetStared}>
          Use the "Add new link" button to get started. Once you have more than
          one link, you can reorder and edit them. We are here to help you share
          your profiles with everyone!
        </p>
      </div>
      <hr />
      <div className={styles.saveButton}>
        <ButtonWithLabel text="Save" variant="default" disabled />
      </div>
    </div>
  );
}
