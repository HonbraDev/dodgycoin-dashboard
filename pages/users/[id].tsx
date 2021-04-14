import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import getUser from "../../utils/getUser";
import { User } from "../../utils/types";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const userPage = ({
  initialUser,
  id,
}: {
  initialUser: User | null;
  id: string;
}) => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const [fetchedUser, setFetchedUser] = useState<User | null>(initialUser);

  useEffect(() => {
    if (id && initialUser) getUser(id, (snap) => setFetchedUser(snap.val()));
  }, []);

  return (
    <>
      <Head>
        <title>{`${
          fetchedUser
            ? `${fetchedUser.cache ? fetchedUser.cache.username : id}`
            : "User not found"
        } - DodgyCoin Dashboard`}</title>
      </Head>

      <Header
        title={
          fetchedUser
            ? `${fetchedUser.cache ? fetchedUser.cache.username : id}`
            : "User not found"
        }
        goBack
      />

      {fetchedUser ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="space-y-1">
            <h1 className="text-3xl font-semibold">{fetchedUser.monies} Ð</h1>
            {fetchedUser.cache ? (
              <>
                <div className="flex items-center space-x-2">
                  <img
                    className="w-5 h-5 rounded-full"
                    src={fetchedUser.cache.avatarUrl}
                  />
                  <p>{fetchedUser.cache.username}</p>
                </div>
              </>
            ) : (
              <small className="text-sm">{id}</small>
            )}
          </Card>
          {user ? (
            user.providerData[0].uid === fetchedUser.github ? (
              <Card>
                <h1 className="text-3xl font-semibold">You own this account</h1>
              </Card>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    return {
      props: {
        initialUser: await getUser(context.params.id as string),
        id: context.params.id,
      },
    };
  } catch (e) {
    return { props: { initialUser: null, id: context.params.id } };
  }
};

export default userPage;
export { getServerSideProps };
