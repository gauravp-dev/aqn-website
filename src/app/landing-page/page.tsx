// In your Home component or wherever you need the navbar
"use client";
import ProductShowcase from "@/app/landing-page/components/product";
import Hero from "./components/hero";
import "../globals.css";
import AquaproFeatures from "./components/features";
import Feature2 from "./components/feature2";
import About from "./components/about";
import Contact from "./components/contact";
import SecurityAndBackup from "./components/securityAndBackup";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <AquaproFeatures/>
      <Feature2/>
      <About/>
      <Contact/>
      <SecurityAndBackup/>
      <Footer/>
      
   
    </>
  );
}
