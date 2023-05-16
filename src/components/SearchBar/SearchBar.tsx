import { FC } from "react";
import SearchIcon from "../Icons/SearchIcon";
import NavbarIcon from "../NavbarIcon";

import styles from "./SearchBar.module.css";

type SearchBarProps = {
  example?: string;
};

const SearchBar: FC<SearchBarProps> = ({ example }) => {
  return (
    <div className={styles.searchBar}>
      {/* <NavbarIcon active={true}>
        <SearchIcon />
      </NavbarIcon> */}

      <div className={styles.searchBar__icon}>
        <div className={styles.searchBar__iconSVG}>
          <SearchIcon />
        </div>
      </div>

      <input
        className={styles.searchBar__input}
        placeholder="Search...."
      ></input>
    </div>
  );
};

export default SearchBar;
