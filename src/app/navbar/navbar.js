"use client";
import "./navbar.css";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="navbar"> 
        <div className="logo-container">
          <a href="/" className="logo">
            NerdBattles
          </a>
        </div>
        <div className="navbar-text-container">
          <Link href="/" className="navbar-text">
            Home
          </Link>
          <Link href="/battles" className="navbar-text">
            Battles
          </Link>
          <Link href="/settings" className="navbar-text">
            Settings
          </Link>
        </div>
        <div className="username-container">
          <Link href="/profile" className="username-text">
            Username-Here
          </Link>
        </div>
        <div className="md:hidden flex items-center justify-end w-1/3">
            <button
              className="hamburger inline-flex items-center justify-center p-2 rounded-md 
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
    </nav>
  </>
);
}
