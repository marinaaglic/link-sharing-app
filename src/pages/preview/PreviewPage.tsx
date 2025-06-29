import PreviewNavBar from "../../components/navbar/PreviewNavBar";
import ProfileDetailsCard from "../../components/profileDetails/ProfileDetailsCard";
import styles from "./PreviewPage.module.css";

export default function PreviewPage() {
  return (
    <div className={styles.pageContainer}>
      <PreviewNavBar />
      <div className={styles.container}>
        <ProfileDetailsCard />
      </div>
    </div>
  );
}
