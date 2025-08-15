import { useState, useEffect } from "react";

const Exchange = () => {
  // State to store exchange
  const [devise, setDevise] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch exchange from API
    const fetchDevise = async () => {
      try {
        const res = await fetch("https://api.frankfurter.app/latest?from=EUR");
        const data = await res.json();
        console.log("Devise:", data.rates); // Log for debugging
        setDevise(data.rates || {}); // Stop loading
      } catch (err) {
        console.error("API Error:", err);
        setDevise({}); // Set empty object on error
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchDevise();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Show message if no data is available
  if (!devise || Object.keys(devise).length === 0) {
    return <p>No exchange rates available.</p>;
  }

  // Split the rates into two halves to display in two tables
  const entries = Object.entries(devise);
  const half = Math.ceil(entries.length / 2);
  const firstHalf = entries.slice(0, half);
  const secondHalf = entries.slice(half);

  return (
    <div className="p-10 rounded-xl shadow-lg flex flex-col items-center bg-black/20 backdrop-blur-md gap-8">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-6">
        💵 EURO Exchange Rates
      </h2>

      {/* Two-column grid for displaying tables */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
        {/* First table */}
        <table className="w-full text-lg border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr className="border-b">
              <th className="text-left py-3 px-4">Currency</th>
              <th className="text-left py-3 px-4">Rate</th>
            </tr>
          </thead>
          <tbody>
            {firstHalf.map(([currency, value]) => (
              <tr key={currency} className="border-b last:border-none">
                <td className="py-2 px-4">{currency}</td>
                <td className="py-2 px-4">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Second table */}
        <table className="w-full text-lg border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr className="border-b">
              <th className="text-left py-3 px-4">Currency</th>
              <th className="text-left py-3 px-4">Rate</th>
            </tr>
          </thead>
          <tbody>
            {secondHalf.map(([currency, value]) => (
              <tr key={currency} className="border-b last:border-none">
                <td className="py-2 px-4">{currency}</td>
                <td className="py-2 px-4">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exchange;
