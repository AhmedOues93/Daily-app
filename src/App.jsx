

import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Layout from './Layout/Layout';  
import Home from './pages/Home';
import News from './pages/News';
import Weather from './pages/Weather';
import Events from './pages/Events';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="weather" element={<Weather />} />
        <Route path="events" element={<Events />} />
      </Route>
        </Routes>
      
  );
}

export default App;




