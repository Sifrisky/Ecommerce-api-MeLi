import React from "react";

const ImgComponent = ({src}) => {
  let imgStyles = {
    width:  + "%",
    height: "auto"
  };

  return <img src={src} alt="slide-img" style={imgStyles}></img>;

  }
export default ImgComponent;
