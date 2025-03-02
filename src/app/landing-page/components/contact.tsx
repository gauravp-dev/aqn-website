/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Ensure this runs on the client side

import Head from "next/head";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { CONTACT_DETAILS } from "@/utils/constants";
export default function Contact() {

  const whatsappNumber = CONTACT_DETAILS.whatsappNumber;
  const email = CONTACT_DETAILS.email;


  return (
    <div id="contactus" className="relative flex flex-col items-center justify-center min-h-[60vh] bg-[url('/aqn-website/bg-product-n.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <Head>
        <title>Contact Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-white mt-4 md:ml-2 md:mr-2 bg-opacity-90 backdrop-blur-lg rounded-[40px] shadow-2xl p-8 max-w-7xl w-full">
        <h2 className="text-center text-2xl md:text-3xl font-semibold font-montserrat text-[#0B4D6B] mb-12">
          Get in touch with us.
          <br />
          {"We're here to assist you."}
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-teal-800">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
             
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-teal-500 outline-none bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-teal-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
           
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-teal-500 outline-none bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-teal-800">
                Phone Number (optional)
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
       
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-teal-500 outline-none bg-white"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-teal-800">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message here..."
           
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-teal-500 outline-none bg-white"
              required
            ></textarea>
          </div>
          <div className="text-center">
          <button
  type="submit"
  className="bg-[#31C4F5] text-white py-3 px-6 rounded-full hover:bg-teal-600 disabled:bg-gray-400"
>
  Leave a Message
</button>
       </div>
        </form>

      
     {/* Contact via WhatsApp & Email */}
     <div className="flex items-center justify-center min-h-40 w-full">
  <div className="bg-white p-6 sm:p-8 w-full text-center mt-2">
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24">
      
      {/* WhatsApp Section - Left Side */}
      <div className="flex items-center gap-4">
      <a
  href={`whatsapp://send?phone=${whatsappNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-500 text-4xl hover:scale-110 transition"
>
  <FaWhatsapp />
</a>

        <span className="text-lg font-medium text-gray-800 break-all">{whatsappNumber}</span>
      </div>

      {/* Divider (Optional) */}
      <div className="hidden md:block w-px h-8 bg-gray-300"></div>

      {/* Gmail Section - Right Side */}
      <div className="flex items-center gap-4">
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 text-4xl hover:scale-110 transition"
        >
          <FaEnvelope />
        </a>
        <span className="text-lg font-medium text-gray-800 break-all">{email}</span>
      </div>

    </div>
  </div>
</div>

      </div>
    </div>
  );
}
