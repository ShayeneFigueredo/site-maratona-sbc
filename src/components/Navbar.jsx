import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span>MARATONA SBC DE PROGRAMAÇÃO</span>
        </div>
        
        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#final2026">Final 2026</a>
          <a href="#programacao">Programação</a>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      <div className={`mobile-sidebar ${menuAberto ? "active" : ""}`}>
        
        <div className="close-menu-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>

        <a href="#sobre" onClick={toggleMenu}>Sobre</a>
        <a href="#final2026" onClick={toggleMenu}>Final 2026</a>
        <a href="#programacao" onClick={toggleMenu}>Programação</a>
      </div>
    </>
  );
}