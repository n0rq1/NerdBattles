"use client";
import "../pages.css";
import "../login/login.css";
import "./register.css";
import NavBar from "../navbar/navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import InitModal from "./initModal";
import ConfirmModal from "./confirmModal";

export default function Login() {
    const [initModalVisible, setInitModalVisible] = useState(true);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [currentUser,setCurrentUser] = useState(null);
    const [leetcode_link,setLC] = useState(null);
    const [github_link, setGH] = useState(null);
    const [linkedin_link, setLI] = useState(null);
    const [school_name,setSchoolName] = useState("");

    const supabase = createClientComponentClient();
    const router = useRouter();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const verifyEmail = async (passedEmail) => {
        try {
            const { data } = await supabase
                .from('users')
                .select()
                .eq('email', passedEmail);
            return data.length;
        } catch (error) {
            console.log(error);
            return 0;
        }
    };

    const verifyUsername = async (passedUsername) => {
        if (passedUsername.length < 3) return 1;
        const usernamePattern = /^[A-Za-z0-9]+$/;
        if (!usernamePattern.test(passedUsername)) return 1;
        
        try {
            const { data } = await supabase
                .from('users')
                .select()
                .eq('username', passedUsername);
            return data.length;
        } catch (error) {
            console.log(error);
            return 0;
        }
    };

    const handleNextPress = async () => {
        const goodEmail = await verifyEmail(email);
        const goodUsername = await verifyUsername(username);
        if (goodEmail || goodUsername) {
            console.log("Email or Username in use");
        } else {
            setInitModalVisible(false);
            setConfirmModalVisible(true);
        }
    };

    const signUp = async () => {
        const {data,error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })

        if(data && data.user){
            setCurrentUser(data.user);
            
            /* Now the user has signed up */
            const { error } = await supabase
            .from('users')
            .insert({
                uid: data.user.id,
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

            const { err } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if(err){
                console.log(err);
            } 
            router.push("/profile");
            router.refresh();
            setEmail('');
            setPassword('');
        }
    }

    return (
        <div>
            {initModalVisible && (
                <InitModal 
                    email={email} 
                    username={username}
                    password={password}
                    onEmailChange={handleEmailChange}
                    onUsernameChange={handleUsernameChange}
                    onNextPress={handleNextPress}
                    onPasswordChange={handlePasswordChange}
                />
            )}
            {confirmModalVisible && (
                <ConfirmModal 
                    email={email}
                    username={username}
                    signUp = {signUp}
                />
            )}
        </div>
    );
}
