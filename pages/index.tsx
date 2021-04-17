import Head from "next/head";
import Header from "../components/Header";
import AccountOverview from "../components/AccountOverview";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

const Home = () => {
  /* const [user, userLoading, userError] = useAuthState(firebase.auth()); */

  return (
    <>
      <Head>
        <title>DodgyCoin Dashboard</title>
      </Head>
      <Header title="Your DodgyCoin accounts" />

      {/*{user ? (
        <>
           <AccountOverview githubID={user.providerData[0].uid} />
          <Link href="/howtolink">
            <a className="block mt-2 text-gray-500 hover:underline">
              How to link your account
            </a>
          </Link> 
          
        </>
      ) : (
        <p>Sign in to see DodgyCoin accounts</p>
      )} */}
      <p>
        Sorry, but this dashboard has been disabled due to database migration.
        Thank you for understanding.
      </p>
    </>
  );
};

export default Home;
