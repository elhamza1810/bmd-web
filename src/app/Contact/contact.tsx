'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Contactez-Nous</h2>
        <p className="text-center text-gray-500 mb-12">
          Des questions ? Besoin d'aide ? Notre équipe est là pour vous assister.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Informations de Contact */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Informations de Contact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 shadow">
                <FaMapMarkerAlt className="text-blue-500 text-xl mb-2" />
                <h4 className="font-semibold">Notre Adresse</h4>
                <p className="text-sm text-gray-600">Hay Tissir</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow">
                <FaPhoneAlt className="text-orange-500 text-xl mb-2" />
                <h4 className="font-semibold">Téléphone</h4>
                <p className="text-sm text-gray-600">(+212) 0706077312</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow">
                <FaEnvelope className="text-purple-500 text-xl mb-2" />
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm text-gray-600">bmdcontact1@gmail.ma</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow">
                <FaClock className="text-green-500 text-xl mb-2" />
                <h4 className="font-semibold">Heures d'Ouverture</h4>
                <p className="text-sm text-gray-600">24/7 - Nous livrons à toute heure</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Suivez-nous</h4>
              <div className="flex space-x-4 text-lg">
                <FaFacebookF className="text-blue-600" />
                <FaWhatsapp className="text-green-500" />
                <FaInstagram className="text-pink-500" />
              </div>
            </div>
          </div>

          {/* Formulaire d'inscription */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Inscription</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Boutique / Store</label>
                <input type="text" placeholder="Nom de votre boutique"
                  className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Responsable</label>
                <input type="text" placeholder="Nom du responsable"
                  className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Téléphone</label>
                  <input type="text" placeholder="Numéro de téléphone"
                    className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" placeholder="Email du responsable"
                    className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Mot de passe</label>
                  <input type="password" placeholder="Créez un mot de passe"
                    className="w-full border border-gray-300 rounded px-4 py-2" />
                  <p className="text-xs text-gray-500 mt-1">
                    Le mot de passe doit contenir au moins 6 caractères
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Confirmer mot de passe</label>
                  <input type="password" placeholder="Confirmez le mot de passe"
                    className="w-full border border-gray-300 rounded px-4 py-2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Ville</label>
                <input type="text" placeholder="Entrez votre ville"
                  className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded font-semibold"
              >
                Enregistrer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
