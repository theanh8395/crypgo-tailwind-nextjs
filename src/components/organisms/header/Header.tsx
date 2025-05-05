"use client";

import { CtButton } from "@/components/atoms";
import { HeaderLink } from "@/components/molecules";
import { Logo } from "@/components/molecules/logo";
import { headerData } from "@/utils";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    // document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      //   document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={clsx(
        "w-full fixed top-0 z-50  py-5 transition-all duration-300",
        sticky ? "shadow-lg bg-darkmode" : "shadow-none md:pt-14"
      )}
    >
      <div className="lg:py-0 py-2">
        <div className="container px-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <CtButton variant="bordered" color="primary" className="text-base">
              Sign In
            </CtButton>
            <CtButton color="primary" className="text-base">
              Sign Up
            </CtButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
