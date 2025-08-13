import React from "react";
import { useState, useEffect } from "react";
import { Zoom } from "react-slideshow-image";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2025-07-13&sortBy=publishedAt&apiKey=1874a2b191bc4b899c3ae3e594252874"
        );
        const data = await response.json();
        console.log(data);
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [loading]);
  const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
  };
  if (loading) return <p>Loading...</p>;

  return (
    <div className="  items-center justify-center p-4 slide-container">
      <Zoom {...zoomOutProperties}>
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-100%"
          >
            <img
              onClick={() => window.open(article.url)}
              src={article.urlToImage}
              alt={article.title}
              style={{
                width: "1300px",
                maxHeight: "700px",
                objectFit: "cover",
                justifyContent: "center",
              }}
            />
            <h3 className="text-2xl mt-5 justify-center">{article.title}</h3>
          </div>
        ))}
      </Zoom>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 gap-6">
          {articles.slice(0, 5).map((article, index) => (
            <div
              key={index}
              className="card bg-gray-100 flex flex-col items-center p-4"
            >
              <figure>
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded"
                />
              </figure>
              <h2 className="card-title text-lg font-semibold mt-2 text-center">
                {article.title}
              </h2>

              <div className="card-actions justify-center mt-2">
                <button
                  onClick={() => window.open(article.url)}
                  className="btn shadow"
                >
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
