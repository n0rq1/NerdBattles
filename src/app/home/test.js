"use client";
import "../pages.css"; 
import "./home.css";
import Spline from '@splinetool/react-spline/next';
import gsap from "gsap";  

import * as THREE from 'three';
import { useEffect } from 'react';
import { OrbitControls, useGLTF , ScrollControls } from '@react-three/drei'
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export default function Test() {
    return (
        <>
          <ambientLight intensity={2} />
          <OrbitControls enableZoom={false} />
          <ScrollControls pages={5} damping={0.25} factor={1}>
            <Overlay/>
          </ScrollControls>
        </>
      );
}