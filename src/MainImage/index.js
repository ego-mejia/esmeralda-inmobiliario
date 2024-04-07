import React from "react";
import mainImage from "../assets/asset1/img1.jpg";
import leftArrow from "../assets/Icons/Left-Arrow.svg";
import rightArrow from "../assets/Icons/Right-Arrow.svg";

const MainImage = () => {
  return (
    <section className="my-6 relative max-w-6xl w-full flex justify-center">
      <div className="absolute w-full  rounded-3xl gradiente-negro">
        <div className="absolute bottom-20 px-5">
          <div className="bg-primary-green flex justify-center w-16 h-6 rounded-full">
            <p className="text-white">Venta</p>
          </div>
          <p className="text-2xl text-white font-bold">
            *VENTA* Terreno en Venta sobre calle Calzada del Rio, Cd. Juarez
          </p>
        </div>
      </div>
      <img
        src={mainImage}
        alt="Main"
        className="w-full max-w-6xl rounded-3xl"
      />
      <img
        src={leftArrow}
        alt="Left Arrow"
        className="absolute top-1/2 -left-5 cursor-pointer"
      />
      <img
        src={rightArrow}
        alt="Right Arrow"
        className="absolute top-1/2 -right-5 cursor-pointer"
      />
    </section>
  );
};

export { MainImage };
