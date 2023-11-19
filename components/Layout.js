/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const router = useRouter();
  const { locale } = router;
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(
      typeof window !== "undefined"
        ? window.location.protocol + "//" + window.location.hostname
        : ""
    );
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <main className={`verflow-x-hidden w-full`}>
        <Header />
        <div id="content" className="max-w-inner xxxl:px-0">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
