import Link from "next/link";
import { useSupabase } from "use-supabase";
import Button from "./Button";

const Header = () => {
  const supabase = useSupabase();
  const user = supabase.auth.user();

  const signIn = async () =>
    supabase.auth.signIn({
      provider: "github",
    });

  const signOut = async () => supabase.auth.signOut();

  return (
    <div className="flex justify-between space-x-4 items-center mb-8">
      <Link href="/">
        <a className="text-4xl font-extrabold">DodgyCoin</a>
      </Link>

      <div className="flex justify-center align-center space-x-4 w-max">
        {user ? (
          <>
            <span className="flex justify-center items-center font-semibold text-2xl">
              {user.user_metadata.full_name}
            </span>
            <Button onClick={signOut}>Sign out</Button>
          </>
        ) : (
          <>
            <Button onClick={signIn}>Sign in</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
