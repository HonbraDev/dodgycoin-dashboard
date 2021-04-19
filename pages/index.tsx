import Head from "next/head";
import Header from "../components/Header";
import "firebase/auth";
import Link from "next/link";
import { useSupabase } from "use-supabase";
import { User } from "../utils/types";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import AccountCard from "../components/AccountCard";

const Home = () => {
  const supabase = useSupabase();
  const [accounts, setAccounts] = useState<User[]>([]);
  const githubID = "54026315";
  const user = supabase.auth.user();

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("githubId", githubID);
    if (error) return;
    setAccounts(data);
  };

  const signIn = async () => {
    supabase.auth.signIn({
      provider: "github",
    });
  };

  return (
    <>
      <Head>
        <title>DodgyCoin Dashboard</title>
      </Head>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button onClick={fetchUsers}>Fetch</Button>
        <Button onClick={signIn}>Sign in</Button>
        <Button onClick={() => console.log(user)}>Debug auth</Button>
        {accounts.map((account) => (
          <Link href={`/users/${account.id}`}>
            <AccountCard account={account} className="cursor-pointer" />
          </Link>
        ))}
      </div> */}
      <div className="prose">
        <h1>DodgyCoin Dashboard still being reworked</h1>
        <p>
          I am still figuring out Supabase Auth, but when I do, I will release
          it ASAP.
        </p>
        <p>
          While you're waiting, check out the{" "}
          <Link href="/apidocs">
            <a className="hover:underline">API documentation</a>
          </Link>
          !
        </p>
        <p>
          You can also see the supported{" "}
          <Link href="/apidocs">
            <a className="hover:underline">bot commands</a>
          </Link>
          !
        </p>
      </div>
    </>
  );
};

export default Home;
