import { ButtonLinkType } from "../../../utils/type/button";
import { NavLink } from "react-router-dom";
import styles from "./buttonLink.module.css";
import clsx from "clsx";
import { buttonLinkVariantClasses } from "../../../utils/variantClasses/buttonLinkVariantClasses";

export default function ButtonLink({
  to,
  text,
  variant,
  imgSrc,
  ...rest
}: ButtonLinkType) {
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
        {imgSrc && <img src={imgSrc} className={styles.icon} />}
        {<span className={styles.text}>{text}</span>}
      </NavLink>
    </div>
  );
}
