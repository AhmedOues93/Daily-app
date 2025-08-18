import React, { useState, useEffect } from "react";

const Weather = () => {
  
  const [city, setCity] = useState("Berlin");

  // State to store fetched weather data
  const [wetter, setWetter] = useState(null);


  const [error, setError] = useState("");

  // Function to fetch weather
  const fetchWeather = async (cityName) => {
    try {
      
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=99e8584a75b777f0a270616466d9eba9&units=metric`;

      
      const response = await fetch(apiUrl);

      
      const data = await response.json();

      // If API returns an error 
      if (data.cod !== 200) {
        setError(data.message || "City not found");
        setWetter(null); 
      } else {
        setWetter(data); 
        setError(""); 
      }
    } catch (err) {
 
      setError("Error fetching weather");
      setWetter(null);
      console.error(err);
    }
  };

  // Fetch weather for Berlin when the component first loads
  useEffect(() => {
    fetchWeather("Berlin");
  }, []);

  // Function to handle search button click
  const onSubmit = () => fetchWeather(city);

  return (
    <div className= "w-[200px] h-[100px] ">
      
      {/* Search input + button */}
      <div className="mb-5 flex items-center gap-2">
        <input
          type="text"
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          onKeyDown={(e) => e.key === "Enter" && onSubmit()} 
          placeholder="Enter city"
          className="px-3 py-2 rounded-lg border border-white/40 bg-white/80 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60"
        />
        <button
          onClick={onSubmit}
          className="px-4 py-2 rounded-lg bg-blue-300 text-gray-900 font-medium hover:bg-amber-200 transition"
        >
          Search
        </button>
      </div>

      
      {error && (
        <div className="mb-4 text-red-600 font-semibold">
          {error}
        </div>
      )}

     {wetter && (
  <div className="w-[200px] h-auto rounded-xl bg-black/40 backdrop-blur-sm text-white shadow-lg flex flex-col items-start gap-4 p-6">
    
    {/* Location + Country */}
    <div className="flex flex-col">
      <span className="text-lg font-semibold">
        {wetter.name}, {wetter.sys?.country}
      </span>
      <span className="text-sm opacity-90">
        Feels like {Math.round(wetter.main?.feels_like)}°C · Humidity {wetter.main?.humidity}%
      </span>
    </div>

    {/* Temperature */}
    <div className="text-3xl font-bold">
      {Math.round(wetter.main?.temp)}°C
    </div>

    {/* Weather icon + description */}
    <div className="flex items-center gap-3">
      {wetter.weather?.[0]?.icon && (
        <img
         
          src={`https://openweathermap.org/img/wn/${wetter.weather[0].icon}@2x.png`}
          className="w-10 h-10"
        />
      )}
      <span className="capitalize text-sm">
        {wetter.weather?.[0]?.description}
      </span>
    </div>
    
  </div>
)}

    </div>
  );
};

export default Weather;


