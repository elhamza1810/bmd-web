import { FaAward, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function Statistiques() {
  const stats = [
    {
      icon: <FaAward className="text-orange-400 text-3xl" />,
      value: "150+",
      label: "Produits Gagnants",
    },
    {
      icon: <FaClock className="text-blue-400 text-3xl" />,
      value: "5+",
      label: "Années D'expérience",
    },
    {
      icon: <FaShieldAlt className="text-green-400 text-3xl" />,
      value: "65+",
      label: "Colis Sécurisé",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#1b1b4d] to-[#3a0ca3] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-300">
          Statistiques Impressionnantes
        </h2>
        <p className="text-gray-300 mb-12">
          Des chiffres qui témoignent de notre expertise et de notre engagement envers l'excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-color#0f0f27 bg-opacity-20 rounded-lg p-8 flex flex-col items-center shadow-lg"
            >
              <div className="mb-4">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <div className="w-8 h-1 bg-blue-400 my-3 rounded-full" />
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
