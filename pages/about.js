import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeBannerNew from "../components/HomeBannerNew";

import en from "../locales/en";
import fr from "../locales/fr";

export default function About() {
  const router = useRouter();

  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <HomeBannerNew />
      <div className="max-w-inner my-[50px]">
        <div className="max-w-wrapper px-5 mx-auto ">
          <h1 className="text-center text-[40px] mb-[20px]">
            <strong className="uppercase text-[#314858] border-b-[3px] border-[#83C5BE]">
              {t.about.title}
            </strong>
          </h1>
          <div className="flex justify-between gap-[20px]">
            <div className="text-[24px] leading-[30px] my-auto text-middleGray">
              <p className="mb-[15px]">
                <span>{t.about.p1}</span>
                <strong className="text-[#314858]">{t.about.book_name}</strong>
                <span>{t.about.p1_1}</span>
              </p>
              <p className="mb-[15px]">{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            <Image
              src="/images/pages/about/luna-juna.png"
              alt="Luna the guinea pig in an orange sweater and here friend Juna in a red hat"
              width={1758}
              height={1548}
              className="max-w-[50%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
