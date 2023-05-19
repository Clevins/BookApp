import { FC } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import styles from "./Profile.module.css";

type ProfileProps = {
  example?: string;
};

const Profile: FC<ProfileProps> = ({ example }) => {
  const { data: session } = useSession();

  // console.log(session);
  let profilePic = null;

  const getProfilePicture = () => {
    if (session?.user) {
      return (
        <Image
          src={session.user.image!}
          alt="Profile Picture"
          className={styles.profilePic}
          width={50}
          height={50}
        />
      );
    }
  };

  const getLoginLogoutBtn = () => {
    if (session) {
      return (
        <>
          <button className={styles.logInOut} onClick={() => signOut()}>
            Sign out
          </button>
        </>
      );
    }
    return (
      <>
        <button className={styles.logInOut} onClick={() => signIn()}>
          Sign In
        </button>
      </>
    );
  };

  // if (session) {
  //   return (
  //     <>
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  return (
    <>
      {/* {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )} */}
      {/* {session?.user ?? (
        <Image
          src={session.user.image!}
          alt="Profile Picture"
          width={50}
          height={50}
        />
      )} */}
      {getLoginLogoutBtn()}
      {getProfilePicture()}
    </>
  );
};

export default Profile;
