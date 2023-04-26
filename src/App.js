import "./App.css";
import React from "react";
//import { HashRoute, Route, Routes } from "react-router-dom";
import NavBar from "./components/Topbar/NavBar";
import Home from "./components/Landing-page/Home";

function App() {
  return (
    <div className="App">

        <NavBar />
   
          <Home />
        
   
    </div>
  );
}

export default App;
