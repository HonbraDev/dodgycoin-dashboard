import firebase from "firebase/app";
import "firebase/database";
import { User } from "./types";

const db = firebase.database();

const getUser = (
  id: string,
  callback?: (snap: firebase.database.DataSnapshot) => any
) =>
  callback
    ? (() => {
        db.ref(`users/${id}`).on("value", callback);
      })()
    : new Promise<User>((resolve, reject) =>
        db.ref(`users/${id}`).once("value", (snap) => {
          if (snap.exists()) {
            resolve(snap.val() as User);
          } else reject("User not found.");
        })
      );
export default getUser;
