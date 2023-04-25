import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Topbar/NavBar";
import Home from "./components/Landing-page/Home";

function App() {
  return (
    <div className="App">
      <HashRouter >
        <NavBar />
        <Route>
          <Route path="/"  element={<Home />} />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
