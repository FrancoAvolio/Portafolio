"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  const linkRefs = useRef([]);
  useEffect(() => {
    linkRefs.current = links.map(
      (_, index) => linkRefs.current[index] || React.createRef()
    );
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;

    for (let i = links.length - 1; i >= 0; i--) {
      const link = links[i];
      const section = document.querySelector(link.hash) as HTMLElement;
      if (section && section.offsetTop <= scrollPosition) {
        setActiveLink(link.hash);
        return;
      }
    }
    setActiveLink("");
  };

  useEffect(() => {
    setActiveLink(pathname);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleClick = (hash: string) => {
    setActiveLink(hash);
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-sm sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ opacity: 0, x: "-50%", y: -100 }}
        animate={{ opacity: 2, x: "-50%", y: 0 }}
      ></motion.div>
      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, index) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center"
              ref={linkRefs.current[index]}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 2, y: 0 }}
            >
              <Link
                className={`flex w-full items-center justify-center px-3 py-3 transition ${
                  activeLink === link.hash ? "text-black" : "hover:text-black"
                }`}
                href={link.hash}
                onClick={() => handleClick(link.hash)}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
