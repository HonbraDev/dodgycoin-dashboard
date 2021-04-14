import { AccountList } from "./types";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const getAccounts = (callback: Function): Promise<AccountList> =>
  new Promise((res, rej) => {
    try {
      if (firebase.auth().currentUser) {
        const githubID = firebase.auth().currentUser.providerData[0].uid;

        firebase
          .database()
          .ref("users")
          .orderByChild("github")
          .equalTo(githubID)
          .on("value", (snap) => {
            const data = snap.val();
            callback(data ? data : {});
          });
      } else rej("No account");
    } catch (e) {
      rej(e);
    }
  });

export default getAccounts;
