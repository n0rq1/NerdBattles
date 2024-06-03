"use client";
import "../pages.css";
import "../login/login.css";
import NavBar from "../navbar/navbar";
import { Input } from "@material-tailwind/react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login(){
    /* vars we are inserting into the users table */
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [leetcode_link,setLC] = useState(null);
    const [github_link, setGH] = useState(null);
    const [linkedin_link, setLI] = useState(null);
    const [school_name,setSchool] = useState(null);

    const [password,setPassword] = useState('');
    const [user,setUser] = useState(null);
    const [emailInUse,setEmailInUse] = useState(1);

    const router = useRouter();

    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser(){
            const{data: {user}} = await supabase.auth.getUser();
            setUser(user);
        }
        getUser();
    }, []);

    const handleSignInButton = async => {
        router.push("/login")
    }

    const lookupEmail = async () => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select()
                .eq('email', email);
            console.log(data.length);
            if (error) {
                console.error("Error fetching email: ", error);
                return 0;
            }
    
            if (data && data.length > 0) {
                console.log("Email in use")
            } else {
                signUp();
                const { error } = await supabase
                    .from('users')
                    .insert({
                        uid: '00e0ca0d-df71-4f6a-a788-58774ed7b71a',
                        username: username,
                        email: email,
                        linkedin_link: linkedin_link,
                        github_link: github_link,
                        leetcode_link: leetcode_link,
                        school_name: school_name,
                    })
                if(error){
                    console.log(error);
                }
                /*
                now the user signed up with auth 
                user should now have uid
                take the uid and email and insert into users table
                in total we will insert:
                    uid (we get this from auth)
                    email (we already got this)
                    username (user input)
                    links (user input)
                */
                console.output(user);
            }
        } catch (error) {
            console.error("Unexpected error: ", error);
            return 0;
        }
    };

    const signUp = async () => {
        const {data,error} = await supabase.auth.signUp({
            email,
            password,
            //options: {
                //emailRedirectTo: `${location.origin}/auth/callback`
            //}
        })

        if(data){
            setUser(data.user);
            /*
                Wait until the user has verified?? - figure this out Later
                For now the work around is to verify, refresh, sign in
            */
            router.refresh();
        }
        setEmail('');
        setPassword('');
    }

    const handleSignUp = async () =>{
        lookupEmail();
    }
    
    return (
        <body>
            <NavBar/>
            <div className="login-page">
                <div className="login-container">
                    <input
                        style={{
                            border: '1px solid black',
                            width:'40%',
                            marginTop:'20%',
                            color:'black',
                            backgroundColor:'white'
                        }}
                        placeholder="Email..."
                        type="email"
                        name="email"
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                    />
                    <input 
                        style={{
                            border: '1px solid black',
                            marginTop:'3%',
                            width:'40%',
                            color:'black',
                            backgroundColor:'white'
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
                        onClick={
                            handleSignUp
                        }
                    >
                        Sign Up
                    </button>
                    <a className="login-text">
                        Already have an account?
                    </a>
                    <a className="login-signup"onClick={handleSignInButton}>
                        Sign In!
                    </a>
                </div>
            </div>
        </body>
    )
}