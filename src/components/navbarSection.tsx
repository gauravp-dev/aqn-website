// components/navbar.tsx
"use client";

// components/navbar.tsx

import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-50 bg-opacity-20">
      <nav className="mx-4 my-4 flex items-center justify-between rounded-md bg-[#818181] bg-opacity-45 backdrop-blur-sm px-4 py-3 lg:mx-8">
        <div className="flex items-center gap-4 h-[90%]">
          <span className="text-lg font-bold text-white mr-6 flex items-center gap-2">
            <Image
              src="/logo.svg"
              width={120}
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
          <Button className="rounded-md bg-white text-[#3782f4] hover:bg-[#8c95a3]/90 hover:text-black">
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
  );
};

export default Navbar;
