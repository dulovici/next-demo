"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Product" },
    { href: "/industries", label: "Industries" },
    { href: "/solutions", label: "Tailor made solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`nav-link ${
            pathname === link.href ? "nav-link-active" : ""
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2">
              <p>{link.label}</p>
              {(link.href === "/" || link.href === "/industries") && (
                <span className="text-xs">▼</span>
              )}
            </div>

            {pathname === link.href && <div className="nav-underline"></div>}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
