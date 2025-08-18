import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import  Krypto from "./pages/Krypto"
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="krypto" element={<Krypto />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
