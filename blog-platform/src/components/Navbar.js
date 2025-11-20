import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">BlogSphere</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;