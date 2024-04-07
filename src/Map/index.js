import React from "react";

const Map = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.062109258599!2d-106.41177628846864!3d31.686869974030323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d86378b7571%3A0xa84e5faee2fe8236!2sPlaza%20Las%20Misiones!5e0!3m2!1sen!2smx!4v1712458749989!5m2!1sen!2smx"
        className="w-full max-w-6xl h-96"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export { Map };
