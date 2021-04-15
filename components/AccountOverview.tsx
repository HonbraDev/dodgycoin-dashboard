import React from "react";
import { AccountList } from "../utils/types";
import firebase from "firebase/app";
import "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import AccountCard from "./AccountCard";

const AccountOverview = ({ githubID }: { githubID: string }) => {
  const [snapshot, dbLoading, dbError] = useObject(
    firebase.database().ref("users").orderByChild("github").equalTo(githubID)
  );

  if (dbError) return <p>Error loading accounts: {dbError}</p>;
  if (dbLoading) return <p>Loading...</p>;

  const accounts = Object.entries(
    (snapshot.val() ? snapshot.val() : {}) as AccountList
  ).map((entry) => {
    return { id: entry[0], ...entry[1] };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {accounts.map((user) => (
        <AccountCard user={user} />
      ))}
    </div>
  );
};

export default AccountOverview;
