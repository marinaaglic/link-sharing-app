import { ButtonLinkType } from "../../../utils/type/button";
import { NavLink } from "react-router-dom";
import styles from "./buttonLink.module.css";
import clsx from "clsx";

export default function ButtonLink({ to, text, ...rest }: ButtonLinkType) {
  return (
    <div>
      <NavLink
        to={to}
        {...rest}
        className={({ isActive }) =>
          clsx(styles.buttonLink, { [styles.active]: isActive })
        }
      >
        {text}
      </NavLink>
    </div>
  );
}
