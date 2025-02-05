// In your Home component or wherever you need the navbar
"use client";
import ProductShowcase from "@/components/product";
import Hero from "../../components/hero";
import "../globals.css";
export default function Home() {
  return (
    <>
    
      <Hero />
      <ProductShowcase/>

    </>
  );
}
