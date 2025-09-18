import AboutMe from "./components/AboutMe";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PhotoSec from "./components/PhotoSec";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, black 0%, #020301 100%)",
        }}
      >
        <div className="bg-[#f8f8f3] w-full overflow-hidden">
          <Header />
        </div>
        <div className="bg-[#f8f8f3] flex justify-center items-center">
          <div className="$styles.boxWidth text-white">{/* <Hero /> */}</div>
        </div>
        <div className="bg-[#f8f8f3] justify-center items-center">
          <Business />
          <PhotoSec />
          <AboutMe />
          <Projects />

          {/*<Gallery />
              <Testimonials />
              <Pricing /> */}
        </div>
        <Footer />

        <div className="py-6 mt-4 md:mt-0 w-full flex justify-center text-white border-t border-grey-300/20 text-xs text-grey-100/80">
          © {new Date().getFullYear()}
          <span className="ml-1 hover:text-gray-500">
            <a href="http://artyomdev.com/">Artyom</a>
          </span>{" "}
          , Tüm Haklar Saklıdır.
        </div>
      </div>
    </>
  );
};

export default App;
