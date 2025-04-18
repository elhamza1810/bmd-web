"use client";
import { useState } from 'react';

const regions = [
  "Toutes les régions",
  "Béni Mellal-Khénifra",
  "Casablanca-Settat",
  "Fès-Meknès",
  "Guelmim-Oued Noun",
  "Laâyoune-Sakia El Hamra",
  "Marrakech-Safi",
  "Oued Ed-Dahab",
];

const villesData = [
  { ville: "Casablanca", region: "Casablanca-Settat", tarif: "18 DH", delai: "3H" },
  { ville: "Berrechid", region: "Casablanca-Settat", tarif: "35 DH", delai: "3H" },
  { ville: "Settat", region: "Casablanca-Settat", tarif: "35 DH", delai: "3H" },
  { ville: "Droit", region: "Casablanca-Settat", tarif: "35 DH", delai: "3H" },
  { ville: "Ain Harouda", region: "Casablanca-Settat", tarif: "35 DH", delai: "3H" },
  { ville: "Mohamadia", region: "Casablanca-Settat", tarif: "35 DH", delai: "3H" },
  { ville: "Bensliman", region: "Casablanca-Settat", tarif: "35 DH", delai: "3H" },
  { ville: "Dar Bouazza", region: "Casablanca-Settat", tarif: "35 DH", delai: "3H" },
  // Tu peux ajouter plus de villes ici
];

export default function Livraison() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Toutes les régions");

  const filteredVilles = villesData.filter((v) => {
    const matchRegion = selectedRegion === "Toutes les régions" || v.region === selectedRegion;
    const matchSearch = v.ville.toLowerCase().includes(searchTerm.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <div className="pt-24">
       {/* Hero */}
       <div className="bg-gradient-to-r from-blue-600 to-green-400 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Livraison Express Au Maroc
            </h1>
            <p className="text-lg mb-6">
              Service de livraison professionnel et fiable dans plus de 60 villes<br/>
               à travers le Royaume
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-white/10 px-6 py-3 rounded-lg flex items-center gap-2">
                🚚 <span className="font-bold">18 DH</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg flex items-center gap-2">
                ⏰ <span className="font-bold">3H - 24H</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg flex items-center gap-2">
                🆓 <span className="font-bold">Gratuit</span>
              </div>
            </div>
          </div>

          {/* Recherche */}
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-md w-full md:w-80">
            <h2 className="text-xl font-semibold mb-3">Trouvez votre ville</h2>
            <input
              type="text"
              placeholder="Casablanca, Rabat, Marrakech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded bg-white/10 text-gray-300 placeholder-gray-200"
            />
            <p className="text-xs mt-2">Service disponible dans plus de 60 villes à travers le Maroc</p>
          </div>
        </div>
      </div>

      {/* Code Couleur */}
      <div className="bg-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <div className="text-gray-600 font-medium">Code couleur des délais :</div>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
              3H - Express
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
              12H - Standard
            </span>
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
              24H - Économique
            </span>
          </div>
        </div>
      </div>

      {/* Tarifs par région */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Tarifs par Région</h2>

          {/* Filtres régions */}
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-6">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                  selectedRegion === region
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <p className="text-gray-500 mt-4">{filteredVilles.length} ville(s) trouvée(s)</p>

          {/* Cartes villes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredVilles.map((ville, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-1">{ville.ville}</h3>
                <p className="text-gray-500 text-sm mb-4">{ville.region}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    🚚 <span className="font-bold">{ville.tarif}</span>
                  </div>
                  <div className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                    {ville.delai}
                  </div>
                </div>
                <div className="mt-2 text-green-600 text-xs font-bold">
                  Gratuit
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
