import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
