/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import NavLangToggle from "./NavLangToggle";
import en from "../locales/en";
import fr from "../locales/fr";
import MobileSubmenu from "./MobileSubmenu";

export default function Header() {
  const router = useRouter();
  const { locale, asPath } = router;
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
  const dropdown = useRef(null);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const t = locale === "en" ? en : fr;
  const subMenu = useRef(null);
  const [isReveal, setIsReveal] = useState(true);
  const reveal = () => setIsReveal(!isReveal);
  let nav;

  if (locale === "en") {
    nav = {
      item2: {
        img: "/images/icons/book-icon.png",
        alt: "book icon",
        label:
          "<span class='whitespace-nowrap lg:whitespace-normal'>About the books</span>",
        href: "/about",
      },
      item3: {
        img: "/images/icons/about-girl-author-icon.png",
        alt: "author icon",
        label:
          "<span class='whitespace-nowrap lg:whitespace-normal'>About the author</span>",
        href: "link3",
      },
    };
  } else {
    nav = {
      item1: {
        label:
          "<span class='whitespace-nowrap lg:whitespace-normal'>link1</span>",
        href: "books",
      },
      item2: {
        label:
          "<span class='whitespace-nowrap lg:whitespace-normal'>link4</span>",
        href: "link4",
      },
      item3: {
        label: "link5",
        href: "link5",
      },
    };
  }

  const loadMenu = () => {
    let menuArr = [];
    //if (isMbl) [nav["item1"], nav["item2"]] = [nav["item2"], nav["item1"]];
    for (const key in nav) {
      let temp = nav[key];
      menuArr.push(temp);
    }
    return menuArr;
  };
  const menu = loadMenu();

  // disable scrolling on mobile nav menu
  useEffect(() => {
    if (mobileNavExpanded) {
      document.body.style.position = "fixed";
      function handleClick(event) {}
      window.addEventListener("click", handleClick);
      return () => {
        window.removeEventListener("click", handleClick);
        document.body.style.position = "relative";
      };
    }
    return () => (document.body.style.position = "relative");
  }, [mobileNavExpanded]);

  return (
    <>
      <header className="fixed top-0 w-full bg-[#ffffff]">
        {/*Header Nav*/}
        <nav className="max-w-inner md:flex justify-between !xxx:px-0">
          <div className="logo text-grey flex justify-between max-w-wrapper px-5 sm:px-2 mx-auto w-full">
            {/* Logo */}
            <div className="logo flex justify-between">
              <div className="w-[331px] mdlg:w-[200px] md:w-[185px]">
                <Link href="/" passHref>
                  <img
                    src={t.header.nav_logo_src}
                    className="w-full max-w-[250px] mx-auto mt-[10px]"
                    alt={t.header.nav_logo_alt}
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Nav */}

            <div
              className={`desktop-nav ${
                locale == "en" ? "" : "desktop-nav-fr"
              }`}
            >
              {!!menu &&
                menu.map((item, index) => {
                  return (
                    <>
                      <Link
                        href={item.href}
                        key={item.label}
                        className={`${
                          router.pathname == "/" + item.href ? "active" : ""
                        } desktop-nav-item transition-all hover:underline`}
                      >
                        <img
                          className={`desktop-nav-icon`}
                          src={item.img}
                          alt={item.alt}
                        />
                        <span
                          className={`desktop-nav-text ${
                            locale === "en"
                              ? "!flex flex-col xmd:inline-block"
                              : ""
                          }`}
                          dangerouslySetInnerHTML={{ __html: item.label }}
                        ></span>
                      </Link>
                    </>
                  );
                })}
            </div>

            {/* Mobile Nav */}

            <div className={`mobile-nav ${mobileNavExpanded ? "block" : ""}`}>
              {!!menu &&
                menu.map((item, index) => {
                  return (
                    <>
                      {item.submenu ? (
                        <MobileSubmenu
                          isSubmenu={isSubmenu}
                          setIsSubmenu={setIsSubmenu}
                          submenu={item}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={index}
                          className="mobile-nav-item"
                          onClick={() =>
                            setMobileNavExpanded(!mobileNavExpanded)
                          }
                        >
                          <span
                            className={`mobile-nav-text ${
                              index === 0
                                ? "max-w-[200px]"
                                : index === 1 && locale === "en"
                                ? "xmd:max-w-[240px]"
                                : ""
                            }`}
                            dangerouslySetInnerHTML={{ __html: item.label }}
                          ></span>
                        </Link>
                      )}
                    </>
                  );
                })}
              <NavLangToggle />
            </div>

            {/* Language Toggle */}
            <div className="flex-end hidden">
              <div
                className={`xmd:hidden px-3 xxmd:pl-0 items-center text-grey text-center`}
              >
                <NavLangToggle />
              </div>

              <button
                ref={dropdown}
                id="nav-button"
                className={`${mobileNavExpanded ? "open" : ""} nav-button`}
                onClick={() => {
                  setMobileNavExpanded(!mobileNavExpanded);
                  setIsSubmenu(false);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
