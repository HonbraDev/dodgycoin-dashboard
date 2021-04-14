import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import getAccounts from "../utils/getAccounts";
import { AccountList } from "../utils/types";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "../components/Card";
import Link from "next/link";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const Home = () => {
  const [accounts, setAccounts] = useState<AccountList>({});
  const [user, loading, error] = useAuthState(firebase.auth());

  const startRefresh = () => getAccounts(setAccounts);
  const stopRefresh = () => firebase.database().ref("users").off();

  useEffect(() => {
    if (user) {
      console.log(
        "Starting refresh with account id " + user.providerData[0].uid
      );
      startRefresh();
    } else {
      console.log("Stopping refresh");
      stopRefresh();
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>DodgyCoin Dashboard</title>
      </Head>
      <Header title="Your DodgyCoin accounts" />
      {error ? (
        <p>There was an error signing you in: {error.message}</p>
      ) : loading ? (
        <p>Signing you in</p>
      ) : user ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {accounts === {} ? (
            <p>Loading your accounts</p>
          ) : (
            <>
              {Object.entries(accounts)
                .map((entry) => {
                  return { id: entry[0], ...entry[1] };
                })
                .map((user) => (
                  <Card key={user.id}>
                    <h1 className="text-3xl font-semibold">{user.monies} Ð</h1>
                    <small className="text-sm">{user.id}</small>
                  </Card>
                ))}
              <Link href="/howtolink">
                <Card className="cursor-pointer hover:underline">
                  <h1 className="text-3xl font-semibold">Add more accounts</h1>
                  <small className="text-sm">
                    Learn how to link your account
                  </small>
                </Card>
              </Link>
            </>
          )}
        </div>
      ) : (
        <p>Sign in to see your DodgyCoin accounts</p>
      )}
    </>
  );
};

export default Home;
