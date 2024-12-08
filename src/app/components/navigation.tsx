"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
      >
        About DOP
      </Link>
      <Link
        href="/industries"
        className={
          pathname === "/industries" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
      >
        Industries
      </Link>
      <Link
        href="/contact"
        className={
          pathname === "/contact" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
