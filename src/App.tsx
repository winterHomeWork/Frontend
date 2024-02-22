import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import Search from "pages/Search";
import Main from "pages/main";
import axios from "axios";
import Filter from "pages/Filter";
import customAxios from "lib/customAxios";

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
          }
          if (localStorage.getItem("access") && localStorage.getItem("refresh")) {
            const { data } = await customAxios.get("/user");
            localStorage.setItem("name", data.nickname)
            localStorage.setItem("email",data.email)
            window.location.replace("/main")
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
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/main" element={<Main />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
