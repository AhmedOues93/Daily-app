import React from "react";
import { Link } from "react-router-dom";
import SplitText from "./SplitText";

const Navbar = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="navbar  flex justify-between bg-black/30 backdrop-blur-md  shadow-sm">
      <SplitText
        text="Tägliches Portal"
        className="text-6xl font-semibold text-red-700 text-center font-[UnifrakturCook] "
        delay={100}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <ul className="menu menu-horizontal text-xl gap-2">
        <li>
          <Link to="/" className="text-white text-2xl hover:text-blue-300 ">
            Starseite
          </Link>
        </li>
        <li>
          <Link to="/news" className="text-white text-2xl hover:text-blue-300 ">
            Nachrichten
          </Link>
        </li>

        <li>
          <Link to="/nasa" className="text-white text-2xl hover:text-blue-300 ">
           Krypto & Börse
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
