import React from "react";
import "./banner.css";

const Carousel = ({ items }) => {
  return (
    <div className={"row"}>
      {items.map((item) => (
        <div className={"row-item"} key={item.id}>
          <img src={item.image} alt={item.title} className="row-image" />
            {item.caption.length > 0 && (
              <p className="row-caption">{item.caption}</p>
            )}
            <h2 className="row-title">{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
