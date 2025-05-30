import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Dev<span>hub</span>
      </div>
      <nav>
        <a href="#">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
