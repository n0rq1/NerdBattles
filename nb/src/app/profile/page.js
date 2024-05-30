import "../pages.css";
import "./profile.css";
import NavBar from "../navbar/navbar";

export default function Profile(){
    return (
        <body>
            <NavBar/>
            <div className="background">
                <div className="page-body">
                    <div className="profile-header">
                        <img src="/midair.jpeg" className="profile-picture"/>
                        <div className="profile-account-info">
                            <a style={{fontWeight:'bold'}}>
                                MorgDawg22
                            </a>
                            <progress value={.50} className="progress-bar"/>
                            <a>
                                69
                            </a>
                            <div className="links-container">
                                <img src="/github.png" className="links-icon"/>
                                <img src="/linkedin.png" className="links-icon"/>
                                <img src="/leetcode.png" className="links-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}