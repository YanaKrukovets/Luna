import React from "react";
import { useRouter } from "next/router";
import en from "../locales/en";

import HomeBannerNew from "./HomeBannerNew";
import fr from "../locales/fr";

export default function HomePage() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <HomeBannerNew />
      <div className="max-w-wrapper mx-auto px-5 flex justify-between my-[70px] disorder-wrapper md:flex-col md:my-[48px]"></div>
    </>
  );
}
