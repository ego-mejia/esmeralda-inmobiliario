import React from "react";
import { Tags } from "../Tags";

const Resumen = () => {
  return (
    <div className="max-w-6xl w-full mt-16">
      <h1 className="section-title">Resumen </h1>
      {/* TAGS */}
      <div className="flex ">
        <Tags />
        <Tags />
        {/* <Tags /> */}
      </div>
    </div>
  );
};

export { Resumen };
