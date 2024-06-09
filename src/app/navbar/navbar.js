"use client";
import "./navbar.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isClick, setIsClick] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(null);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    async function getUserID() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user.id);
      }
    }
    getUserID();
  }, [supabase]);

  useEffect(() => {
    async function getUserInfo() {
      if (user) {
        const { data, error } = await supabase
          .from('users')
          .select()
          .eq('uid', user);
        if (error) {
          setError(error);
        }
        if (data && data.length > 0) {
          setUsername(data[0].username);
        }
      }
    }
    getUserInfo();
  }, [user, supabase]);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
    setUser(null);
  };

  const handleLogin = () => {
    router.push("/login");
    router.refresh();
  };

  if (!hasMounted) {
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
          {user ? (
            <button onClick={handleSignOut} className="drop-text">logout</button>
          ) : (
            <button onClick={handleLogin} className="drop-text">login</button>
          )}
        </div>
      )}
    </div>
  );
}
