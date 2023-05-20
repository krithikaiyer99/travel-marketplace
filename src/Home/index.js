import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHomepage } from "../store";
import Banner from './Banner';
import Carousel from "./Carousel";
import SearchBox from "./SearchBox";
import "./index.css";

const Home = () => {
  const dispatch = useDispatch();
  const homepage = useSelector((state) => state.travelconnect.homepage);
  const [banner, setbanner] = useState(null)
  const [twopairs, settwopairs] = useState(null)
  const [threepairs, setthreepairs] = useState(null)

  useEffect(() => {
    dispatch(getHomepage());
    setbanner(homepage.filter(item => item.type === 'banner')[0])
    settwopairs(homepage.filter(item => item.type === 'pair-cover'))
    setthreepairs(homepage.filter(item => item.type === 'three-pair'))
  }, [homepage]);

  return (
    <div className="home">
      <SearchBox />
      <div className="spacing">
        {banner && (
          <Banner banner={banner}/>
        )}
      </div>
      <div className="spacing">
          {twopairs && (
            <Carousel items={twopairs}/>
          )}
      </div>
      <div className="spacing">
          {threepairs && (
            <Carousel items={threepairs}/>
          )}
      </div>
    </div>
  );
};

export default Home;
