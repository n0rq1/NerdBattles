"use client"
import "../pages.css"; 
import "./home.css";
import NavBar from "../navbar/navbar";
import Spline from '@splinetool/react-spline/next';
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";  

export default function Home() {
    const comp = useRef(null);
    const [showNavBar, setShowNavBar] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                onComplete: () => {
                    setShowNavBar(true);
                }
            });
            t1.from(["#title-1", "#title-2", "#title-3"], {
              opacity: 0,
              y: "+=30",
              stagger: 0.5,
            })
            .to(["#title-1", "#title-2", "#title-3"], {
              opacity: 0,
              y: "-=30",
              delay: 0.3,
              stagger: 0.5,
            })
        }, comp)
    
        return () => ctx.revert()
      }, [setShowNavBar])
    return (
        <div className="relative" ref={comp}>
            {showNavBar && <NavBar/>}
        <div
          id="intro-slider"
          className="h-screen p-10 bg-black-0 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
        >
          <h1 className="intro-text" id="title-1">
            Play
          </h1>
          <h1 className="intro-text" id="title-2">
            Learn
          </h1>
          <h1 className="intro-text" id="title-3">
            Compete
          </h1>
        </div>
      </div>
    );
}


