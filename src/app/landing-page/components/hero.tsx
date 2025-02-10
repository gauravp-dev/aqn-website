/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Navbar from "./navbarSection";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { useState, useEffect } from "react";
import "../../globals.css";

function hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }
  return (
    <>
      <div className="min-h-screen bg-[#ffffff] px-1 lg:px-12 xl:px-12 2xl:px-14 gap-10">
        <section className="relative min-h-[80vh] sm:mx-0 md:px-2 lg:px-2 xl:px-2 2xl:px-8 overflow-hidden">
          {/* Background Image Container */}
          <div
            className="absolute inset-0 z-0 rounded-b-sm md:rounded-b-2xl bg-custom"
            style={{
              backgroundImage: "url(/bg-img.webp)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0" />
          </div>

          {/* Include Navbar here */}
          <Navbar />

          {/* Content */}
          <div className="relative z-10 mx-4 pt-32 px-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-12 lg:px-8 xl:px-8 2xl:px-8">
            <div className="grid grid-cols-1 items-center gap-0 sm:mt-7 md:mt-10  lg:grid-cols-5">
              <div className="space-y-6 lg:col-span-3 ">
                <h1 className="font-montserrat text-4xl font-bold leading-tight text-white  md:text-5xl lg:text-5xl xl:test-5xl">
                  MANAGING A FLEET?
                  <br />
                  STREAMLINE OPERATIONS
                  <br />& ELIMINATE STRESS with <br />
                  <Link
                    href="/aquapro"
                    className="inline-flex items-center text-[#0891B2] hover:text-[#0891B2]/90"
                  >
                    <span className="underline text-blue-950">AQUAPRO</span>
                    <span className="ml-1">↗</span>
                  </Link>
                  AQUAPRO↗
                </h1>
                <Button
                  size="lg"
                  className=" w-full md:w-[40%] sm:[40%] px-8 py-6 text-xl text-white bg-[#31C4F5]   hover:text-[#13627c] hover:border-[#13627c] hover:border-2 hover:bg-white"
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[70vh]  mt-16 mb-8 px-4 lg:px-8 overflow-hidden flex flex-col lg:flex-col items-center">
          {/* Main Heading - Always on Top */}
          <h2 className="text-[#13627c] text-2xl md:text-3xl font-semibold font-montserrat leading-[1.2] text-center lg:text-left mb-6">
            <div className="flex flex-col items-center lg:items-start">
              <span>Enabling vessel management with AI</span>
              <span className="lg:pl-20">powered digital innovation</span>
            </div>
          </h2>

          {/* Content Wrapper */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-12">
            {/* Image - Between Heading & Text on Small, Left on Large */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div
                className="w-full max-w-[679px] h-auto aspect-[679/388] rounded-[54.42px] bg-cover bg-center"
                style={{
                  backgroundImage: "url(/section-2.png)",
                }}
              />
            </div>

            {/* Text - Below Image on Small, Right on Large */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center align-middle lg:text-left px-4 lg:px-8">
              <p className="text-[#13637d] text-xl font-noto leading-relaxed ">
                <span className="font-semibold italic ">Aquanova</span> stands
                at the forefront of providing advanced software solutions
                tailored specifically for the maritime sector. Emphasizing
                efficiency, safety, and sustainability, we empower maritime
                enterprises to excel in today’s ever-changing environment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default hero;
