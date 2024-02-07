import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Loading from "pages/Loading";
import Main from "pages/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
