import axios from 'axios';
import React, { useEffect } from 'react';

const Imsi = () => {
  useEffect(() => {
    const kakaoGet = async () => {
      const baseUrl = 'https://prod-server.xquare.app/nudia/kakao/save';
      const code = localStorage.getItem("code")
      console.log(code)
      try {
        const response = await axios.get(baseUrl, { params: { param1: code } });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    kakaoGet()
    },[])
  return (
    <div>
      
    </div>
  );
};

export default Imsi;