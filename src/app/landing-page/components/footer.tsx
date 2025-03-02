import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { CONTACT_DETAILS } from "@/utils/constants";

export default function Footer() {
  return (
    <div className="bg-white font-montserrat mx-4 lg:mx-12">
      {/* Wrapped Section with Common Blue Background */}
      <div className="bg-[#0C495D] text-white text-center rounded-t-md lg:rounded-t-[3rem] xl:rounded-t-[3rem]">
        {/* Top Section */}
        <div className="py-16 px-4 md:rounded-t-4xl lg:rounded-t-[3rem] xl:rounded-t-[3rem]">
          <h1 className="text-2xl md:text-3xl font-medium mb-4">
            Eliminate Downtimes. Maximize Asset Revenue. <br />
            Drive Sustainability.
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-4 mb-8">
            {[
              {
                text: "Comply with industry rules and regulations.",
              },
              {
                text: "Improve visibility and automate operations.",
              },
              {
                text: "Move towards net zero carbon shipping.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <BadgeCheck className="text-blue-400 w-5 h-5 flex-shrink-0 mt-1" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Buttons Section */}
          <div className="flex justify-center space-x-4">
            <Link href="#contactus" passHref>
              <Button className="bg-[#31C4F5] text-white py-2 px-6 hover:text-[#13627c] hover:bg-white rounded-40px">
                Get Started
              </Button>
            </Link>
            <Link href="#contactus" passHref>
              <Button className="border border-white text-white bg-[#0C495D] py-2 px-6 rounded-40px">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-[70%] h-[1px] bg-white mx-auto"></div>

        {/* Bottom Section - Centered Within the Divider Width */}
        <div className="max-w-[70%] mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              {/* Increased Logo Size */}
              <Image
                src="/aqn-website/logo.svg"
                alt="Aquanova logo"
                width={150}
                height={75}
                className="mb-2"
              />
              <p>© 2025 by Aquanova</p>
              <p>All Rights Reserved</p>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p>Contact Us</p>
              <p>{CONTACT_DETAILS.whatsappNumber}</p>
              <p>{CONTACT_DETAILS.email}</p>
              <div className="flex space-x-4 mt-2">
                {[
                  { href: "#", icon: "fab fa-twitter" },
                  { href: "#", icon: "fab fa-instagram" },
                  { href: "#", icon: "fab fa-linkedin" },
                  { href: "#", icon: "fas fa-envelope" },
                ].map((social, index) => (
                  <a key={index} href={social.href}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
