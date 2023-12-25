import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeBannerNew from "../components/HomeBannerNew";

import en from "../locales/en";
import fr from "../locales/fr";

export default function HoneycombLand() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="max-w-inner my-[50px]">
        <div className="max-w-wrapper px-5 mx-auto "></div>
      </div>
    </>
  );
}
