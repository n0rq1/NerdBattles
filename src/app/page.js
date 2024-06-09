"use client";
import { useState } from 'react';
import NavBar from "./navbar/navbar";
import Home from "./home/page";
import Battles from "./battles/page";
import Spline from '@splinetool/react-spline/next';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return(
    <Home/>
  );
}

export default App;