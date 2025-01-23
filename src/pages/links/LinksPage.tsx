import NavBar from "../../components/navbar/NavBar";
import CustomizeLinks from "../../components/customizeLinks/CustomizeLinks";
import PhonePreview from "../../components/phonePreview/phonePreview";
import styles from "./linksPage.module.css";

export default function LinksPage() {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div className={styles.pageContent}>
        <PhonePreview />
        <CustomizeLinks />
      </div>
    </div>
  );
}
