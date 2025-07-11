import styles from "./ProfileDetailsCard.module.css";
import { useUserDetails } from "../../context/UserDetailsContext";
import { useUserPlatforms } from "../../context/UserPlatformsContext";
import { FaArrowRight } from "react-icons/fa";
import { getPlatformColor } from "../../utils/platformColors";

export default function ProfileDetailsCard() {
  const { userDetails, loading } = useUserDetails();
  const { userPlatforms } = useUserPlatforms();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!userDetails) {
    return <p>User details are not available.</p>;
  }
  const { firstName, lastName, email } = userDetails;

  const handleCopy = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      console.log("Copied to clipboard.");
    } catch (error) {
      console.log("Unable to copy to clipboard. ", error);
    }
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.profileHeader}>
        <div className={styles.profilePicture}></div>
        <h2>
          {firstName} {lastName}
        </h2>
        <span className={styles.spanEmail}>{email}</span>
      </div>
      <div className={styles.addedLinks}>
        {userPlatforms && userPlatforms.length > 0 ? (
          <ul className={styles.platformList}>
            {userPlatforms.map((platform) => (
              <li
                key={platform.id}
                className={styles.listItem}
                style={{
                  backgroundColor: getPlatformColor(platform.platform),
                  color: "#fff",
                }}
              >
                <span>{platform.platform}</span>
                <button
                  onClick={() => handleCopy(platform.url)}
                  className={styles.copyButton}
                >
                  <FaArrowRight className={styles.arrow} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No links added.</p>
        )}
      </div>
    </div>
  );
}
