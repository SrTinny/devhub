// Carousel.tsx
import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const projetos = [
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    link: "https://meusite.com/portfolio",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projetos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projetos.length);
  };

  return (
    <section className={styles.carouselSection} id="projetos">
      <h2 className={styles.title}>Projetos Recentes</h2>
      <div className={styles.carouselContainer}>
        <button onClick={handlePrev} className={styles.navButton}>
          &larr;
        </button>

        <a
          href={projetos[index].link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={projetos[index].imagem} alt={projetos[index].titulo} />
          <h3>{projetos[index].titulo}</h3>
        </a>

        <button onClick={handleNext} className={styles.navButton}>
          &rarr;
        </button>
      </div>
    </section>
  );
}
