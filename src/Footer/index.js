import React from "react";
import whatsappIcon from "../assets/Icons/whatsapp_icon.svg";
import mailIcon from "../assets/Icons/mail_icon.svg";

const Footer = () => {
  return (
    <>
      <section className="navbar flex justify-between items-center border-b-2 border-secondary-gray  bg-footer-text flex-col mt-10">
        <div className="max-w-6xl w-full bg-none">
          <img
            src={require("../assets/logo.svg").default}
            alt="Logo"
            className="w-52 mt-6"
          />
          <p className="my-5 text-secondary-text">
            Asesor inmobiliario certificado, asociado AMPI.
          </p>
          <button className="flex mb-11 bg-none flex-wrap">
            <div className="flex  rounded-full py-1 bg-white px-4 mr-3 mb-3">
              <img
                src={whatsappIcon}
                alt="Logo"
                className="mr-1.5 h-5 items-center"
              />
              <a>656 197 03 12</a>
            </div>
            <button className="flex  rounded-full py-1 bg-white px-4 align-center">
              <img
                src={mailIcon}
                alt="Logo"
                className="mr-1.5  h-6 items-center"
              />
              <a>info@esmeraldalaguna.com</a>
            </button>
          </button>
        </div>
      </section>
    </>
  );
};

export { Footer };
