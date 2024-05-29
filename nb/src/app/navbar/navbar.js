"use client";
import "./navbar.css";
import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="navbar-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          <div className="flex w-1">
            <div className="flex-shrink-0 logo-container">
              <Link href="/" className="logo-link">
                <span className="logo">NerdBattles</span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center flex-grow">
            <div className="ml-4 flex items-center navbar-text-container">
              <Link href="/" className="hometext p-2">
                HOME
              </Link>
              <Link href="/battles" className="text p-2">
                BATTLES
              </Link>
              <Link href="/settings" className="text p-2">
                SETTINGS
              </Link>
            </div>
          </div>
          <div className="username-container m-4 p-2">
            <Link href="/profile" className="username">MORGDAWG22</Link>
          </div>
          <div className="md:hidden flex items-center justify-end w-1/3">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md 
              text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end">
              <Link href="/" className="hamburger-text p-3">
                Home
              </Link>
              <Link href="/battles" className="hamburger-text p-3">
                Battles
              </Link>
              <Link href="/profile" className="hamburger-text p-3">
                Profile 
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
