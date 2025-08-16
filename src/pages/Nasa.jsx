import React, { useState, useEffect } from "react";
import Exchange from "../components/Exchange"; // tu peux garder ton composant Exchange si tu veux

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano&order=market_cap_desc"
        );
        const data = await response.json();
        setCryptoData(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching crypto data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="p-6 min-h-screen flex flex-col md:flex-row gap-10">
      {/* Crypto Section */}
      <div className="flex-1 max-w-4xl p-6 rounded-lg bg-black/50 backdrop-blur-md flex flex-col items-start gap-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-6">
          💰 Crypto Prices
        </h2>
        {cryptoData.map((coin) => (
          <div key={coin.id} className="flex  bg-gray-100 flex-col gap-2 p-4 border rounded-lg w-full">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <img src={coin.image} alt={coin.name} className="w-8 h-8" />
              {coin.name} ({coin.symbol.toUpperCase()})
            </h3>
            <p>Price: ${coin.current_price.toLocaleString()}</p>
            <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
            <p>24h Change: {coin.price_change_percentage_24h.toFixed(2)}%</p>
          </div>
        ))}
      </div>

      {/* Exchange Section */}
      <div className="flex-1">
        <Exchange />
      </div>
    </div>
  );
};

export default Crypto;
