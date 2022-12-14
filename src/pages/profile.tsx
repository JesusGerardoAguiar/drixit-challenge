import type { NextPage } from "next";
import Head from "next/head";
import UserProfile from "../components/Profile";
import useSession from "../hooks/useSession";
const Profile: NextPage = () => {
  const userAuth = useSession();
  return (
    <>
      <Head>
        <title>Profile | My App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProfile
        profileData={userAuth}
      />
    </>
  );
};

export default Profile;
