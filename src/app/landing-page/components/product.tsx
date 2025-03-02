import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "AQUAPRO",
    desc: "Aquapro",
    description:
      "A Compressive platform to manage all the technical processes onboard",
    link: "#",
    logoUrl: "/prod-logo.svg",
  },
  {
    title: "AQUASHIFT",
    desc: "Aquashift",
    description:
      "A Platform to manage work and rest hours of the onboard staff in compliance with MLC regulations",
    link: "#",
    logoUrl: "/prod-logo.svg",
  },
  {
    title: "AQUACREW",
    desc: "Aquacrew",
    description: "A platform for end-to-end crew management",
    link: "#",
    logoUrl: "/prod-logo.svg",
  },
];

export default function ProductShowcase() {
  return (
    <div
      id="product"
      className="min-h-[50vh] w-full bg-cover bg-center bg-no-repeat py-2 sm:py-8 md:py-8 px-4"
      style={{
        backgroundImage: `url('/bg-product-n.png')`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0B4D6B] mb-12">
          Explore our product line ⇣
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="rounded-[40px] bg-white/95 backdrop-blur-sm border-spacing-2 shadow-2xl flex flex-col"
            >
              {/* Background */}
              <div className="relative w-full" style={{ height: "180px" }}>
                <Image
                  src="/re.png"
                  alt="Background"
                  width={500}
                  height={100}
                  className="w-full h-100 object-cover rounded-t-[40px]"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="mt-14 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Image
                      src={product.logoUrl || "/prod-logo.svg"}
                      alt={`${product.title} logo`}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <CardContent className="flex flex-col flex-grow p-10 text-center">
                <h2 className="text-2xl font-bold font-noto text-[#13627c] mb-4">
                  {product.title}
                </h2>

                <p className="text-[#13627c] text-lg font-noto mb-6 flex-grow">
                  {product.description}
                </p>
              </CardContent>

              <div className="text-center mb-4">
                <Link
                  href={product.link}
                  className="inline-flex mb-6 items-center justify-center w-24 h-14 rounded-lg  border-2 border-[#13627c] text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors group"
                >
                  <ArrowRight className="w-7 h-7" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
