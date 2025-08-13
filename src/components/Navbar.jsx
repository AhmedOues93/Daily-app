import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-500 p-4">
      <h1 className="text-white text-2xl font-bold">Daily Portal</h1>
      <ul className="flex space-x-5 text-white text-center mt-2">
        {/* <li>Home</li>
        <li>News</li>
        <li>Weather</li>
        <li>Events</li> */}
        {/* <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/weather"> Weather</link>
        </li>
        <li>
          {" "}
          <link to="/news">News</link>
        </li>
        <li>
          <link to="/events">Events</link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
