import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Topbar/NavBar";
import Home from "./components/Landing-page/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/quickfinz">
 
        <NavBar />
        <Routes>
          <Route path="/quickfinz" exact element={<Home />} />

      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
