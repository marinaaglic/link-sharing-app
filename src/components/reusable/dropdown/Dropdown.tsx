import { useState } from "react";
import styles from "./Dropdown.module.css";
import { IPlatform } from "../../form/link/linkForm";

interface DropdownProps {
  options: IPlatform[];
  selectedOption: IPlatform | null;
  onSelect: (option: IPlatform) => void;
}

export default function Dropdown({
  options,
  selectedOption,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (platform: IPlatform) => {
    onSelect(platform);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <label htmlFor="platform" className={styles.dropdownLabel}>
        Platform
      </label>
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <>
            {selectedOption.iconURL && <img src={selectedOption.iconURL} />}
            <span>{selectedOption.name}</span>
          </>
        ) : (
          <span>Select platform</span>
        )}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option.id} onClick={() => handleSelect(option)}>
              {option.iconURL && <img src={option.iconURL} alt={option.name} />}
              <span>{option.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
