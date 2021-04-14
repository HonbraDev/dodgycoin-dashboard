import { Button, ButtonProps } from "./Button";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const LoginLogout = (props: ButtonProps) => {
  const [user, loading, error] = useAuthState(firebase.auth());

  const login = () =>
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());

  const logout = () => firebase.auth().signOut();

  return user ? (
    <Button onClick={logout} color="secondary" {...props}>
      Sign out
    </Button>
  ) : (
    <Button onClick={login} {...props}>
      Sign in
    </Button>
  );
};

export default LoginLogout;
