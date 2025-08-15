import React, { useState, useEffect } from "react";

const Nasa = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNasa = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=SL9CjavI5BYjCqL2dgeb0CP4jzVGjvxzHavaf1yJ"
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data from NASA", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNasa();
  }, []);

  if (loading) {
    return <p className="text-center">Loading... 😄</p>;
  }

   return (
    <div className="p-6 min-h-screen">
    
      <div className="max-w-4xl p-6 rounded-lg shadow-md flex flex-col items-start gap-4">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <img
          src={data.url}
          alt={data.title}
          className="w-full max-h-96 object-cover rounded-lg"
        />
        <p>{data.explanation}</p>
        <p className="font-semibold">Date: {data.date}</p>
      </div>
    </div>
  );
};

export default Nasa;
