

import Contact from "@/app/Contact/contact"
import Navbar from "@/components/NavBar";
import HeroSection from "@/components/Herosection";
import HeroSection2 from "@/components/HeroSection2";
import AboutSection from "./About/About";
import Footer from '@/components/Footer';
import Services from "./Services/services";
import Temoignages from "@/components/Temoignages";
import Livraison from "./Services/livraison";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection2/>
    <section id="apropos">
       <AboutSection/>
    </section>
    <section id="services">
       <Services/>
       <Livraison/>
    </section>
    <section id="temoignages">
       <Temoignages/>
    </section>
    <section id="contact">
      <Contact/>
      </section>

    
    <Footer/>
    </>
  );
}
