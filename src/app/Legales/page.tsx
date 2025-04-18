"use client";
import { useEffect, useState } from "react";

import Footer from '@/components/Footer';
import NavBar from "@/components/NavBar";

import Image from "next/image";

import pic2 from "@/assets/about.jpg"
import logist from "@/assets/logistique.png"

const page = () => {

  const images = [pic2, logist ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 secondes entre slides
    return () => clearInterval(interval);
  }, [images.length]) ;


  return (

    <>

    <NavBar/>

    <div className="pt-0">
    {/* Slider top */}
    <div className="relative h-[300px] overflow-hidden">
      {images.map((img, index) => (
                  <Image
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Règles de confidentialité</h1>
      </div>
    </div>
    {/* Mentions légales content */}
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-12 mb-20 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Identification et publication</h2>
        <p className="mb-4">
          Le présent site est publié par :
        </p>

        <p className="mb-4 font-bold">BLACK MAN DELIVERY SARL</p>
        <p className="mb-8">Siège social : Hay Tissire Chohada</p>

        <h2 className="text-2xl font-bold text-blue-900 mb-6">Propriété intellectuelle</h2>
        <p className="mb-4">
          L’ensemble des éléments figurant sur le site de <a href="http://www.blackmandelivery.ma" className="text-blue-600 underline">http://www.blackmandelivery.ma</a> est protégé par la législation Marocaine sur le droit d'auteur et la protection de la propriété industrielle.
        </p>

        <p className="mb-4">
          L’ensemble des éléments de ce site, les marques, logos, dessins, graphismes, icônes, textes, applications, scripts, fonctionnalités, ainsi que leur sélection ou combinaison apparaissant à l’adresse <a href="http://www.blackmandelivery.ma" className="text-blue-600 underline">http://www.blackmandelivery.ma</a> ou sur ses sous-domaines associés et les autres domaines du site internet, sont la propriété exclusive de BLACK MAN DELIVERY SARL, sauf indication contraire.
        </p>
        <p className="mb-4">
          L’accès au site n’entraîne aucune cession des droits susvisés.
        </p>

        <p className="mb-4">
          Les droits d’utilisation de ce site et de ses sous-domaines associés ne sont concédés que sous forme numérique aux fins de visualisation des pages consultées, à titre personnel, non cessible, non transmissible et non exclusif.
        </p>

        <p className="mb-4">
          L’utilisateur s’interdit de copier, reproduire, modifier, distribuer, afficher, vendre ou altérer tout ou partie de ce site sans autorisation préalable écrite de BLACK MAN DELIVERY SARL.
        </p>

        <p>
          En cas d’utilisation illégale ou non autorisée du site, BLACK MAN DELIVERY SARL se réserve le droit de prendre toute mesure nécessaire et d’intenter toute action appropriée en justice.
        </p>
      </div>
    </div>

    <Footer/>

</>
  )

}

export default page