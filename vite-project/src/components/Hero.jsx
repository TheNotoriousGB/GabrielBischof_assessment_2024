import heroImage from "../assets/img/hero-image.jpg";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-auto bg-white overflow-hidden py-8">
      <div className="relative w-full max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          <div className="w-full md:w-1/2 h-full flex items-center justify-center p-4 md:p-8">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Finden Sie Ihren perfekten Aufenthaltsort
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                ChiliHotels - Wo Ihr Traumaufenthalt Wirklichkeit wird.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-8 md:mt-0">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center p-6 bg-white">
        <div className="bg-white border-t border-gray-200 rounded-full shadow-lg flex items-center px-4 py-3 w-full max-w-7xl">
          <input
            type="text"
            placeholder="Suchen..."
            className="flex-grow px-4 py-2 border-none rounded-l-full focus:outline-none"
          />
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center"
            style={{ backgroundColor: "#C22A40" }}
          >
            <FaSearch className="text-xl mr-2" />
            <span className="text-xl">Suchen</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
