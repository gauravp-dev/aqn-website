/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Ensure this runs on the client side
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
    
      const response = await fetch("http://localhost:3000/aqn-website/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      

      const result = await response.json();
      if (response.ok) {
        setSuccess("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err: any) {
      setError(err.message || "Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-[60vh] bg-[url('/aqn-website/bg-product-n.png')] bg-cover bg-center bg-no-repeat">
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-teal-800">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-teal-500 outline-none bg-white"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#31C4F5] text-white py-3 px-6 rounded-full hover:bg-teal-600 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Sending..." : "Leave a Message"}
            </button>
          </div>
          {success && <p className="text-green-600 text-center">{success}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
