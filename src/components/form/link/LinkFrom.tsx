import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Input from "../../reusable/input/Input";
import styles from "./linkForm.module.css";

export default function LinkFrom() {
  return (
    <div>
      <div className={styles.linkFormHeader}>
        <p>Link #1</p>
        <ButtonWithLabel text="Remove" />
      </div>
      <div className={styles.inputContainer}>
        <select></select>
        <Input
          label="Link"
          type="text"
          id="link"
          placeholder="e.g. https://www.github.com/johnappleseed"
        />
      </div>
    </div>
  );
}
