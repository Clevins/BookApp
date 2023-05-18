import { FC } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

type ProfileProps = {
  example?: string;
};

const Profile: FC<ProfileProps> = ({ example }) => {
  const { data: session } = useSession();

  const getProfilePicture = () => {
    if (session) {
      return (
        <Image
          src={session?.user?.image!}
          alt="Profile Picture"
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
          <button onClick={() => signOut()}>Sign out</button>
        </>
      );
    }
    return (
      <>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  };

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div>
      <div>{getProfilePicture()}</div>
      <div>{getLoginLogoutBtn()}</div>
    </div>

    // <>
    //   Not signed in <br />
    //   <button onClick={() => signIn()}>Sign in</button>
    // </>
  );
};

export default Profile;
