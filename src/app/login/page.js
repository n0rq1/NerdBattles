"use client";
import "../pages.css";
import "./login.css";
import NavBar from "../navbar/navbar";
import { Input } from "@material-tailwind/react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();
  }, []);

  const handleSignUpButton = async () => {
    router.push("/register");
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    });
    setUser(data.user);
    router.push("/");
    router.refresh();
    setEmail('');
    setPassword('');
  };

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error("Error signing in:", error.message);
      return;
    }

    if (data.user) {
      setUser(data.user);
      router.push("/profile");
      router.refresh();
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-page">
        <div className="login-container">
          <input
            style={{
              border: '1px solid black',
              marginTop: '20%',
              width: '40%',
              color: 'black',
              backgroundColor: 'white'
            }}
            placeholder="Email..."
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{
              border: '1px solid black',
              marginTop: '3%',
              width: '40%',
              color: 'black',
              backgroundColor: 'white'
            }}
            variant="standard"
            placeholder="Password..."
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-text login-button mt-3"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <a className="login-text">
            Don&apos;t have an account?
          </a>
          <a className="login-signup" onClick={handleSignUpButton}>
            Sign Up!
          </a>
        </div>
      </div>
    </div>
  );
}
