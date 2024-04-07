import React from "react";
import { Tags } from "../Tags";

const Resumen = () => {
  return (
    <div className="max-w-6xl w-full mt-16 ">
      <h1 className="section-title mb-5">Resumen </h1>
      {/* TAGS */}
      <div className="flex ">
        <Tags
          tipo_tag="Resumen"
          value={1234}
          imageSource={require("../assets/Icons/area_icon.svg").default}
        />
        <Tags
          tipo_tag="Resumen2"
          value={56712318}
          imageSource={require("../assets/Icons/tag_icon.svg").default}
        />
        {/* <Tags /> */}
      </div>
    </div>
  );
};

export { Resumen };
