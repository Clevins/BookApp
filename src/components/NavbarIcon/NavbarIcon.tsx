import { FC, ReactNode } from "react";

import styles from "./NavbarIcon.module.css";

type NavbarIconProps = {
  children: ReactNode;
  active: boolean;
};

const NavbarIcon: FC<NavbarIconProps> = ({ children, active }) => {
  const iconActiveStyle = active ? styles["navbarIcon--active"] : "";
  return (
    <div className={`${styles.navbarIcon} ${iconActiveStyle}`}>
      <div className={styles.navbarIcon__svg}> {children}</div>
    </div>
  );
};

export default NavbarIcon;
