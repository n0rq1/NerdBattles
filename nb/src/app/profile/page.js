import "../pages.css";
import "./profile.css";
import NavBar from "../navbar/navbar";

export default function Profile(){
    return (
        <>
            <NavBar/>
            <div className="background">
                <div className="profile-header">
                    <img src="/midair.jpeg" className="profile-pic"/> 
                    <div className="account-info-container">
                        <a className="username-profile">
                            MORGDAWG22
                        </a>
                        <a className="level">
                            69
                        </a>
                    </div>
                    <div className="links-container">
                        <img src="/github.png" className="icon"/>
                        <img src="/linkedin.png" className="icon"/>
                        <img src="/leetcode.png" className="icon"/> 
                    </div>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <div className="card-header">
                            <a>
                                CODE BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                8
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                1
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <a>
                                DEBUGGER BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                8
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                1
                            </a>
                        </div>                        
                    </div>  
                    <div className="card">
                        <div className="card-header">
                            <a>
                                DECRYPT BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins 
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                8
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                1
                            </a>
                        </div>                        
                    </div>                    
                    <div className="card">
                        <div className="card-header">
                            <a>
                                TYPE BATTLES
                            </a>
                        </div>
                        <div className="record-tracker-container">
                            <a className="record-tracker">
                                Wins
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                8
                            </a>
                            <a className="record-tracker">
                                Losses
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                1
                            </a>
                            <a className="record-tracker">
                                Average WPM
                            </a>
                            <a style={{fontSize:'1.5vw', marginLeft:'.5vw'}}>
                                69
                            </a>
                            
                          
                        </div>                        
                    </div>                   
                </div>
            </div>
        </>
    )
}