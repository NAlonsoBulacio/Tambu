import React from 'react'
import CarouselDefault from "../Componentes/Carrousel/Carrousel";
import YouTube from "../Componentes/YoutubeVideo/Youtube";
import AboutUs from "../Componentes/AboutUs/AboutUs";
import Whatsapp from "../Componentes/Whatsapp/Whatsapp";
import Footer from "../Componentes/Footer/Footer";
import NavBar from "../Componentes/NavBar/NavBar";
const Landing = () => {
  return (
    <div>
      <NavBar />
      <CarouselDefault />
      <AboutUs />
      <YouTube/>
      <Whatsapp />
      <Footer />
    </div>
  )
}

export default Landing
