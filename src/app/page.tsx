import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] px-1">
      <section className="relative min-h-[80vh] sm:mx-0 md:mx-8 lg:mx-8 xl:mx-8 overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 rounded-b-md md:rounded-b-2xl"
          style={{
            backgroundImage: "url(/bg-img.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0" />
        </div>

        {/* Navigation */}
        <div className="absolute inset-x-0 top-0 z-50">
          <nav className="mx-4 my-4 flex items-center justify-between rounded-md bg-[#818181]/90 backdrop-blur-sm px-4 py-3 lg:mx-8">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-white mr-6 flex items-center gap-2">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="Aquanova Logo"
                  className="object-contain"
                />
              </span>
              <div className="hidden lg:flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="text-white hover:text-blue-700/80"
                >
                  Product <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-blue-700/80"
                >
                  Marine Insights <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-blue-700/80"
                >
                  Careers
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:text-blue-700/80"
                >
                  About us
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="rounded-sm bg-white text-[#0A192F] hover:bg-blue-700/90">
                Talk to Sales
              </Button>
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="flex flex-col gap-4 pt-10">
                      <Button variant="ghost">
                        Product <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                      <Button variant="ghost">
                        Marine Insights <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                      <Button variant="ghost">Careers</Button>
                      <Button variant="ghost">About us</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 lg:px-8">
          <div className="grid items-center gap-12 sm:mt-7 md:mt-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-5xl">
                MANAGING A FLEET?
                <br />
                STREAMLINE OPERATIONS
                <br />& ELIMINATE STRESS with{" "}
                <Link
                  href="/aquapro"
                  className="inline-flex items-center text-[#0891B2] hover:text-[#0891B2]/90"
                >
                  AQUAPRO
                  <span className="ml-1 inline-block rotate-45">↗</span>
                </Link>
              </h1>
              <Button
                size="lg"
                className="bg-[#0891B2] px-8 py-6 text-lg text-white hover:bg-[#0891B2]/90"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
