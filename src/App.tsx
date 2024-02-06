import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Loading from "./pages/Loading";

function App() {
  const code = new URLSearchParams(window.location.search).get("code",);
  if (code) {
    console.log("인가코드", code)
    localStorage.setItem("code", code)
    window.location.replace("/main")
  }
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
