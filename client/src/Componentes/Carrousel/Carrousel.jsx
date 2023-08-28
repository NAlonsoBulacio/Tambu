import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
import slides from "./images";
import styles from "./Carrousel.module.css";


import { Carousel, Typography} from "@material-tailwind/react";
 
export default function CarouselDefault() {
  return (
    <Carousel className={`max-h-screen overflow-hidden ${styles.bgn}`}>
      <div className="relative w-full max-h-[550px] ">
        <img
          src={slides[0]}
          alt="image 1"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 grid h-screen w-screen place-items-center">
          {/* <div className="w-3/4 text-center md:w-2/4">
            <Typography variant="h3" color="white" className="mt-10 text-2xl">
              Un servicio confiable, transparente e integral
            </Typography>
          </div> */}
        </div>
      </div>
      <div className="relative w-full max-h-[500px] inset-0 grid place-items-center">
        <img
          src={slides[1]}
          alt="image 1"
          className=" w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          {/* <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Su Aliado para Comprar y Alquilar Propiedades de Ensueño
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Su satisfacción es nuestro mayor compromiso.
            </Typography>
          </div> */}
        </div>
      </div>
      <div className="relative w-full max-h-[500px] inset-0 grid place-items-center">
        <img
          src={slides[2]}
          alt="image 1"
          className=" w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          {/* <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              La Clave para una Experiencia Inmobiliaria Exitosa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Valoramos la comunicación transparente como pilar fundamental para
              una experiencia inmobiliaria satisfactoria.
            </Typography>
          </div> */}
        </div>
      </div>
    </Carousel>
  );
}