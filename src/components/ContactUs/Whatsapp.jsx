import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/message/JZFFBA3GFAFXH1" // replace with your business WhatsApp number
      className="fixed bottom-8 right-12 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
