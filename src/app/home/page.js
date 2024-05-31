import "../pages.css";
import NavBar from "../navbar/navbar";

export default function Home(){
    return (
        <body>
            <NavBar/>
            <div className="background">
                <div className="page-body">
                    <a>
                        Home 
                    </a>
                </div>
            </div>
        </body>
    )
}