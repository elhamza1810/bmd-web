import { FaClock, FaRoute, FaBullseye, FaMapMarkedAlt } from 'react-icons/fa';
import Link from 'next/link';
import Statistiques from './Statistiques';
import logistique from "@/assets/logistique.png"
import abt from "@/assets/about.jpg"


export default function AboutSection() {
  return (
    <>
    <div className="pt-20">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${abt.src})` }} 
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            À PROPOS DE <span className="text-white">BMD</span>
          </h1>
          <p className="mt-4 text-lg">
            Découvrez notre histoire, nos valeurs et notre engagement<br />
            pour une livraison exceptionnelle
          </p>

          {/* Flèche */}
          <div className="mt-8">
            <Link href="#about-details">
              <div className="animate-bounce cursor-pointer">
                <span className="text-4xl">↓</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Détails */}
      <div id="about-details" className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Texte */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                🚀 Innovation Logistique
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              La précision horlogère <span className="text-blue-600">appliquée à la livraison</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Chez BMD, nous avons transposé la rigueur suisse dans notre chaîne logistique
              pour vous offrir une précision inégalée au Maroc.
            </p>

            {/* Avantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <FaClock className="text-pink-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Collecte express</h4>
                  <p className="text-sm text-gray-600">Prise en charge en moins de 2h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRoute className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Optimisation intelligente</h4>
                  <p className="text-sm text-gray-600">Tournées calculées avec précision</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaBullseye className="text-pink-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Précision extrême</h4>
                  <p className="text-sm text-gray-600">Livraison à ±15 minutes près</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkedAlt className="text-purple-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Suivi temps réel</h4>
                  <p className="text-sm text-gray-600">Visualisation GPS à chaque étape</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={logistique.src}
              alt="Livraison BMD"
              className="rounded-lg shadow-md max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
    <Statistiques/>
    </>

  );
}
