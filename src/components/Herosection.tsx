import { FaGlobe, FaHeadset, FaPlug, FaRecycle } from 'react-icons/fa';

export default function Herosection() {

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
        <>
      <div className="pt-24 relative bg-gradient-to-r from-blue-800 to-blue-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
  
        <div className="relative z-20 max-w-6xl mx-auto px-6 py-16 text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Livraison <span className="text-yellow-400">Express</span> au Maroc
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base">
            BMD est une société située au cœur de la capitale économique du
            royaume de maroc, notre société dispose de plusieurs compétences
            dédiée à la satisfaction de nos clients
          </p>
  
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded font-semibold text-sm">
              Livrer avec BMD
            </button>
            <button className="border border-white px-6 py-2 rounded text-sm">
              CONNEXION
            </button>
          </div>
  
          <div className="mt-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/YluhsPMQSVE"
                title="BMD Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
 
 {/* section pourquoi choisir Bmd */}

      <div className="bg-gray-50 py-16 px-6" >
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
    </>
    );
  }
  