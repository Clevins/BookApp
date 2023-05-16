import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import getURLs from "@/lib/getURLs";

import HomeIcon from "../Icons/HomeIcon";
import BookMarkIcon from "../Icons/BookmarkIcon";
import NavbarIcon from "../NavbarIcon";

import styles from "./Navbar.module.css";

type NavbarProps = {
  // example: string,
};

const Navbar: FC<NavbarProps> = () => {
  const router = useRouter();
  const URLs = getURLs();

  return (
    <div className={styles.navbar}>
      <Link href={URLs.homeUrl}>
        <NavbarIcon active={router.pathname == URLs.homeUrl}>
          <HomeIcon />
        </NavbarIcon>
      </Link>

      <Link href={URLs.bookmarkUrl}>
        <NavbarIcon active={router.pathname == URLs.bookmarkUrl}>
          <BookMarkIcon />
        </NavbarIcon>
      </Link>
    </div>
  );
};

export default Navbar;
