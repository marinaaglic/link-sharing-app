import styles from "./form.module.css";
import { FormType } from "./form";

export default function FormComponent({ title, text, children }: FormType) {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>{title}</h1>
      <p className={styles.formSubtitle}>{text}</p>
      <form className={styles.form}>{children}</form>
    </div>
  );
}
