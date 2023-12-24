import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import en from "../locales/en";
import fr from "../locales/fr";

export default function Footer() {
  const router = useRouter();
  const { locale, asPath } = router;
  const t = locale === "en" ? en : fr;

  return (
    <footer className="max-w-inner xxxl:px-0 bg-lightBlue">
      <div className="footer-wrapper">
        <div className="max-w-wrapper px-5 mx-auto">
          <div className="footer-nav">
            {/*<div className="md:flex md:justify-between">
              <Link
                className="sm:max-w-[165px]"
                target="_blank"
                href={t.footer.privacy_url}
                dangerouslySetInnerHTML={{ __html: t.footer.privacy_text }}
              ></Link>
              <Link
                className="md:text-right sm:max-w-[100px]"
                target="_blank"
                href={t.footer.terms_url}
              >
                <strong>{t.footer.terms_text}</strong>
              </Link>
            </div>

            <div className="md:flex md:justify-between horisontal-line md:mt-2">
              <Link target="_blank" href={t.footer.contact_url}>
                <strong>{t.footer.contact_text}</strong>
              </Link>
  </div>*/}
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <div
                className={`${
                  locale === "fr" ? "max-w-[450px]" : "max-w-[495px]"
                } h-auto text-[12px] leading-[16px] grow-[2] basis-0 lg:w-full lg:my-5 lg:mx-0`}
              >
                <p>{t.footer.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
