import "./App.css";
import React from "react";
import { HashRoute, Route, Routes } from "react-router-dom";
import NavBar from "./components/Topbar/NavBar";
import Home from "./components/Landing-page/Home";

function App() {
  return (
    <div className="App">
      <HashRoute>
        <NavBar />
        <Routes>
          <Route path="/"  element={<Home />} />
        </Routes>
      </HashRoute>
    </div>
  );
}

export default App;
