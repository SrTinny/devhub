import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h2>
          Conectando Criatividade e{" "}
          <span className={styles.tech}>
            Tecnologia<span className={styles.dot}>|</span>
          </span>
        </h2>

        <p>
          Somos um hub de soluções modernas que integram tecnologia, arte e
          funcionalidade.
        </p>
        <ul className={styles.services}>
          <li>🖥️ Desenvolvimento de sites e sistemas sob medida</li>
          <li>🪑 Design de móveis personalizados em 3D</li>
          <li>🖨️ Impressão 3D de alta precisão</li>
          <li>🧠 Consultoria criativa e tecnológica</li>
        </ul>
        <div className={styles.buttons}>
          <a href="#contato">Fale Conosco</a>

          <a className={styles.secondary} href="#projetos">
            Ver Portfólio
          </a>
        </div>
      </div>
      <div className={styles.image}></div>
    </section>
  );
}

export default Hero;
