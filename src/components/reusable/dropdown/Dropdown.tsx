import { useState } from "react";
import styles from "./dropdown.module.css";
import { IPlatform } from "../../../utils/type/dropdown";

interface DropdownProps {
  options: IPlatform[];
  selectedOption: IPlatform;
  onSelect: (option: IPlatform) => void;
}

const platforms: IPlatform[] = [
  {
    id: "github",
    name: "Github",
  },
  {
    id: "youtube",
    name: "Youtube",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
  },
  {
    id: "facebook",
    name: "Facebook",
  },
];

export default function Dropdown() {
  const [selectedPlatform, setSelectedPlatfrom] = useState<IPlatform | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.dropdownWrapper}>
      <label htmlFor="platform" className={styles.dropdownLabel}>
        Platform
      </label>
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {selectedPlatform ? (
          <>
            <img src={selectedPlatform.imgUrl} />
          </>
        ) : (
          <span>Odaberi platformu</span>
        )}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {platforms.map((platform) => (
            <li key={platform.id}>
              <img src={platform.imgUrl} />
              <span>{platform.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
