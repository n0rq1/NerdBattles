"use client";
import "./navbar.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const supabase = createClientComponentClient();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  if (!hasMounted) {
    // Prevent rendering until the component has mounted to avoid hydration errors
    return null;
  }

  return (
    <div className="navbar">
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
      {isClick && (
        <div className="hamburger-dropdown">
          <Link href="/" className="drop-text">home</Link>
          <Link href="/battles" className="drop-text">battles</Link>
          <Link href="/settings" className="drop-text">settings</Link>
          <Link href="/profile" className="drop-text">profile</Link>
        </div>
      )}
    </div>
  );
}
