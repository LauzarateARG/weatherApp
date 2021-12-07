import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

//importar componentes
import CardContain from "./components/CardContain/CardContain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardContain/>} />
      </Routes>
    </div>
  );
}

export default App;
