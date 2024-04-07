import React from "react";
import arrow from "./contact-arrow.svg";

const ContactButton = () => {
  return (
    <div>
      <button className="button bg-primary-green w-44 flex justify-between">
        <p className="text-base">Contáctame</p>
        <img src={arrow} alt="contact-arrow" />
      </button>
    </div>
  );
};

export { ContactButton };
