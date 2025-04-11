import styles from "./PageContainer.module.css";
import NavBar from "../navbar/NavBar";
import PhonePreview from "../phonePreview/PhonePreview";
import { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContentProps) {
  return (
    <div className={styles.pageContainer}>
      <NavBar />
      <div className={styles.pageContent}>
        <div className={styles.phonePreviewContainer}>
          <PhonePreview />
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
}
