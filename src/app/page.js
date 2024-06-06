"use client";
import { useState } from 'react';
import NavBar from "./navbar/navbar";
import "./page.css";
import Home from "./home/page";
import Battles from "./battles/page";
import Profile from "./profile/page";
import Settings from "./settings/page";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <body>
      <NavBar/>
      <Home/>
    </body>
  );
}

export default App;