import { FC } from "react";
import SearchBar from "../SearchBar";

import styles from "./Header.module.css";

type HeaderProps = {
  example?: string;
};

const Header: FC<HeaderProps> = ({ example }) => {
  return (
    <main className={styles.header}>
      <SearchBar />

      <div>
        <h1>Profile</h1>
      </div>
    </main>
  );
};

export default Header;
