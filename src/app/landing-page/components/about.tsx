import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <div  id ="about"
     className="relative bg-white flex items-center justify-center min-h-screen px-2 overflow-hidden py-4">
      <Head>
        <title>About Us</title>
      </Head> 

      {/* Left Image - Touching Left Boundary (Hidden on Small Screens) */}
      <div className="absolute top-10 left-0 h-auto w-45 hidden md:block">
        <Image
          src="/marine-engineer.png"
          alt="Marine engineer working on control panel"
          className="w-full h-auto"
          width={150}
          height={200}
        />
      </div>

      {/* Right Image - Touching Right Boundary (Hidden on Small Screens) */}
      <div className="absolute bottom-10 right-0 h-auto w-50 hidden md:block">
        <Image
          src="/marine-engineer2.png"
          alt="Marine engineer standing on a ship deck"
          className="w-full h-auto"
          width={150}
          height={200}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-4xl text-center mx-auto p-16 z-10">
        <h2 className="text-4xl font-bold text-[#0B4D6B] mb-4">About us</h2>
        <p className=" mb-4 lg:text-xl font-montserrat text-[#0B4D6B]">
          At AquaNova, our team of senior marine engineers and technology leaders is devoted to tackling the unique &amp; unmitigated challenges of the maritime industry. With our deep understanding of maritime demands, we leverage technology to craft transformative solutions for maritime operations.
        </p>
        <p className="font-montserrat lg:text-xl text-[#0B4D6B] mb-6">
          Our ultimate mission is to drive sustainability in the maritime sector through green technology for unparalleled efficiency and precision. We're committed to creating innovative tools that boost operational performance while reducing environmental impact.
        </p>

        {/* Button */}
        <div className="relative inline-block">
          <button className="bg-[#31C4F5] text-white py-2 px-6 rounded-full hover:bg-teal-600">
            Leave a Message
          </button>
        </div>
      </div>
    </div>
  );
}
