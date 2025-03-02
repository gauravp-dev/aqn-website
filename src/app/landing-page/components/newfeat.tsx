import React from "react";
import Image from "next/image";
function Newfeat() {
  return (
    <div className="h-[90%] flex flex-col justify-center items-center py-12">
      <h1 className="text-center text-2xl md:text-3xl font-semibold font-montserrat text-[#0B4D6B] mb-8">
        Meet Aquapro, Our end-to-end Ship
        <br />
        Management Platform.
      </h1>
      <div className="flex-1 flex justify-center items-center w-full h-[60%]">
        <Image
          src="/newfeat.svg"
          alt="My Logo"
          width={100}
          height={100}
          className="w-[90%] h-[70%]"
        />
      </div>
    </div>
  );
}
export default Newfeat;
