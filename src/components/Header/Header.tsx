import { FC } from "react";
import Profile from "../Profile";
import SearchBar from "../SearchBar";

import styles from "./Header.module.css";

type HeaderProps = {
  example?: string;
};

const Header: FC<HeaderProps> = ({ example }) => {
  return (
    <main className={styles.header}>
      <SearchBar />

      <Profile />
    </main>
  );
};

export default Header;
