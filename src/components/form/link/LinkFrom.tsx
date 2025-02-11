import ButtonWithLabel from "../../reusable/button/ButtonWithLabel";
import Input from "../../reusable/input/Input";
import styles from "./linkForm.module.css";
import Dropdown from "../../reusable/dropdown/Dropdown";

export default function LinkFrom() {
  return (
    <div>
      <form className={styles.linkForm}>
        <div className={styles.linkFormHeader}>
          <p>Link #1</p>
          <ButtonWithLabel text="Remove" />
        </div>
        <div className={styles.inputContainer}>
          <Dropdown />
          <Input
            label="Link"
            type="text"
            id="link"
            placeholder="e.g. https://www.github.com/johnappleseed"
          />
        </div>
      </form>
    </div>
  );
}
