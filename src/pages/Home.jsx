import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import news1 from '../assets/news1.jpg';
import events1 from '../assets/events1.jpg';
import news2 from '../assets/news2.jpg';
import events2 from '../assets/events2.jpg';
import news3 from '../assets/news3.jpg';
import weather1 from '../assets/weather1.jpg';
import news4 from '../assets/news4.jpg';
import news5 from '../assets/news5.jpg';
import news6 from '../assets/news6.jpg';
import Weather from "../components/Weather";


const slideImages = [
  news1,
  events1,
  news2,
  weather1,
  news3,
  news4,
  events2,
  
  news6,
  news5,
];

const Home = () => {
  return (
      
    <div className=" height: 100vh width: 100% z-index: -1 slide-container" style={{ position: 'relative', height: '100vh', width: '100%' }}>
   <div className="fixed md:top-24 md:left-5  left-5 z-20">
  <Weather />
</div>
    
      <Slide
        autoplay={true}
        duration={1000} 
        transitionDuration={500} 
        infinite={true}
        arrows={false} 
      >
      
        
        {slideImages.map((img, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100%',
            }}
          ></div>
        ))}
        </Slide>
    </div>
  );
};

export default Home;
