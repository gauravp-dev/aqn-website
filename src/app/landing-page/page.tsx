// In your Home component or wherever you need the navbar
"use client";
import { useLayoutEffect } from "react";
import ProductShowcase from "@/app/landing-page/components/product";
import Hero from "./components/hero";
import "../globals.css";

import Feature2 from "./components/feature2";

import Contact from "./components/contact";
import SecurityAndBackup from "./components/securityAndBackup";
import Footer from "./components/footer";
import Newfeat from "./components/newfeat";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AboutPage from "./components/newaboutus";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/landing-page");
  }, [router]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on refresh
  }, []);
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Newfeat />
      <Feature2 />
      <AboutPage/>
      <Contact />
      <SecurityAndBackup />
      <Footer />
      
    </>
  );
}
