import styles from "./ProfileDetails.module.css";
import NavBar from "../../components/navbar/NavBar";
import PhonePreview from "../../components/phonePreview/PhonePreview";
import ProfileDetailsForm from "../../components/form/profile/ProfileDetailsForm";

export default function ProfileDetailsPage() {
  return (
    <div className={styles.pageContainer}>
    <NavBar />
    <div className={styles.pageContent}>
      <div className={styles.phonePreviewContainer}>
        <PhonePreview />
      </div>
      <div className={styles.profileDetails}>
        <ProfileDetailsForm />
      </div>
    </div>
  </div>
  )
}