import React, { useState } from "react";
import "./slider.scss";
import ImgComponent from "./imgComponent.js";
import img1 from "../img/imagen1.jpg";
import img2 from "../img/imagen2.jpg";
import img3 from "../img/imagen3.jpg";

const Slider = () => {
  const [x, setX] = useState(0);
  // creando un array por componente que mostraremos en el slider
  let sliderArr = [
  <ImgComponent src={img1}/>,
  <ImgComponent src={img2}/>, 
  <ImgComponent src={img3}/>
  ];

  const goLeft = () => {
    console.log(x);
    //setX(x + 100);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    //console.log(x);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      {/*agregaremos dos botones para navegar*/}
      <button id="goLeft" onClick={goLeft}>
      <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
      <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slider;
