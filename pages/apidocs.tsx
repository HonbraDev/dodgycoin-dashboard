import Head from "next/head";
import Link from "next/link";

const apiDocs = () => {
  const EndpointLink = ({ children }: { children: string }) => (
    <Link href={children}>
      <h2 role="link" className="cursor-pointer hover:underline">
        {children}
      </h2>
    </Link>
  );

  return (
    <>
      <Head>
        <title>DodgyCoin API documentation</title>
      </Head>
      
      <div className="prose">
        <section>
          <h1>
            <Link href="/">
              <span role="link" className="cursor-pointer hover:underline">
                DodgyCoin
              </span>
            </Link>{" "}
            API documentation
          </h1>
        </section>
        <hr />
        <section>
          <EndpointLink>/api/top</EndpointLink>
          <p>Lists the top 10 users (by money)</p>
          <table>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
            <tr>
              <td>id</td>
              <td>UUID</td>
              <td>DogeHouse ID</td>
            </tr>
            <tr>
              <td>money</td>
              <td>number</td>
              <td>Account balance</td>
            </tr>
            <tr>
              <td>githubId</td>
              <td>string | null</td>
              <td>Linked GitHub account ID</td>
            </tr>
            <tr>
              <td>isAdmin</td>
              <td>boolean</td>
              <td>Is the account an admin</td>
            </tr>
          </table>
          <small>Note: endpoint returns array</small>
        </section>
        <hr />
        <section>
          <EndpointLink>/users/[id]</EndpointLink>
          <p>Get an account by the DogeHouse ID</p>
          <table>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
            </tr>
            <tr>
              <td>id</td>
              <td>UUID</td>
              <td>DogeHouse ID</td>
            </tr>
            <tr>
              <td>money</td>
              <td>number</td>
              <td>Account balance</td>
            </tr>
            <tr>
              <td>githubId</td>
              <td>string | null</td>
              <td>Linked GitHub account ID</td>
            </tr>
            <tr>
              <td>isAdmin</td>
              <td>boolean</td>
              <td>Is the account an admin</td>
            </tr>
            <tr>
              <td>fake</td>
              <td>true | null</td>
              <td>The account is not in the database</td>
            </tr>
          </table>
          <small>Note: endpoint does not check UUID validity</small>
        </section>
      </div>
    </>
  );
};

/* 
{"id":"e44ad29a-536e-4916-9849-457ca8d77b11","money":16604,"githubId":null,"isAdmin":false}
*/

export default apiDocs;
