import NavBar from "../../components/navbar/NavBar";
import CustomizeLinks from "../../components/customizeLinks/CustomizeLinks";
import PhonePreview from "../../components/phonePreview/PhonePreview";
import styles from "./linksPage.module.css";

export default function LinksPage() {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div className={styles.pageContent}>
        <div className={styles.phonePreviewContainer}>
          <PhonePreview />
        </div>
        <div className={styles.customizeLinksContainer}>
          <CustomizeLinks />
        </div>
      </div>
    </div>
  );
}
