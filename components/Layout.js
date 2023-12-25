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

        <title>Luna the guinea pig. Kids book</title>
        <meta
          name="description"
          content="Children's story books about the guinea pigs."
        />

        <meta property="og:url" content="https://lunatheguineapig.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luna the guinea pig. Kids book" />
        <meta
          property="og:description"
          content="Children's story books about the guinea pigs."
        />
        <meta property="og:image" content="../images/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lunatheguineapig.com" />
        <meta property="twitter:url" content="https://lunatheguineapig.com/" />
        <meta name="twitter:title" content="Luna the guinea pig. Kids book" />
        <meta
          name="twitter:description"
          content="Children's story books about the guinea pigs."
        />
        <meta
          name="twitter:image"
          content="https://undefined/img/og-image.png"
        />
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
