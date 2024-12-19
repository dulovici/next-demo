"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "text-muted mr-4"}
      >
        Product
      </Link>

      <Link
        href="/industries"
        className={
          pathname === "/industries" ? "font-bold mr-4" : "text-muted mr-4"
        }
      >
        Industries
      </Link>

      <Link
        href="/solutions"
        className={
          pathname === "/solutions" ? "font-bold mr-4" : "text-muted mr-4"
        }
      >
        Tailor made solutions
      </Link>

      <Link
        href="/pricing"
        className={
          pathname === "/pricing" ? "font-bold mr-4" : "text-muted mr-4"
        }
      >
        Pricing
      </Link>

      <Link
        href="/contact"
        className={
          pathname === "/contact" ? "font-bold mr-4" : "text-muted mr-4"
        }
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
