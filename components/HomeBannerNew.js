import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import en from "../locales/en";
import fr from "../locales/fr";

export default function HomeBannerNew() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="flex mx-auto justify-center">
        <Image
          src="/images/components/banner.png"
          alt="hero banner"
          width={1440}
          height={500}
        />
      </div>
    </>
  );
}
