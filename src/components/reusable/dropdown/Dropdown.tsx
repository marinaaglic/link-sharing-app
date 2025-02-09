import { useState } from "react";
import styles from "./dropdown.module.css";
import { IOption } from "../../../utils/type/dropdown";

interface DropdownProps {
  options: IOption[];
  selectedOption: IOption;
  onSelect: (option: IOption) => void;
}

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>Name</span>
      </button>
      {isOpen && (
        <div>
          <ul></ul>
        </div>
      )}
    </div>
  );
}
