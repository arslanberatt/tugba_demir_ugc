import { Phone, Search } from "lucide-react";
import headerImg from "../assets/header.jpg";

export default function Header({
  title = "Merhaba Ben Tuğba Demir",
  showSearch = true,
  heightClass = "h-[65vh] md:h-[80vh]",
}) {
  return (
    <header className={`relative w-full ${heightClass} overflow-hidden`}>
      <img
        src={headerImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 " />
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <h1 className="text-white text-center text-3xl md:text-5xl font-semibold leading-tight drop-shadow">
          {title}
        </h1>
      </div>
      {showSearch && (
        <button
          className="absolute right-4 top-4 z-10 p-2 rounded-full backdrop-blur transition"
          aria-label="Ara"
        >
          <Phone className="w-5 h-5 text-white" />
        </button>
      )}
    </header>
  );
}
