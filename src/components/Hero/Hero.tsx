import styles from "./Hero.module.css";
import heroImage from "../../assets/heroimage.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Conectando criatividade e tecnologia</h1>
        <p>
          Somos um hub de soluções modernas que integram tecnologia, arte e funcionalidade.
        </p>
        <ul className={styles.services}>
          <li>🖥️ Desenvolvimento de sites e sistemas sob medida</li>
          <li>🪑 Design de móveis personalizados em 3D</li>
          <li>🖨️ Impressão 3D de alta precisão</li>
          <li>🧠 Consultoria criativa e tecnológica</li>
        </ul>
        <div className={styles.buttons}>
          <button>Fale Conosco</button>
          <button className={styles.secondary}>Ver Portfólio</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={heroImage} alt="Pessoa programando" />
      </div>
    </section>
  );
}

export default Hero;
