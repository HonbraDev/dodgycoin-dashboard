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
      <Header title="DodgyCoin" />

      <div className="prose">
        <p>
          Sorry, but this dashboard has been disabled due to database migration.
          Thank you for understanding.
        </p>
        <p>
          There's a REST API though: <a href="/api/top">/api/top</a>
        </p>
        <p>
          Commands page: <a href="/commands">/commands</a>
        </p>
      </div>
    </>
  );
};

export default Home;
