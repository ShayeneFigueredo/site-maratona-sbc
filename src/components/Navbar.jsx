import React from "react";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Zap size={24} color="#a3ff47" fill="#a3ff47" />
        <span>Creatix</span>
      </div>
      <div className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Reviews</a>
      </div>
    </nav>
  );
}