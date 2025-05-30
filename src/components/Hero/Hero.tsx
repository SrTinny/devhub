import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Conectando criatividade e tecnologia</h1>
      <p>
        Somos um hub de soluções modernas: modelagem 3D, impressão, design de
        móveis, sites e software sob medida.
      </p>
    </section>
  );
}

export default Hero;
