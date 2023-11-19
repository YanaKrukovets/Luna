import Layout from "../components/Layout";
import "../styles/styles.scss";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
