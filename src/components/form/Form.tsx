import styles from "./form.module.css";
import { FormType } from "../../utils/type/form";

export default function Form({ title, text, children }: FormType) {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>{title}</h1>
      <p className={styles.formDescription}>{text}</p>
      <form className={styles.form}>{children}</form>
    </div>
  );
}
