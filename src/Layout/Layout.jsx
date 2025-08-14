import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aurora from "../components/Aurora";

const Layout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Aurora background covering the whole page */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


