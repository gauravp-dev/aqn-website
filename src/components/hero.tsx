/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Navbar from "./navbarSection";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { useState, useEffect } from "react";
import "../app/globals.css";

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
      <div className="min-h-screen bg-[#f8f8f8] px-1 lg:px-12 xl:px-12 2xl:px-14 gap-10">
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
                  className="bg-[#ffffff] w-full md:w-[40%] sm:[40%] px-8 py-6 text-xl text-[#3782f4]  hover:bg-[#8c95a3]/90 hover:text-black"
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default hero;
