import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";
const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/923004680295"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={35} />
      </a>
    </div>
  );
};

export default Whatsapp;
