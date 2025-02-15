import { useState } from "react";
import styles from "./dropdown.module.css";
import { IPlatform } from "../../form/link/linkForm";
import usePlatforms from "../../../hooks/usePlatforms";

interface DropdownProps {
  options: IPlatform[];
  selectedOption: IPlatform;
  onSelect: (option: IPlatform) => void;
}

export default function Dropdown() {
  const platforms = usePlatforms();
  const [selectedPlatform, setSelectedPlatfrom] = useState<IPlatform | null>(
    null
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (platform: IPlatform) => {
    setSelectedPlatfrom(platform);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <label htmlFor="platform" className={styles.dropdownLabel}>
        Platform
      </label>
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {selectedPlatform ? (
          <>
            {selectedPlatform.iconURL && <img src={selectedPlatform.iconURL} />}
            <span>{selectedPlatform.name}</span>
          </>
        ) : (
          <span>Select platform</span>
        )}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {platforms.map((platform) => (
            <li key={platform.id} onClick={() => handleSelect(platform)}>
              {platform.iconURL && (
                <img src={platform.iconURL} alt={platform.name} />
              )}
              <span>{platform.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
