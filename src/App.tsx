import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import Imsi from "pages/imsi";

function App() {
  const code = new URLSearchParams(window.location.search).get("code",);
  if (code) {
    console.log("인가코드", code)
    localStorage.setItem("code", code)
    window.location.replace("/imsi")
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/imsi" element={<Imsi />} />
      </Routes>
    </Router>
  );
}

export default App;
