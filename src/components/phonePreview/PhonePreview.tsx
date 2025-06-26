import styles from "./PhonePreview.module.css";
import { useUserPlatforms } from "../../context/UserPlatformsContext";
import { getPlatformColor } from "../../utils/platformColors";

export default function PhonePreview() {
  const { userPlatforms } = useUserPlatforms();

  return (
    <div className={styles.phoneWrapper}>
      <div className={styles.phoneOutline}>
        <div className={styles.phoneInline}>
          <div className={styles.profileHeader}>
            <div className={styles.profileCircle}></div>
            <div className={styles.contact}></div>
            <div className={styles.name}></div>
          </div>

          <div className={styles.phoneContent}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div className={styles.linkElement} key={index}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
