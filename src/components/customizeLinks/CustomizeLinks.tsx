import { useState } from "react";
import LinkForm from "../form/link/LinkFormComponent";
import ButtonWithLabel from "../reusable/button/ButtonWithLabel";
import styles from "./CustomizeLinks.module.css";
import { useUserPlatforms } from "../../context/UserPlatformsContext";
import { ILinkData } from "../form/link/linkForm";

export default function CustomizeLinks() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<ILinkData | null>(
    null
  );
  const { userPlatforms, loading } = useUserPlatforms();

  const handleAddNewLink = () => {
    setSelectedPlatform(null);
    setShowForm(true);
  };

  const handleEditPlatform = (platform: ILinkData) => {
    setShowForm(true);
    setSelectedPlatform(platform);
  };

  return (
    <div className={styles.customizeWrapper}>
      <div className={styles.customizeHeader}>
        <h2>Customize your links</h2>
        <p className={styles.pHeader}>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : userPlatforms.length > 0 ? (
          <div className={styles.addedPlatforms}>
            <p>Added links</p>
            {userPlatforms.map((platform) => (
              <p
                key={platform.id}
                className={styles.platform}
                onClick={() => handleEditPlatform(platform)}
              >
                {platform.platform}
              </p>
            ))}
          </div>
        ) : (
          <>
            <h2>Let's get you started</h2>
            <p className={styles.pGetStarted}>
              Use the "Add new link" button to get started. Once you have more
              than one link, you can reorder and edit them. We are here to help
              you share your profiles with everyone!
            </p>
          </>
        )}
        <ButtonWithLabel
          text="+ Add new link"
          variant="long"
          onClick={handleAddNewLink}
        />
      </div>
      {showForm && (
        <div className={styles.linkForm}>
          <LinkForm selectedPlatform={selectedPlatform} />
        </div>
      )}

      <hr />
    </div>
  );
}
