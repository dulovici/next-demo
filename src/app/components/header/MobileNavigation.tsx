"use client";

import React, { useState } from "react";
import Link from "next/link";
import Avatar from "./Avatar";
import LanguagePicker from "./LanguagePicker";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "PRODUCTS" },
    { href: "/industries", label: "INDUSTRIES" },
    { href: "/solutions", label: "TAILOR MADE SOLUTIONS" },
    { href: "/pricing", label: "PRICING" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="block lg:hidden p-2 border rounded-md"
        aria-label="Open Menu"
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Fullscreen Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-accent z-50 flex flex-col p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <Avatar />
            <div className="flex items-center gap-4">
              <LanguagePicker />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 text-primary font-bold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg flex justify-between items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span>&#8250;</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
