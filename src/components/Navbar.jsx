import React from "react";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>MARATONA SBC DE PROGRAMAÇÃO</span>
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