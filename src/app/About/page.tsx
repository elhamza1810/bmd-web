"use client";
import { useEffect, useState } from "react";
import Footer from '@/components/Footer';
import NavBar from "@/components/NavBar";
import Statistiques from "./Statistiques";

import ramassage from "@/assets/ramassage.png"
import pic2 from "@/assets/about.jpg"
import logist from "@/assets/logistique.png"





const page = () => {

  const images = [
    ramassage.src, // <-- tu mets ton vrai chemin ici
    pic2.src, // <-- et ici
    logist.src, // <-- etc
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change toutes les 3 secondes
    return () => clearInterval(interval);
  }, [images.length]);


  return (

    <>

    <NavBar/>
    <section className="py-10 px-4 md:py-20 md:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Partie Slider */}
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg shadow-lg h-[400px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Partie Texte */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h5 className="text-blue-600 font-semibold mb-2">A PROPOS DE BMD</h5>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Des Solutions De Logistique Et De Transport Fiables Vous Font Gagner Du Temps !!
        </h2>

        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✔️</span> Système de contrôle de la qualité
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✔️</span> Garantie de satisfaction à 100 %
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✔️</span> Professionnel et qualifié
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-600">✔️</span> Sûr, fiable et express
          </li>
        </ul>

        {/* Petit encadré à droite */}
        <div className="bg-blue-600 text-white rounded-lg p-6 max-w-xs shadow-lg">
          <p className="text-sm mb-2">Des solutions flexibles, améliorées et accélérées !</p>
          <h3 className="text-3xl font-bold">100k</h3>
          <p className="text-sm">Clients</p>
        </div>

        {/* Description en bas */}
        <p className="text-gray-600 text-sm mt-8">
          BLACK MAN DELIVERY SARL s’engage à protéger les données à caractère personnel des utilisateurs de ce site et de ses sous-domaines dans le respect de la réglementation en vigueur...
        </p>
      </div>
    </section>
    <Statistiques/>
    <Footer/>

    </>
  )
}

export default page