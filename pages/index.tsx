import Head from "next/head";
import "firebase/auth";
import Link from "next/link";
import { useSupabase } from "use-supabase";
import { User } from "../utils/types";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import AccountCard from "../components/AccountCard";

const Home = () => {
  const supabase = useSupabase();
  const [accounts, setAccounts] = useState<User[]>([]);
  const githubID = "54026315";
  const user = supabase.auth.user();

  useEffect(() => {
    if (user) fetchUsers();
  }, [user]);

  const fetchUsers = async () => {
    console.log("fetching");
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("dashboardId", user.id);
    if (error) return;
    setAccounts(data);
  };

  return (
    <>
      <Head>
        <title>DodgyCoin Dashboard</title>
      </Head>

      {user ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accounts.map((account) => (
              <Link href={`/users/${account.id}`}>
                <AccountCard account={account} className="cursor-pointer" />
              </Link>
            ))}
          </div>

          <Button className="mx-auto mt-4">Refresh</Button>
        </>
      ) : (
        <div>Sign in to see all your DodgyCoin accounts in one place.</div>
      )}
    </>
  );
};

export default Home;
