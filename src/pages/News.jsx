import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        
        const apiUrl =
          "https://newsapi.org/v2/everything?q=tesla&from=2025-07-14&sortBy=publishedAt&language=de&apiKey=1874a2b191bc4b899c3ae3e594252874";
        const response = await fetch(apiUrl);
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
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="  items-center justify-center p-4 slide-container">
      <Slide
        autoplay={true}
        duration={2000}
        transitionDuration={500}
        infinite={true}
        arrows={false}
      >
        {articles
          .filter((article) => article.urlToImage)
          .map((article, index) => (
            <div
              key={index}
              className="  flex flex-col items-center justify-center w-100%"
            >
              <img
                onClick={() => window.open(article.url)}
                src={article.urlToImage}
                alt={article.title}
                style={{
                  width: "1200px",
                  maxHeight: "600px",
                  objectFit: "cover",
                  justifyContent: "center",
                  borderRadius:  "20px",
                }}
              />
              <h3 className=" card  bg-white/40  p-5 text-2xl mb-5  mt-1 justify-center">{article.title}</h3>
            </div>
          ))}
      </Slide> 
      <Slide
        autoplay={true}
        duration={2000}
        transitionDuration={500}
        infinite={true}
        arrows={false}
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 gap-6">
          {articles
            .filter((article) => article.urlToImage)
             .slice(0,8)
            .map((article, index) => (
              <div
              
                key={index}
                className="card bg-white/40 flex flex-col items-center p-4"
              >
                <figure>
                 
                  <img
                    onClick={() => window.open(article.url)}
                    
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded hover:bg-amber-300"
                  />
                </figure>
                <h2 className="card-title text-lg font-semibold mt-2 text-center">
                  {article.title}
                </h2>

                <div className="card-actions justify-center mt-2">
                  {isExpanded && (
                    <div>
                      <p>{article.description}</p>
                    </div>
                  )}

                  <button onClick={handleToggle}>
                    {isExpanded ?  "close ": "Mehr"}
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