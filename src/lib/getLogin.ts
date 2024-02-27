import customAxios from "lib/customAxios";
import axios from "axios";
import { useEffect } from "react";

export const GetLogin = () => {
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
          if (
            localStorage.getItem("access") &&
            localStorage.getItem("refresh")
          ) {
            const { data } = await customAxios.get("/user");
            localStorage.setItem("name", data.nickname);
            localStorage.setItem("email", data.email);
            window.location.replace("/main");
          }
        } catch (error) {
          console.error(error);
        }
      };
      kakaoGet();
    }
  },[code]);
};
