'use client';

import { FaGlobe, FaHeadset, FaPlug, FaRecycle } from 'react-icons/fa';

export default function HeroSection2() {
  const avantages = [
    {
      icon: <FaGlobe className="text-2xl text-blue-600" />,
      title: "Plateforme Unifiée",
      desc: "Gérez l'ensemble de vos opérations logistiques depuis notre interface unique et intuitive.",
    },
    {
      icon: <FaHeadset className="text-2xl text-blue-600" />,
      title: "Support Premium",
      desc: "Accès 24/7 à une équipe dédiée pour répondre à vos besoins spécifiques.",
    },
    {
      icon: <FaPlug className="text-2xl text-blue-600" />,
      title: "Intégration API",
      desc: "Connectez facilement notre solution à votre système existant via notre API robuste.",
    },
    {
      icon: <FaRecycle className="text-2xl text-green-600" />,
      title: "Écoresponsabilité",
      desc: "Des solutions logistiques optimisées pour réduire votre empreinte carbone.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 -z-10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YluhsPMQSVE?autoplay=1&mute=1&loop=1&playlist=YluhsPMQSVE"
            title="BMD Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Couvre la vidéo avec un filtre sombre */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Contenu devant */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col justify-center h-full px-6 space-y-4">
          <div className="bg-blue-800 bg-opacity-0 p-8 rounded-lg max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Livraison <span className="text-yellow-400">Express</span> au Maroc
            </h1>
           </div> 

          <div className="bg-blue-100 bg-opacity-10 p-8 rounded-lg max-w-md">
            <p className="mt-4 text-white text-sm md:text-base">
              BMD est une société située au cœur de la capitale économique du royaume du Maroc,
              notre société dispose de plusieurs compétences dédiées à la satisfaction de nos clients.
            </p>
           </div> 

            {/* Boutons */}
            <div className="flex gap-4 pt-2">
              <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded font-semibold text-sm">
                Livrer avec BMD
              </button>
              <button className="border border-white px-6 py-2 rounded text-sm text-white">
                CONNEXION
              </button>
            </div>
          {/*</div> */}
        </div>
      </div>

      {/* Section pourquoi choisir */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir BMD ?</h2>
          <p className="text-gray-600 mb-12">
            Une approche différente de la logistique, centrée sur vos besoins spécifiques.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {avantages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 text-left hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
