import Head from "next/head";
import Header from "../components/Header";

const Commands = () => {
  return (
    <>
      <Head>
        <title>Commands - DodgyCoin Dashboard</title>
      </Head>
      <Header title="Commands" goBack />
      <div className="prose">
        <ul>
          <li>
            $monies ?{"<"}user{">"} - check your balance
          </li>
          <li>
            $pay {"<"}user{">"} {"<"}amount{">"} - pay your mates
          </li>
          <li>
            $coinflip {"<"}amount{">"} - flip a coin for {"<"}amount{">"}{" "}
            DodgyCoin and potentially win
          </li>
          <li>$github - Link to the GitHub repo </li>
          <li>
            $linkaccount {"<"}username{">"} - Link your DodgyCoin account with
            your GitHub account
          </li>
          <li>
            $unlinkaccount - Unlink your DodgyCoin account from your GitHub
            account
          </li>
          <li>
            $profile ?{"<"}user{">"} - Link to online profile link
          </li>
          <li>$dashboard - Link to online dashboard</li>
        </ul>
      </div>
    </>
  );
};
export default Commands;
