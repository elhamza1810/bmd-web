import Image from 'next/image';
import Logo from "@/assets/logo.png"
import Link from 'next/link';


import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Section logo et description */}
        <div>
          <Link href='/'>
          <Image src={Logo.src} alt="BMD Logo" width={80} height={40} />
          </Link>
          <p className="mt-4 text-sm">
            Service de livraison rapide et fiable pour tous vos besoins. Nous
            livrons n'importe où, n'importe quand.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
           <Link href="https://www.facebook.com/share/18iwy7v9g7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
             <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
           </Link>
           <Link href="https://www.instagram.com/bmd_ma?igsh=Ymo5NTh1Nm13bncx" target="_blank" rel="noopener noreferrer">
             <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
           </Link>
           <Link href="https://wa.me/212706077312" target="_blank" rel="noopener noreferrer">
             <FaWhatsapp className="hover:text-green-500 cursor-pointer transition" />
           </Link>
           <Link href="https://www.youtube.com/@blackmandelivery" target="_blank" rel="noopener noreferrer">
             <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
           </Link>
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">→ Accueil</a></li>
            <li><a href="#about">→ About BMD</a></li>
            <li><a href="#services">→ Services</a></li>
            <li><a href="#temoignages">→ Témoignages</a></li>
            <li><a href="#contact">→ Contact</a></li>
          </ul>
        </div>

        {/* Nos services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Nos Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">→ Ramassage</a></li>
            <li><a href="#">→ Livraison</a></li>
            <li><a href="#">→ Suivi</a></li>
            <li><a href="#">→ Retour du fond</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contactez-nous</h3>
          <ul className="space-y-3 text-sm">
            <li>📞 +212 0706077312</li>
            <li>📧 bmdcontact1@gmail.ma</li>
            <li>📍 Hay Tissir</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500">
        © 2025 BMD. Tous droits réservés.
      </div>
    </footer>
  );
}
