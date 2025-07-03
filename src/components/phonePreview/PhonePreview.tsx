import styles from "./PhonePreview.module.css";
import { useUserPlatforms } from "../../context/UserPlatformsContext";
import { getPlatformColor } from "../../utils/platformColors";
import { FaArrowRight } from "react-icons/fa";
import { useUserDetails } from "../../context/UserDetailsContext";

export default function PhonePreview() {
  const { userPlatforms } = useUserPlatforms();
  const { userDetails } = useUserDetails();

  const hasName = userDetails?.firstName || userDetails?.lastName;
  const userName = hasName
    ? `${userDetails?.firstName || ""} ${userDetails?.lastName || ""}`.trim()
    : null;

  return (
    <div className={styles.phoneWrapper}>
      <div className={styles.phoneOutline}>
        <div className={styles.phoneInline}>
          <div className={styles.profileHeader}>
            <div className={styles.profileCircle}></div>

            {userName ? (
              <div className={styles.nameText}>{userName}</div>
            ) : (
              <div className={styles.name}></div>
            )}
            {userDetails?.email ? (
              <div className={styles.contactText}>{userDetails.email}</div>
            ) : (
              <div className={styles.contact}></div>
            )}
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
