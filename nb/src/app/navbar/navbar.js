"use client";
import "./navbar.css";
import React, { useState } from "react";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
          <div className="flex items-center justify-start w-1/3">
            <div className="flex-shrink-0 logo-container">
              <a href="/" className="logo-link">
                <span className="logo">Nerd Battles</span>
              </a>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center flex-grow">
            <div className="ml-4 flex space-x-20">
              <a href="/" className="hometext p-2">
                HOME
              </a>
              <a href="/battles" className="text p-2">
                BATTLES
              </a>
              <a href="/profile" className="text p-2">
                PROFILE
              </a>
            </div>
          </div>
          <div className="sm:hidden flex items-center justify-end w-1/3">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-end">
              <a href="/" className="text p-3">
                Home
              </a>
              <a href="/battles" className="text p-3">
                Battles
              </a>
              <a href="/profile" className="text p-3">
                Profile
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
