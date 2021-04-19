import Layout from "../components/Layout";
import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { createClient } from "@supabase/supabase-js";
import { SupabaseContextProvider } from "use-supabase";

const supabase = createClient(
  "https://hqrfqxsuwgfaqkmvvqoy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODU1NzAzNywiZXhwIjoxOTM0MTMzMDM3fQ.7vy1z2ocd48OmwRiGqo70Pr5EJeUdH0POs0sxYjFK3Q"
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SupabaseContextProvider client={supabase}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SupabaseContextProvider>
  );
}

export default MyApp;
