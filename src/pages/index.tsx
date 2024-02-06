import React, { useEffect, useState } from 'react';
import Loading from './layouts/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1500)
  },[])

  return (
    <>
      {loading ? <Loading /> : <div>홈</div>}
    </>
  );
};

export default Home;