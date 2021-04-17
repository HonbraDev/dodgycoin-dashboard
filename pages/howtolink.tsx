import Head from "next/head";
import Header from "../components/Header";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

const HowToLink = () => {
  /*  const [user, loading, error] = useAuthState(firebase.auth());
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      octokit
        .request("GET /user/{id}", {
          id: user.providerData[0].uid,
        })
        .then((ghuser) => setUsername(ghuser.data.login))
        .catch(console.error);
    }
  }, [user]); */

  return (
    <>
      <Head>
        <title>How to link your account - DodgyCoin Dashboard</title>
      </Head>
      <Header title="How to link your DodgyCoin account" goBack />
      {/* <div className="prose">
        <ol>
          <li>Go into a room with the DodgyCoin bot.</li>
          <li>
            Type{" "}
            <code>$linkaccount {username ? username : "<yourgithub>"}</code>
          </li>
          <li>Go back and sign in with your GitHub account</li>
        </ol>
        <p>
          To unlink your account, type <code>$unlinkaccount</code>.
        </p>
      </div> */}
      <p>
        Sorry, but this dashboard has been disabled due to database migration.
        Thank you for understanding.
      </p>
    </>
  );
};
export default HowToLink;
