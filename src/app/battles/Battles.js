"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";  
import "../pages.css"; 
import "./battles.css";

import { io } from "socket.io-client";

export default function BattlesHome() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const socket = useRef(null)
  useEffect(() => {
    console.log("Connected");
    if(!socket.current) {
      socket.current = io('http://localhost:3000');
    }
  }, [])
  
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <a className="ml-10 mt-40"> hi </a>
      <input
        style={{
          border: '1px solid black',
          marginTop: '10%',
          width: '40%',
          color: 'black',
          backgroundColor: 'white'
          }}
        placeholder="Enter Code..."
        type="code"
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button> Enter </button>
    </div>
  );
}
