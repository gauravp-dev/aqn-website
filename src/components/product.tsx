import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    title: "AQUAPRO",
    desc: "Aquapro",
    description: "A Compressive platform to manage all the technical processes onboard",
    link: "#",
    logoUrl: "/prod-logo.svg"
  },
  {
    title: "AQUASHIFT",
    desc: "Aquashift",
    description: "A Platform to manage work and rest hours of the onboard staff in compliance with MLC regulations",
    link: "#",
    logoUrl: "/prod-logo.svg"
  },
  {
    title: "AQUACREW",
    desc: "Aquacrew",
    description: "A platform for end-to-end crew management",
    link: "#",
    logoUrl: "/prod-logo.svg"
  }
]

export default function ProductShowcase() {
  return (
    <div id="product"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{
        backgroundImage: `url('bg-product-n.png')`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#0B4D6B] mb-12">
          Explore our product line ⇣
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-spacing-2 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-28 h-24 mb-6 relative">
                  <Image
                    src={product.logoUrl || "/prod-logo.svg"}
                    alt={`${product.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h2 className="text-xl font-bold font-noto text-[#333333] mb-6">
                  {product.title}
                </h2>
                
                <p className="text-[#333333] font-noto mb-16">
                  {product.description}
                </p>
                
                <Link 
                  href={product.link}
                  className="lowecase text-[#0B4D6B] font-noto font-semibold hover:text-[#164371]/80 inline-flex items-center gap-2 transition-colors"
                >
                  Check out {product.desc} now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}