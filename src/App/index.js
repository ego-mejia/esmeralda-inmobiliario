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
      <Footer />
    </div>
  );
};

export default App;
