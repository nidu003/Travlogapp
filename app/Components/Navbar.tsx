"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`max-container padding-container flex justify-between py-8 ${
        scrolling ? "navbar-scroll fixed z-50" : ""
      }`}
    >
      <div className="left">
        <Link href="/" className="flexCenter gap-2">
          <Image src="/travlog_logo.svg" alt="logo" width={40} height={40} />
          <h2 className="font-bold text-lg">Travlog</h2>
        </Link>
      </div>

      <div className="middle">
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="flexCenter cursor-pointer transition-all hover:font-bold"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/*-------------- NAVBAR LINKS MOBILE -----------------*/}
        {navbarOpen && (
          <ul className="lg:hidden sm:block flex flex-col">
            {NAV_LINKS.map((link) => (
              <li
                key={link.key}
                className="flexCenter cursor-pointer pb-2 transition-all hover:font-bold"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="right lg:flexCenter hidden gap-4">
        <Button type="button" title="Login" variant="btn_white" />
        <Button type="button" title="Sign Up" variant="btn_purple" />
      </div>

      {/*-------------- MENU ICON MOBILE -----------------*/}
      <div className="block cursor-pointer lg:hidden">
        <button onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
