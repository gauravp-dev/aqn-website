import React from "react";
import Image from "next/image";

function Newfeat() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl md:text-3xl font-semibold font-montserrat text-[#0B4D6B] mb-8">
        Meet Aquapro, Our end-to-end ship
        <br />
        management platform.
      </h1>

      <div className="flex-1 flex justify-center items-center w-full">
        <Image 
          src="newfeat.svg" 
          alt="My Logo" 
          width={100} 
          height={100} 
          className="w-[90%] h-auto"
        />
      </div>
    </div>
  );
}

export default Newfeat;
