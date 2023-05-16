import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";

import styles from "../styles/index.module.css";
import Header from "@/components/Header";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
