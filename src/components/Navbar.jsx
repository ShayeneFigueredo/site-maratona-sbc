import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>MARATONA SBC DE PROGRAMAÇÃO</span>
      </div>
      <div className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#final2026">Final 2026</a>
        <a href="#programacao">Programação</a>
      </div>
    </nav>
  );
}