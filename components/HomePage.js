import React from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import Image from "next/image";
import Link from "next/link";

import HomeBannerNew from "./HomeBannerNew";
import fr from "../locales/fr";

export default function HomePage() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <HomeBannerNew />
      <div className="max-w-wrapper mx-auto px-5 my-[50px]">
        <h1 className="text-textColor text-[24px] mb-[20px] border-b-[3px] border-[#83C5BE] uppercase max-w-[350px]">
          <strong>Most recent</strong>
        </h1>
        <div>
          <Link href="/honeycomb-land" className="book-cover">
            <Image
              src="/images/pages/home/honeycomb-land-book.png"
              alt="Honeycomb Land book cover"
              width={1633}
              height={1907}
              className="max-w-[250px]"
            />
            <strong className="text-[20px] book-title text-middleGray">
              {t.home.honeycomb}
            </strong>
          </Link>
        </div>
      </div>
    </>
  );
}
