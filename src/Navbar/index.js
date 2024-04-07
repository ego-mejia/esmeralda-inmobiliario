import React from "react";
import "../style/output.css";
import "../Components/ContactButton";
import { ContactButton } from "../Components/ContactButton";

const Navbar = () => {
  return (
    <section className="navbar flex justify-between items-center h-24 border-b-2 border-secondary-gray  bg-white">
      <img
        src={require("../assets/logo.svg").default}
        alt="Logo"
        className="w-52"
      />
      <ContactButton />
    </section>
  );
};

export { Navbar };
