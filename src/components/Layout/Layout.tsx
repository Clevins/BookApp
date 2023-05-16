import { FC, ReactNode } from "react";
import Navbar from "@/Components/Navbar";

import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
