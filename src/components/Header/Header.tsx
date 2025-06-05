import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiPhone,
  FiSettings,
  FiGrid,
} from "react-icons/fi";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#">
          <h1>
            Dev<span className={styles.logoFlip}>hub</span>
          </h1>
        </a>
      </div>

      <nav className={styles.navDesktop}>
        <a href="#">
          <FiHome /> Início
        </a>
        <a href="#servicos">
          <FiSettings /> Serviços
        </a>
        <a href="#portfolio">
          <FiGrid /> Projetos
        </a>
        <a href="#contato">
          <FiPhone /> Contato
        </a>
      </nav>

      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <FiMenu />
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          <FiX />
        </button>
        <a href="#" onClick={closeMenu}>
          <FiHome /> Início
        </a>
        <a href="#servicos" onClick={closeMenu}>
          <FiSettings /> Serviços
        </a>
        <a href="#portfolio">
          <FiGrid /> Projetos
        </a>
        <a href="#contato" onClick={closeMenu}>
          <FiPhone /> Contato
        </a>
      </div>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
}

export default Header;
