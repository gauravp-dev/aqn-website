// In your Home component or wherever you need the navbar
"use client";
import { useLayoutEffect } from "react";
import ProductShowcase from "@/app/landing-page/components/product";
import Hero from "./landing-page/components/hero";

import Feature2 from "./landing-page/components/feature2";

import Contact from "./landing-page/components/contact";
import SecurityAndBackup from "./landing-page/components/securityAndBackup";
import Footer from "./landing-page/components/footer";
import Newfeat from "./landing-page/components/newfeat";

import AboutPage from "./landing-page/components/newaboutus";

export default function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on refresh
  }, []);
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Newfeat />
      <Feature2 />
      <AboutPage />
      <Contact />

      <SecurityAndBackup />
      <Footer />
    </>
  );
}
