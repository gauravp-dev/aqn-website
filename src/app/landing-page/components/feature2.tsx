import Head from 'next/head';
import React from 'react';

export default function Feature2() {
  return (
    <div className="relative flex items-center justify-center min-h-[60vh] bg-[url('/bg-product-n.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <Head>
        <title>AI-powered Ship Management</title>
        <meta name="description" content="With AI-powered automation at the core of your ship management." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className="relative text-center w-full max-w-7xl mx-4">
        <h1 className="text-2xl md:text-3xl font-semibold font-montserrat text-[#0B4D6B] mb-12">
          With AI-powered automation at the  
          <br />
          core of your ship management.
        </h1>

        <div className="bg-white bg-opacity-90 shadow-lg rounded-[40px] p-6 md:p-12 flex flex-col md:flex-row justify-around items-center md:items-stretch space-y-6 md:space-y-0 md:space-x-6 border border-blue-900">
          <div className="flex-1 text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#0B4D6B]">85%</p>
            <p className="text-[#0B4D6B] mt-2">Reduction in inspection work</p>
          </div>
          <div className="hidden md:block border-l border-blue-700"></div>
          <div className="text-[#0B4D6B] flex-1 text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#0B4D6B]">40%</p>
            <p className="mt-2">Saved on maintenance, breakdown, spare parts costs</p>
          </div>
          <div className="hidden md:block border-l border-blue-700"></div>
          <div className="flex-1 text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#0B4D6B]">15X</p>
            <p className="text-[#0B4D6B] mt-2">Reduced time spent on all kinds of reporting</p>
          </div>
        </div>
      </main>
    </div>
  );
}
