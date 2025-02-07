"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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
            {/* Link to Product Section */}
            <Link href="#product" passHref>
              <Button variant="ghost" className="text-white hover:text-blue-700/80">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </Link>

            <Button variant="ghost" className="text-white hover:text-blue-700/80">
              Marine Insights <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="text-white hover:text-blue-700/80">
              Careers
            </Button>
            <Link href="#about" passHref>
            <Button variant="ghost" className="text-white hover:text-blue-700/80">
              About us
            </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button className="rounded-md bg-white text-[#3782f4] hover:bg-[#8c95a3]/90 hover:text-black">
            Talk to Sales
          </Button>
          <div className="lg:hidden relative">
            <Button variant="ghost" size="icon" className="text-white" onClick={toggleDropdown}>
              <Menu className="h-6 w-6" />
            </Button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <div className="flex flex-col items-center gap-4 p-4">
                  <Link href="#product" passHref>
                    <Button variant="ghost" className="flex items-center justify-center">
                      Product <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="ghost" className="flex items-center justify-center">
                    Marine Insights <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="flex items-center justify-center">Careers</Button>
                  <Button variant="ghost" className="flex items-center justify-center">About us</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;