"use client";
import "../pages.css"; 
import "./home.css";
import Spline from '@splinetool/react-spline/next';
import gsap from "gsap";  

import Test from "./test";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="home-container">
      <Canvas
        className="canvas"
        camera={{
        fov: 60,
        position: [2.3, 1.5, 2.3],
        }}
      >
        <Test/>
      </Canvas>
    </div>
  );
}