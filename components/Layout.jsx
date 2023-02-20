import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../components/index";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Electro Store</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
