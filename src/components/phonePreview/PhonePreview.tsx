import styles from "./PhonePreview.module.css";
import { useUserPlatforms } from "../../context/UserPlatformsContext";
import { getPlatformColor } from "../../utils/platformColors";
import { FaArrowRight } from "react-icons/fa";

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
            {Array.from({ length: 5 }).map((_, index) => {
              const platform = userPlatforms[index];
              const backgroundColor = platform
                ? getPlatformColor(platform.platform)
                : "var(--light-grey)";
              const textColor = platform ? "#fff" : "#999";
              const label = platform ? platform.platform : "";
              return (
                <div
                  key={index}
                  className={`${styles.linkElement} ${!platform ? styles.emptyLink : ""}`}
                  style={{ backgroundColor, color: textColor }}
                >
                  {label}
                  {platform && <FaArrowRight className={styles.arrow} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
