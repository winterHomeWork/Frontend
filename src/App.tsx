import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Loading from "pages/Loading";
import Main from "pages/main";
import Filter from "pages/Filter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Filter" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
