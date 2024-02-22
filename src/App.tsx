import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import Search from "pages/Search";
import Main from "pages/main";
import Filter from "pages/Filter";
import Product from "pages/Product";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  if (code) {
    console.log("인가코드", code);
    localStorage.setItem("code", code);
    window.location.replace("/main");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/main" element={<Main />} />
        <Route path="/kakao/callback" element={<div>콜백</div>} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
