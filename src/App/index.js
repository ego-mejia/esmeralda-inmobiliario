import React from "react";
import "../style/output.css";
import { Navbar } from "../Navbar";
import { MainImage } from "../MainImage";
import { Slider } from "../Slider";
import { Resumen } from "../Resumen";
import { Descripcion } from "../Descripcion";
import { Footer } from "../Footer";
import { Map } from "../Map";

const App = () => {
  return (
    <div>
      <section className="sticky-navbar">
        <Navbar />
      </section>
      <section className="main-container">
        <MainImage />
      </section>
      <section className="main-container">
        <Slider />
      </section>
      <section className="main-container">
        <Resumen />
      </section>
      <section className="main-container">
        <Descripcion />
      </section>
      <section className="main-container">
        <Map />
      </section>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5173.749378431156!2d-100.31714364726322!3d25.68639840336531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1712297379668!5m2!1sen!2smx"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <Footer />
    </div>
  );
};

export default App;
