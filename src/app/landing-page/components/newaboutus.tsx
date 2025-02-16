import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mudit Shekhawat",
      role: "Chief Consumer Officer",
      image: "/aqn-website/about-photo1.png",
      bgColor: "bg-cyan-400",
    },
    {
      name: "Sukhdeep Borkar",
      role: "Chief Product Officer",
      image: "/aqn-website/about-photo2.png",
      bgColor: "bg-cyan-800",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-white max-h-screen">
      {/* Hero Section */}
      <div className="bg-cyan-800 rounded-[40px] overflow-hidden mx-4 sm:mx-12 my-6 sm:my-8 lg:mx-48">
        <div className="grid md:grid-cols-1 items-center h-[40vh] border-b-2">
          <div className="p-4 sm:p-6 md:p-12 flex flex-col justify-center items-center text-left h-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              About us
            </h1>
            <p className="text-cyan-50 text-sm sm:text-lg leading-relaxed mb-2 max-w-2xl">
              At AquaNova, our team of senior marine engineers and technology leaders is devoted to tackling the unique
              & unmitigated challenges of the maritime industry. With our deep understanding of maritime demands, we
              leverage technology to craft transformative solutions for maritime operations.
            </p>
           
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`shadow-md overflow-hidden ${
                index === 0 ? "rounded-bl-[40px]" : "rounded-br-[40px]"
              }`}
            >
              {/* Top Section with Background Color and Image */}
              <div className={`${member.bgColor} flex justify-center items-center p-0`}>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="w-auto h-44"
                />
              </div>

              {/* Bottom Section with Name & Role */}
              <div
                className={`bg-white p-4 text-center ${
                  index === 0 ? "rounded-bl-[40px]" : "rounded-br-[40px]"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
