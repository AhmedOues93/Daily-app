import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";

const News = () => {
  // State to store fetched articles
  const [articles, setArticles] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to control description toggle
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle between showing and hiding article descriptions
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Function to fetch news data from GNews API
    const fetchNews = async () => {
      try {
        // API endpoint (GNews API) - fetching example articles
        const apiUrl =
          "https://gnews.io/api/v4/search?q=example&apikey=6bf8aa1825a66904b5cfafc2a6b28ed2";

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data); // Debug

        // Update articles state (if data exists)
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        // Set loading
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Show loading text while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-DE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="items-center justify-center p-4 slide-container">
      {/* First slideshow Featured Images */}
      <Slide
        autoplay={true}
        duration={2000}
        transitionDuration={500}
        infinite={true}
        arrows={false}
      >
        {articles
          .filter((article) => article.image) // Only show articles  have an image
          .map((article, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-100%"
            >
              {/* Clickable image that opens the article in a new tab */}
              <img
                onClick={() => window.open(article.url)}
                src={article.image}
                alt={article.title}
                style={{
                  width: "1200px",
                  maxHeight: "600px",
                  objectFit: "cover",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
              />

              <h3 className="card bg-white/40 p-5 text-2xl mb-5 mt-1 justify-center">
                {article.title}
              </h3>
            </div>
          ))}
      </Slide>

      {/* Second slideshow  Grid  news cards */}
      <Slide
        autoplay={true}
        duration={3000}
        transitionDuration={500}
        infinite={true}
        arrows={false}
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 gap-6">
          {articles
            .filter((article) => article.image) // Only articles with an image
            .slice(0, 8) // Limit to  show first 8 articles
            .map((article, index) => (
              <div
                key={index}
                className="card bg-white/40 flex flex-col items-center p-4"
              >
                <figure>
                  {/* Article image */}
                  <img
                    onClick={() => window.open(article.url)}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded hover:bg-amber-300"
                  />
                </figure>

                <h2 className="card-title text-lg font-semibold mt-2 text-center">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  {article.source?.name} • {formatDate(article.publishedAt)}
                </p>

                <div className="card-actions justify-center mt-2">
                  {isExpanded && (
                    <div>
                      <p>{article.description}</p>
                    </div>
                  )}

                  {/* Toggle button for showing/hiding description */}
                  <button onClick={handleToggle}>
                    {isExpanded ? "close " : "Mehr"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </Slide>
    </div>
  );
};

export default News;
