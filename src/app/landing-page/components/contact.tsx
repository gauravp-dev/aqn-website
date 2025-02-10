import Head from "next/head";

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-[60vh] bg-[url('/product-bg-n.png')] bg-cover bg-center bg-no-repeat">
      {/* Background Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <Head>
        <title>Contact Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-[40px] shadow-lg p-8 max-w-7xl w-full">
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
                className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-teal-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-teal-800">
                Phone Number (optional)
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent"
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
              className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 bg-transparent"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#31C4F5] text-white py-2 px-6 rounded-full hover:bg-teal-600"
            >
              Leave a Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
