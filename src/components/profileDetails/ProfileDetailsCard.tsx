import styles from "./ProfileDetailsCard.module.css";
import { useUserDetails } from "../../context/UserDetailsContext";
import { useUserPlatforms } from "../../context/UserPlatformsContext";

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

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.profileHeader}>
        <div className={styles.profilePicture}></div>
        <h2>
          {firstName} {lastName}
        </h2>
        <span>{email}</span>
      </div>
      <div className={styles.addedLinks}>
        {userPlatforms && userPlatforms.length > 0 ? (
          <ul className={styles.platformList}>
            {userPlatforms.map((platform) => (
              <li key={platform.id}>
                <span>{platform.platform}</span>
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
