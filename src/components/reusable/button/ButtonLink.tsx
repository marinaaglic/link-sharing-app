import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ButtonLinkType } from '../../../utils/type/button';
import { buttonLinkVariantClasses } from '../../../utils/variantClasses/buttonLinkVariantClasses';
import styles from './buttonLink.module.css';

export default function ButtonLink({ to, children, variant, ...rest }: ButtonLinkType) {
  return (
    <div>
      <NavLink
        to={to}
        {...rest}
        className={({ isActive }) =>
          clsx(variant && buttonLinkVariantClasses[variant], {
            [styles.active]: isActive,
          })
        }
      >
        {children}
      </NavLink>
    </div>
  );
}
