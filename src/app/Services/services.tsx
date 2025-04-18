import { FaBoxOpen, FaTruck, FaChartBar, FaMoneyBillWave } from 'react-icons/fa';
import ramassage from "@/assets/ramassage.png"
import livr from "@/assets/livraison.png"
import suivi from "@/assets/suivi.png"
import retour from "@/assets/retour.png"

export default function Services() {
  const services = [
    {
      icon: <FaBoxOpen className="text-red-500 text-2xl" />,
      title: "Ramassage",
      description:
        "BMD assure le ramassage de vos colis, un de nos agents va se déplacer chez vous pour ramasser vos colis.",
      image: ramassage.src, 
    },
    {
      icon: <FaTruck className="text-gray-600 text-2xl" />,
      title: "Livraison",
      description:
        "BMD assure la livraison de vos colis dans les plus brefs délais, 24h pour la plupart des villes, et 48h pour le reste.",
      image: livr.src ,
    },
    {
      icon: <FaChartBar className="text-teal-500 text-2xl" />,
      title: "Suivi",
      description:
        "BMD assure le suivi de vos colis avec vos clients, et la mise à jour des états des colis dans moins de 48h.",
      image: suivi.src ,
    },
    {
      icon: <FaMoneyBillWave className="text-yellow-500 text-2xl" />,
      title: "Retour du fond",
      description:
        "BMD garantit le paiement de la totalité de vos colis livrés deux fois par semaine en toute sécurité et rapidité.",
      image: retour.src ,
    },
  ];

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Découvrez tous les services de <span className="text-blue-600">BMD</span>
        </h2>
        <p className="text-gray-500 mb-12">Le meilleur partenaire pour vos livraisons e-commerce</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              {/* Image */}
              <div className="h-48 w-full rounded-t-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texte */}
              <div className="p-4 text-left">
                <div className="flex items-center space-x-2 mb-2">
                  {service.icon}
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
