import React from "react";
// import areaIcon from "../Icons/area_icon.svg";

const Tags = (props) => {
  return (
    <div className="bg-light-green min-w-40 h-20 rounded-xl pt-2 pl-5 pr-5 mr-4">
      <p className="text-secondary-text font-bold text-base">
        {props.tipo_tag}
      </p>
      <div className="flex mx-0 mt-2">
        <img src={props.imageSource} className="mr-2.5"></img>
        <p className="text-base"> {props.value} m²</p>
      </div>
    </div>
  );
};

export { Tags };
