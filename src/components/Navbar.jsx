import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   
  <div className="navbar  flex justify-between bg-gradient-to-r from-Emerald-500 via-sky-500 to-indigo-500 shadow-sm">
    <h1 className="text-4xl font-bold  "> Daily-Portal  </h1>
    <ul className="menu menu-horizontal text-xl gap-4">
        <li>
          <Link
            to="/"
            className="text-black- text-2xl hover:text-blue-700 "
          >
            Home
          </Link>
        </li>
           <li>
          <Link
            to="/news"
            className="text-black--2xl hover:text-blue-700 "
          >
            News
          </Link>
        </li>
           <li>
          <Link
            to="/weather"
            className="text-black--2xl hover:text-blue-700 "
          >
            Weather
          </Link>
        </li>
           <li>
          <Link
            to="/events"
            className="text-black--2xl hover:text-blue-700 "
          >
            Events
          </Link>
        </li>

        </ul>
  
    </div>
  );
}


export default Navbar;
