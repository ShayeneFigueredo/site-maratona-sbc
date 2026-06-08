import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <span>MARATONA SBC DE PROGRAMAÇÃO</span>
          </Link>
        </div>
        
        <div className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/#sobre">Sobre</Link>
          <Link to="/#final2026">Final 2026</Link>
          <Link to="/#programacao">Programação</Link>
          
          <Link to="/patrocinadores">Patrocinadores</Link>
          <Link to="/organizadores">Organizadores</Link>
          <Link to="/locais">Locais</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      <div className={`mobile-sidebar ${menuAberto ? "active" : ""}`}>
        
        <div className="close-menu-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>

        <Link to="/" onClick={toggleMenu}>Início</Link>
        <Link to="/#sobre" onClick={toggleMenu}>Sobre</Link>
        <Link to="/#final2026" onClick={toggleMenu}>Final 2026</Link>
        <Link to="/#programacao" onClick={toggleMenu}>Programação</Link>
        <Link to="/patrocinadores" onClick={toggleMenu}>Patrocinadores</Link>
        <Link to="/organizadores" onClick={toggleMenu}>Organizadores</Link>
        <Link to="/locais" onClick={toggleMenu}>Locais</Link>
        <Link to="/contato" onClick={toggleMenu}>Contato</Link>
      </div>
    </>
  );
}