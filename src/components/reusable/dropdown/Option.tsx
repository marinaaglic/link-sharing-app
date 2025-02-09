import { IOption } from "../../../utils/type/dropdown";
import styles from "./option.module.css";

interface OptionProps {
  option: IOption;
}

export default function Option({ option }: OptionProps) {
  return (
    <div className={styles.optionWrapper}>
      <img src={option.imgUrl} />
      {option.name}
    </div>
  );
}
