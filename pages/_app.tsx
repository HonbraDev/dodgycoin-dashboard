import Layout from "../components/Layout";
import "../styles/globals.css";
import firebase from "firebase/app";
import "firebase/database";
import { useRouter } from "next/router";
import { useEffect } from "react";

if (!firebase.apps.length)
  firebase.initializeApp({
    apiKey: "AIzaSyBsqzEwQQCNjEYYhOkAHKPXtGupM7j802w",
    authDomain: "dodgycoin.firebaseapp.com",
    databaseURL:
      "https://dodgycoin-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dodgycoin",
    storageBucket: "dodgycoin.appspot.com",
    messagingSenderId: "605200061107",
    appId: "1:605200061107:web:bbe334e075abacdc8016c6",
  });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(
    () =>
      router.events.on("routeChangeStart", () => {
        console.log("Stopping refresh");
        firebase.database().ref("users").off();
      }),
    []
  );

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
