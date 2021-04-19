import Head from "next/head";
import Header from "../components/Header";
import "firebase/auth";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

const HowToLink = () => {
  return (
    <>
      <Head>
        <title>How to link your account - DodgyCoin Dashboard</title>
      </Head>
      <Header title="How to link your DodgyCoin account" goBack />
      <p>
        Sorry, but this dashboard has been disabled due to database migration.
        Thank you for understanding.
      </p>
    </>
  );
};
export default HowToLink;
