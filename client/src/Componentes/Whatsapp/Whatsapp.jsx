import React from "react";
import wp from '../../images/wp.png';
import './Whatsapp.css'; // Asegúrate de tener un archivo CSS para tus estilos personalizados

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/+5493814672669"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={wp}
          alt="WhatsApp"
          className="w-10 h-10 custom-img-style" 
        />
      </a>
    </div>
  );
};

export default Whatsapp;
