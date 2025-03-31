import styles from "./ProfileDetails.module.css";
import NavBar from "../../components/navbar/NavBar";
import PhonePreview from "../../components/phonePreview/PhonePreview";

export default function ProfileDetailsPage() {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div className={styles.pageContent}>
        <PhonePreview />
      </div>
      <div className={styles.profileDetails}>
        
      </div>
    </div>
  )
}