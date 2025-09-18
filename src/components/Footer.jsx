import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-8">
      <section className="max-w-7xl  flex justify-between items-center mx-auto">
        <div>
          <h2 className="font-serif text-3xl mb-3">İletişime geçin</h2>
          <p className="text-gray-700 mb-2">tugbademir340@icloud.com</p>
          <p className="font-serif text-lg mb-1">Küçükçekmece / İstanbul</p>
        </div>

        <div className="flex space-x-6 text-gray-800">
          <a
            href="https://www.tiktok.com/@tugmafee?_t=ZS-8zpldlynbvE&_r=1"
            aria-label="TikTok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaTiktok className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/tugmaafee?igsh=b2NicWQ2YjZjeTZy&utm_source=qr"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
