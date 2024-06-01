"use client";
import "../pages.css";
import "./profile.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import NavBar from "../navbar/navbar";
import { useEffect,useState } from "react";
import {useRouter} from "next/navigation";

export default function Profile(){
    const [user,setUser] = useState(null);
    const [uname,setUsername] = useState(null);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const supabase = createClientComponentClient();

    const router = useRouter();

    useEffect(() => {
        async function getUserID(){
            const{data: {user}} = await supabase.auth.getUser();
            if(user){
              setUser(user.id);
            }
        }
        getUserID();
      }, []);
    
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
    }, [user]);

    const handleSignOut = async () =>{
        await supabase.auth.signOut();
        router.push("/");
        router.refresh();
        setUser(null);
    }
    
    return (
        <body>
            <NavBar/>
            <div className="background">
                <div className="profile-upper">
                    <div className="page-body">
                        <div className="profile-header">
                            <img src="/midair.jpeg" className="profile-picture"/>
                            <div className="profile-account-info">
                                <a className="uname-text">
                                    {user ? uname : "Login"}
                                </a>
                                <progress value={.50} className="progress-bar"/>
                                <a style={{color: 'white'}}>
                                    {userData ? userData.level : 0}
                                </a>
                                <div className="links-container">
                                    <img
                                        onClick={() => window.location.href = userData.github_link}
                                        src="/github.png"
                                        className="links-icon"
                                    />
                                    <img
                                        onClick={() => window.location.href = userData.linkedin_link}
                                        src="/linkedin.png"
                                        className="links-icon"
                                    />
                                    <img 
                                        onClick={() => window.location.href = userData.leetcode_link}
                                        src="/leetcode.png"
                                        className="links-icon"
                                    />
                                </div>
                            </div>
                            <img src="/pencil.svg" className="edit-icon mt-1"/>
                            <button onClick={handleSignOut} className="logout-button">
                                <a className="button-text">
                                    Logout
                                </a>
                            </button>
                        </div>
                        <div className="user-info-container mt-1">
                            <div className="user-info">
                                <img src="/location-pin.png" className="info-icons"/>
                                <a className="user-info-text" style={{width:'250px'}}>
                                    Location Here
                                </a>
                                <img src="/school.png" className="info-icons"/>
                                <a className="user-info-text">
                                    School Name Here
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="calendar-thing">
                        <div className="profile-header">
                            <a>
                                Calendar Thing
                            </a>
                        </div>
                        <div className="user-info-container gametype-parent mt-1">
                            <div className="gametype-container">
                                <a>
                                    CODE
                                </a>
                            </div>
                            <div className="gametype-container">
                                <a>
                                    DEBUG
                                </a>
                            </div>
                            <div className="gametype-container">
                                <a>
                                    DECRYPT 
                                </a>
                            </div>
                            <div className="gametype-container">
                                <a>
                                    TYPE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-lower">
                <div className="cards-container">
                    <div className="card">
                        <div className="card-header">
                            <a className="card-header-text">
                                CODE BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a className="card-header-text">
                                DEBUGGER BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                        </div>                        
                    </div>  
                    <div className="card">
                        <div className="card-header">
                            <a className="card-header-text">
                                DECRYPT BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins 
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                        </div>                        
                    </div>                    
                    <div className="card">
                        <div className="card-header">
                            <a className="card-header-text">
                                TYPE BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                0
                            </a>
                            <a className="record-tracker">
                                Average WPM
                            </a>
                            <a style={{fontSize:'15px', marginLeft:'1vw'}}>
                                69
                            </a>
                        </div>                        
                    </div>                  
                    </div>
                </div>
            </div>
        </body>
    )
}