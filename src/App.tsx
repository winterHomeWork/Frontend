import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import Search from "pages/Search";
import Main from "pages/main";
import Filter from "pages/Filter";
import Product from "pages/Product";
import { GetLogin } from "lib/getLogin";

function App() {
  GetLogin();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/main" element={<Main />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
