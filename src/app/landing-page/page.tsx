// In your Home component or wherever you need the navbar
"use client";
import ProductShowcase from "@/app/landing-page/components/product";
import Hero from "./components/hero";
import "../globals.css";

import Feature2 from "./components/feature2";
import About from "./components/about";
import Contact from "./components/contact";
import SecurityAndBackup from "./components/securityAndBackup";
import Footer from "./components/footer";
import Newfeat from "./components/newfeat";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Newfeat />
      <Feature2 />
      <About />
      <Contact />
      <SecurityAndBackup />
      <Footer />
    </>
  );
}
