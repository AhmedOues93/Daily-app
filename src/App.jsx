

import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Layout from './Layout/Layout';  
import Home from './pages/Home';
import News from './pages/News';

import Nasa from './pages/Nasa';

function App() {
  return (
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
        <Route path="news" element={<News />} />
         <Route path="nasa" element={<Nasa />} />

  </Route>
</Routes>
  );
}

export default App;




