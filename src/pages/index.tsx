import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";

import styles from "../styles/index.module.css";
import Header from "@/components/Header";

import { useSession, signIn, signOut } from "next-auth/react";
import Shelf from "@/components/Shelf";

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession();

  const testCall = () => {};

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user?.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //       <button onClick={() => testCall()}>Test Call</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );

  return (
    <div className={styles.home}>
      <Header />
      <Shelf />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
