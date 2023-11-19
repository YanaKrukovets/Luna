import Head from "next/head";
import HomePage from "../components/HomePage";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";

export default function Home(props) {
  const router = useRouter();
  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;
  return (
    <>
      <Head>
        <title>{t.header.title}</title>
        <meta name="description" content="description" />
      </Head>

      <HomePage />
    </>
  );
}
