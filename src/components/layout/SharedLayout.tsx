import styles from "./SharedLayout.module.css";
import MainNavBar from "../navbar/MainNavBar";
import PhonePreview from "../phonePreview/PhonePreview";
import { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
};

export function SharedLayout({ children }: PageContentProps) {
  return (
    <div className={styles.pageContainer}>
      <MainNavBar />
      <div className={styles.pageContent}>
        <div className={styles.phonePreviewContainer}>
          <PhonePreview />
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
}
