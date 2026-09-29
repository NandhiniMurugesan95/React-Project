import { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const endpoint =
      "https://api.open-meteo.com/v1/forecast?latitude=4.1755&longitude=73.5093&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto";

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data not available");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Unable to load weather information");
        setLoading(false);
      });
  }, []);

  // Weather code → text + icon
  const getWeatherInfo = (code) => {
    if (code === 0) {
      return {
        text: "Clear Sky",
        icon: "☀️",
      };
    }

    if (code >= 1 && code <= 3) {
      return {
        text: "Partly Cloudy",
        icon: "🌤️",
      };
    }

    if (code >= 45 && code <= 48) {
      return {
        text: "Foggy",
        icon: "🌫️",
      };
    }

    if (code >= 51 && code <= 67) {
      return {
        text: "Light Rain",
        icon: "🌦️",
      };
    }

    if (code >= 80 && code <= 82) {
      return {
        text: "Rain Showers",
        icon: "🌧️",
      };
    }

    if (code >= 95) {
      return {
        text: "Thunderstorm",
        icon: "⛈️",
      };
    }

    return {
      text: "Maldives Weather",
      icon: "🌴",
    };
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="text-center">
          <p className="text-cyan-700 text-lg">
            Loading Maldives weather...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }

  const info = getWeatherInfo(weather.current.weather_code);

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 via-white to-cyan-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-cyan-600 uppercase tracking-[4px] text-sm font-semibold font-serif">
            Travel Information
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 font-serif">
            Maldives Weather
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-serif">
            Check the current weather conditions in Maldives
            before planning your tropical getaway.
          </p>

        </div>

        {/* Main Weather Card */}
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-cyan-600 font-serif via-cyan-500 to-cyan-600 shadow-2xl">

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full font-serif"></div>

          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/10 rounded-full font-serif"></div>

          <div className="relative p-8 md:p-12">

            {/* Location */}
            <div className="flex items-center justify-between flex-wrap gap-4">

              <div>
                <p className="text-white/70 text-sm uppercase tracking-widest">
                  Current Weather
                </p>

                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
                  Malé, Maldives
                </h3>
              </div>

              <div className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
                <span className="text-white text-sm">
                  🌴 Tropical Paradise
                </span>
              </div>

            </div>

            {/* Temperature */}
            <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

              <div className="flex items-center gap-6">

                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">

                  <span className="text-6xl md:text-7xl">
                    {info.icon}
                  </span>

                </div>

                <div>

                  <p className="text-6xl md:text-7xl font-bold text-white">
                    {Math.round(
                      weather.current.temperature_2m
                    )}°
                  </p>

                  <p className="text-white/80 text-lg">
                    Celsius
                  </p>

                  <p className="text-white font-medium mt-2">
                    {info.text}
                  </p>

                </div>

              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-2 gap-4">

                {/* Humidity */}
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">

                  <div className="text-2xl mb-2">
                    💧
                  </div>

                  <p className="text-white/70 text-sm">
                    Humidity
                  </p>

                  <p className="text-white text-2xl font-bold mt-1">
                    {weather.current.relative_humidity_2m}%
                  </p>

                </div>

                {/* Wind */}
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 border border-white/20">

                  <div className="text-2xl mb-2">
                    🌬️
                  </div>

                  <p className="text-white/70 text-sm">
                    Wind Speed
                  </p>

                  <p className="text-white text-2xl font-bold mt-1">
                    {weather.current.wind_speed_10m}
                    {" "}
                    km/h
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between gap-4">

              <p className="text-white/80 text-sm">
                📍 Coordinates: 4.1755° N, 73.5093° E
              </p>

              <p className="text-white/80 text-sm">
                🌊 Perfect destination for a tropical escape
              </p>

            </div>

          </div>

        </div>  

      </div>

    </section>
  );
}