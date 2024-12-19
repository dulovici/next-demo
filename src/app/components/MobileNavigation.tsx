"use client";

import React, { useState } from "react";
import Link from "next/link";
import Avatar from "./Avatar";
import LanguagePicker from "./LanguagePicker";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <LanguagePicker
                flagUrl="https://img.freeflagicons.com/thumb/round_button_with_metal_frame/united_kingdom/united_kingdom_640.png"
                languageCode="EN"
              />
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
            <Link
              href="/"
              className="text-lg flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-bold">PRODUCTS</span>{" "}
              <span className="font-bold">&#8250;</span>
            </Link>

            <Link
              href="/industries"
              className="text-lg flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-bold">INDUSTRIES</span>{" "}
              <span className="font-bold">&#8250;</span>
            </Link>

            <Link
              href="/solutions"
              className="text-lg flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-bold">TAILOR MADE SOLUTIONS</span>{" "}
              <span className="font-bold">&#8250;</span>
            </Link>

            <Link
              href="/pricing"
              className="text-lg flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-bold">PRICING</span>{" "}
              <span className="font-bold">&#8250;</span>
            </Link>

            <Link
              href="/contact"
              className="text-lg flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-bold">CONTACT</span>{" "}
              <span className="font-bold">&#8250;</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
