import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const whatsappNumber = "+919901725805"; // Change to your WhatsApp number
  const email = "admin@aquanovamarine.com"; // Change to your Gmail ID

  return (
    <div id = "contactus" className="flex items-center justify-center min-h-40 bg-gray-100 p-4">
      <div className="bg-white shadow-lg p-6 sm:p-8 ml-10 mr-10 rounded-[40px] w-full text-center">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

        <div className="flex flex-col gap-6">
          {/* WhatsApp Section */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-4xl hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
            <span className="text-lg font-medium text-gray-800 break-all">{whatsappNumber}</span>
          </div>

          {/* Gmail Section */}
          <div className="flex items-center justify-center gap-4">
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
  );
};

export default ContactPage;
