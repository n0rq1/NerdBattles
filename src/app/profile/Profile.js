"use client";

import "../pages.css";
import "./profile.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../navbar/navbar";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [uname, setUsername] = useState(null);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const supabase = createClientComponentClient();
    const router = useRouter();

    useEffect(() => {
        async function getUserID() {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                setUser(user.id);
            }
        }
        getUserID();
    }, [supabase.auth]);

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
                if (data) {
                    setUserData(data[0]);
                    setUsername(data[0].username);
                }
            }
        }
        getUserInfo();
    }, [user, supabase]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/");
        router.refresh();
        setUser(null);
    }

    const handleLogin = async () => {
        router.push("/login");
    }

    return (
        <div>
            <NavBar/>
            <div className="profile-body">
                <div className="profile-avatar">
                    <img src="/midair.jpeg"/>
                </div>
                <div className="profile-username-container">
                    <a className="profile-username">
                        {user ? uname : "Login"}
                    </a>
                </div>
                <div className="profile-username-container">
                    <a className="profile-level">
                        level {userData ? userData.level : "N/A"}
                    </a>    
                </div>
                <div className="stats-container">
                    <a className="profile-level mt-1">
                        stats
                    </a>
                    <div className="box-1-container">
                        <a className="box-1-wins mt-10">
                            {userData ? userData.code_wins : "N/A"}
                        </a>
                        <a className="box-1-text">
                            code battles won
                        </a>
                        <a className="box-1-wins mt-10">
                            {userData ? userData.code_wins/userData.code_losses : "N/A"}
                        </a>
                        <a className="box-1-text">
                            win/loss ratio
                        </a>
                    </div>
                    <div className="box-1-container">
                        <a className="box-1-wins mt-10">
                            {userData ? userData.type_wins : "N/A"}
                        </a>
                        <a className="box-1-text">
                            type battles won
                        </a>
                        <a className="box-1-wins mt-10">
                            {userData ? userData.average_wpm : "N/A"}
                        </a>
                        <a className="box-1-text">
                            average wpm
                        </a>
                    </div>
                    <div className="box-1-container">
                        <a className="box-1-wins mt-10">
                            {userData ? userData.debug_wins : "N/A"}
                        </a>
                        <a className="box-1-text">
                            debug battles won
                        </a>
                        <a className="box-1-wins mt-10">
                            {userData ? userData.fastest_bug + "s" : "N/A"}
                        </a>
                        <a className="box-1-text">
                            fastest bug found
                        </a>
                    </div>
                    <div className="box-1-container">
                        <a className="box-1-wins mt-10">
                            {userData ? userData.decrypt_wins : "N/A"}
                        </a>
                        <a className="box-1-text">
                            decrypt battles won
                        </a>
                        <a className="box-1-wins mt-10">
                            {userData ? userData.fastest_decrypt + "s" : "N/A"}
                        </a>
                        <a className="box-1-text">
                            fastest cipher broken
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
