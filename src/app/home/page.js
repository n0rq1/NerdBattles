"use client";
import "../pages.css";
import NavBar from "../navbar/navbar";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState(null);

    const router = useRouter();

    const supabase = createClientComponentClient();

    /*
    useEffect(() => {
        async function getUser(){
            const{data: {user}} = await supabase.auth.getUser();
            setUser(user);
        }
        getUser();
    }, []);
    */

    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        router.refresh();
        setEmail('');
        setPassword('');
    }

    const handleSignIn = async () =>{
        await supabase.auth.signInWithPassword({
            email,
            password
        })
        router.refresh();
        setEmail('');
        setPassword('');
    }
    
    return (
        <body>
            <NavBar/>
            <div className="background">
                <div className="page-body">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSignUp}>Sign Up</button>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
            </div>
        </body>
    )
}