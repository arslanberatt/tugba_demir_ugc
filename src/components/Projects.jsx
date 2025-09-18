import phone1 from "../assets/image0.png";
import phone2 from "../assets/image1.png";
import phone3 from "../assets/image2.png";

const Projects = () => {
  return (
    <section className="max-w-6xl text-black mx-auto py-12 px-6">
      {/* Başlık */}
      <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-10 md:text-start text-center uppercase ">
        İşbirliklerim
      </h2>

      {/* Görseller ve Butonlar */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
        {/* 1. Görsel - Button */}
        <div className="flex flex-col items-center group">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200 transition-transform duration-300 group-hover:scale-101 group-hover:border-gray-400">
            <img
              src={phone1}
              alt="Brand 1"
              className="w-64 h-96 object-cover"
              loading="lazy"
            />
          </div>
          <button className="mt-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 font-medium rounded-full px-8 py-2 hover:from-gray-300 hover:to-gray-400 transition">
            GİYİM
          </button>
        </div>

        {/* 2. Görsel - Button */}
        <div className="flex flex-col items-center group">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200 transition-transform duration-300 group-hover:scale-101 group-hover:border-gray-400">
            <img
              src={phone2}
              alt="Brand 2"
              className="w-64 h-96 object-cover"
              loading="lazy"
            />
          </div>
          <button className="mt-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 font-medium rounded-full px-8 py-2 hover:from-gray-300 hover:to-gray-400 transition">
            ÇOCUK
          </button>
        </div>

        {/* 3. Görsel - Button */}
        <div className="flex flex-col items-center group">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-200 transition-transform duration-300 group-hover:scale-101 group-hover:border-gray-400">
            <img
              src={phone3}
              alt="Brand 3"
              className="w-64 h-96 object-cover"
              loading="lazy"
            />
          </div>
          <button className="mt-4 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 font-medium rounded-full px-8 py-2 hover:from-gray-300 hover:to-gray-400 transition">
            ÜRÜN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
