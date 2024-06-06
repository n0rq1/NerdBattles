"use client";
import "./navbar.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);
  const [user,setUser] = useState(null);
  const [uname,setUsername] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const supabase = createClientComponentClient();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
      <nav className="navbar"> 
        <div className="logo-container">
          <a href="/" className="logo">
            nerd battles
          </a>
        </div>
        
        <div className=" flex items-center justify-end w-1/3">
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
        {isClick && (
        <div className="hamburger-dropdown">
          <a href="/" className="drop-text">home</a> 
          <a href="/battles" className="drop-text">battles</a>
          <a href="/settings" className="drop-text">settings</a>
          <a href="/profile" className="drop-text">profile</a>
        </div>
        )}
    </nav>
);
}
