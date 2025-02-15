"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "AQUAPRO",
    description:
      "A Compressive platform to manage all the technical processes onboard",
    icon: "",
  },
  {
    title: "AQUAPRO",
    description:
      "A Compressive platform to manage all the technical processes onboard",
    icon: "",
  },
  {
    title: "AQUAPRO",
    description:
      "A Compressive platform to manage all the technical processes onboard",
    icon: "",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="absolute inset-x-0 top-0 z-50 bg-opacity-20">
      <nav className="mx-4 my-4 flex items-center justify-between rounded-md bg-[#818181] bg-opacity-45 backdrop-blur-sm px-4 py-3 lg:mx-8">
        <div className="flex items-center gap-4 h-[90%]">
          <span className="text-lg font-bold text-white mr-6 flex items-center gap-2">
            <Image
              src="/aqn-website/logo.svg"
              width={120}
              height={100}
              alt="Aquanova Logo"
              className="object-contain"
            />
          </span>
          <div className="hidden lg:flex items-center gap-4">
            {/* Product Button with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductHovered(true)}
              onMouseLeave={() => setIsProductHovered(false)}
            >
              <Link href="#product" passHref>
                <Button
                  variant="ghost"
                  className="text-white hover:text-blue-700/80"
                  onClick={() => setIsProductHovered((prev) => !prev)} // Toggle on click
                >
                  Product <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              {/* Product Dropdown */}
              {isProductHovered && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[350px] bg-white rounded-lg shadow-lg z-50">
                  {/* Triangle Effect */}
                  <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                  <div className="grid grid-cols-[120px_1fr] min-h-[180px] mb-1 ml-1 mt-1">
                    {/* Sidebar (Blue Background) */}
                    <div className="bg-[#13637D] text-white p-4 flex flex-col rounded-lg h-full">
                      <h3 className="text-md font-medium font-montserrat mb-auto">
                        Products <br /> Overview
                      </h3>
                      <Link
                        href="/learn-more"
                        className="text-xs hover:underline mt-2"
                      >
                        Learn more
                      </Link>
                    </div>

                    {/* Products List */}
                    <div className="p-3 w-60 pb-4">
                      {products.map((product, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="flex flex-col items-start gap-2 group mb-3 last:mb-0"
                        >
                          <div className="relative w-10 h-10">
                            <Image
                              src={product.icon || "/aqn-website/prod-logo.svg"}
                              alt=""
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xs font-semibold text-[#0891B2] font-montserrat leading-none group-hover:underline">
                              {product.title}
                            </h4>
                            <p className="text-xs leading-snug text-muted-foreground text-[#333333]">
                              {product.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

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
            <Link href="#about" passHref>
              <Button
                variant="ghost"
                className="text-white hover:text-blue-700/80"
              >
                About us
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button className="rounded-md bg-[#31C4F5] text-white hover:bg-[#8c95a3]/90 hover:text-[#13627c] hover:border-[#13627c] hover:border-2 hover:bg-white">
            Talk to Sales
          </Button>
          <div className="lg:hidden relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={toggleDropdown}
            >
              <Menu className="h-6 w-6" />
            </Button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <div className="flex flex-col items-center gap-4 p-4">
                  <Link href="#product" passHref>
                    <Button
                      variant="ghost"
                      className="flex items-center justify-center"
                    >
                      Product <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    Marine Insights <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    Careers
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    About us
                  </Button>
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
