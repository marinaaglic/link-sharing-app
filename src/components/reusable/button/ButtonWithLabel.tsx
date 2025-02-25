import { ButtonLabelType } from '../../../utils/type/button';
import { buttonLabelVariantClasses } from '../../../utils/variantClasses/buttonLabelVariantClasses';
import styles from './buttonWithLabel.module.css';

export default function ButtonWithLabel({ label, text, variant, ...rest }: ButtonLabelType) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <button className={variant && buttonLabelVariantClasses[variant]} {...rest}>
        {text}
      </button>
    </div>
  );
}
