import Image from "next/image";
import {
  Settings,
  Box,
  Anchor,
  BarChart3,
  Shield,
  FileCheck,
  LineChart,
  Gauge,
} from "lucide-react";
import SvgComponent from "./svgComponent";

const features = [
  {
    title: "Work Order Management",
    icon: Settings,
    side: "left",
  },
  {
    title: "Spare parts management",
    icon: Box,
    side: "left",
  },
  {
    title: "Vessel and Voyage Optimisation",
    icon: Anchor,
    side: "left",
  },
  {
    title: "QHSE",
    icon: Shield,
    side: "left",
  },
  {
    title: "Procurement",
    icon: FileCheck,
    side: "right",
  },
  {
    title: "Compliance and Certifications",
    icon: BarChart3,
    side: "right",
  },
  {
    title: "Vessel reporting and Smart Ships",
    icon: LineChart,
    side: "right",
  },
  {
    title: "Emissions and Energy Efficiency",
    icon: Gauge,
    side: "right",
  },
];

export default function AquaproFeatures() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-semibold font-montserrat text-[#0B4D6B] mb-12">
          Meet Aquapro, Our end-to-end ship
          <br />
          management platform.
        </h1>

        <div className="relative min-h-72 w-full mx-auto rounded-[40px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center bg-[#13637D]" />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/Rectangle.svg" //
              alt="Overlay Image"
              layout="fill"
              className="object-contain"
            />
          </div>

          <div className="relative z-10 p-8 md:p-16 h-90">
            <div className="relative max-w-6xl mx-auto">
              {/* Large Circle Background */}
              <div
                className="absolute w-96 h-96 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  backgroundImage: `url('/bg-img.webp')`,
                  backgroundSize: "fill",
                  backgroundPosition: "center",
                }}
              />

              {/* Features */}
              <div className="relative z-20 grid grid-cols-1 md:grid-cols-3  items-center">
                {/* Left-Side Features */}
                <div className="space-y-8">
                  {features
                    .filter((f) => f.side === "left")
                    .map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-end gap-4 relative"
                      >
                        {/* Feature Box */}
                        <div className="bg-white rounded-full p-4 flex items-center gap-3 shadow-lg w-[280px] min-h-[50px] relative">
                          <feature.icon className="w-5 h-5 text-[#13637D] flex-shrink-0" />
                          <span className="text-[#13637D] font-medium text-sm">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Center Logo */}
                <div className="flex justify-center items-center relative">
                  <SvgComponent/>
                </div>

                {/* Right-Side Features */}
                <div className="space-y-8">
                  {features
                    .filter((f) => f.side === "right")
                    .map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4  relative"
                      >
                        {/* Feature Box */}
                        <div className="bg-white rounded-full p-4 flex items-center gap-3 shadow-lg w-[280px] min-h-[50px] relative">
                          <feature.icon className="w-5 h-5 text-[#13637D] flex-shrink-0" />
                          <span className="text-[#13637D] font-medium text-sm">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
