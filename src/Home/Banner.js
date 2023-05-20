import React from 'react';
import "./banner.css";

const Banner = ({ banner }) => {
  return (
    <div className="banner-container">
      <img src={banner.image} alt="Banner Image" className="banner-image" />
      <div className="banner-content">
        <h2 className="banner-title">{banner.title}</h2>
        <p className="banner-caption">{banner.caption}</p>
      </div>
    </div>
  );
};

export default Banner;
