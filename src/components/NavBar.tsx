'use client';

import Image from 'next/image';
import Logo from "@/assets/logo.png"
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';



export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo.src} alt="Logo BMD" width={80} height={40} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="About">About BMD</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#temoignages">Témoignages</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Mentions légales button */}
        <Link href="Legales">
          <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-semibold">
            Mentions légales
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-3 text-gray-800 font-medium">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="About">About BMD</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#temoignages">Témoignages</Link></li>
            <li><Link href="#contact">Contact</Link></li>
            <li><Link href="Legales">Mentions légales</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}