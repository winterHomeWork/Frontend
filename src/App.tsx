import React from "react";
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/layouts/Login";
import Loading from "./pages/layouts/Loading";

function App() {
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
