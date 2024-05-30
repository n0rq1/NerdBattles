import "../pages.css";
import "./profile.css";
import NavBar from "../navbar/navbar";

export default function Profile(){
    return (
        <body>
            <NavBar/>
            <div className="background">
                <div className="profile-upper">
                    <div className="page-body">
                        <div className="profile-header">
                            <img src="/midair.jpeg" className="profile-picture"/>
                            <div className="profile-account-info">
                                <a style={{color: 'white', fontWeight:'bold'}}>
                                    MorgDawg22
                                </a>
                                <progress value={.50} className="progress-bar"/>
                                <a style={{color: 'white'}}>
                                    69
                                </a>
                                <div className="links-container">
                                    <img src="/github.png" className="links-icon"/>
                                    <img src="/linkedin.png" className="links-icon"/>
                                    <img src="/leetcode.png" className="links-icon"/>
                                </div>
                            </div>
                            <img src="/pencil.svg" className="edit-icon mt-1"/>
                        </div>
                        <div className="user-info-container mt-1">
                            <div className="user-info">
                                <img src="/location-pin.png" className="info-icons"/>
                                <a className="user-info-text" style={{width:'250px'}}>
                                    California, United States
                                </a>
                                <img src="/school.png" className="info-icons"/>
                                <a className="user-info-text">
                                    California State University, Chico
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="calendar-thing">
                        <div className="profile-header">
                        </div>
                        <div className="user-info-container gametype-parent mt-1">
                            <div className="gametype-container">
                                <a>
                                    Code
                                </a>
                            </div>
                            <div className="gametype-container">
                                <a>
                                    Debug
                                </a>
                            </div>
                            <div className="gametype-container">
                                <a>
                                    Decrypt
                                </a>
                            </div>
                            <div className="gametype-container">
                                <a>
                                    Type
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-lower">
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
            </div>
        </body>
    )
}