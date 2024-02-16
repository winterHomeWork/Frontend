import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import Search from "pages/Search";
import Main from "pages/main";
import axios from "axios";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  useEffect(() => {
    if (code) {
      const kakaoGet = async () => {
        const baseUrl = "https://prod-server.xquare.app/nudia/kakao";
        try {
          const response = await axios.post(baseUrl, {
            headers: {
              "Content-Type": "application/json",
            },
            code,
          });
          
          if (response.data.access_token && response.data.refresh_token) {
            localStorage.setItem("access", response.data.access_token);
            localStorage.setItem("refresh", response.data.refresh_token);
            window.location.replace("/main");
          }
        } catch (error) {
          console.error(error);
        }
      };
      kakaoGet();
    }
  }, [code]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
