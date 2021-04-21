import Head from "next/head";
import "firebase/auth";
import { useSupabase } from "use-supabase";

const HowToLink = () => {
  const supabase = useSupabase();
  const user = supabase.auth.user();
  return (
    <>
      <Head>
        <title>How to link your account - DodgyCoin Dashboard</title>
      </Head>

      <div className="prose">
        <h1 className="text-center">How to link your account</h1>
        {user ? (
          <>
            <ul>
              <li>Go to a room with the DodgyCoin bot</li>
              <li>
                Send <code>$linkaccount {user.id}</code>
              </li>
            </ul>
            <p>
              To unlink, send <code>$unlinkaccount</code>
            </p>
          </>
        ) : (
          <>
            <p>Sorry, but you need to sign in to link your account.</p>
          </>
        )}
      </div>
    </>
  );
};
export default HowToLink;
