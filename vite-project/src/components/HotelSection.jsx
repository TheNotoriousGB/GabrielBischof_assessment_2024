import { useState, useEffect } from "react";
import axios from "axios";

const HotelSection = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.intern-assessment.chili.ch/Hotel/GetHotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error(
          "Es gab ein Problem beim Abrufen der Hotel-Daten:",
          error
        );
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Unsere beliebtesten Hotels</h2>
        <p className="text-gray-700 mb-6">
            Erleben Sie Spitzenklasse</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-red-600 mb-2">
                {hotel.stadt} {hotel.postleitzahl} - {hotel.land}
              </div>
              <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
              <p className="text-gray-700  mt-2">
                Ab CHF {hotel.preis} pro Nacht
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSection;
