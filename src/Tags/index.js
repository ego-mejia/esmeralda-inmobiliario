import React from "react";
import areaIcon from "../Icons/area_icon.svg";

const Tags = () => {
  return (
    <div className="bg-light-green w-48 h-20 rounded-xl pt-2 pl-5 pr-5 mr-4">
      <p className="text-secondary-text font-bold text-base">Resumen</p>
      <div className="flex mx-0 mt-2">
        <img src={areaIcon} className="mr-2.5"></img>
        <p className="text-base">5,256.804 m²</p>
      </div>
    </div>
  );
};

export { Tags };
