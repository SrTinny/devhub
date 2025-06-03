// CarrosselProjetos.tsx
import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const projetos = [
  {
    titulo: "iFestify",
    imagem: "/assets/test1.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "ViaTopic",
    imagem: "/assets/test1.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
    {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
    {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
    {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
    {
    titulo: "Site Portfólio",
    imagem: "/assets/test1.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
];

export default function CarrosselProjetos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projetos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projetos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projetos.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <h2 className={styles.titulo}>
        Nossos <span>Projetos.</span>
      </h2>
      <div className={styles.interface}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          <i className="bi bi-caret-left" />
        </button>
        <button className={styles.arrowRight} onClick={handleNext}>
          <i className="bi bi-caret-right" />
        </button>

        <div className={styles.flexCarousel}>
          <div
            className={styles.carousel}
            style={{ transform: `translateX(-${currentIndex * 405}px)` }}
          >
            {projetos.map((projeto, idx) => (
              <a key={idx} href={projeto.link} target="_blank" rel="noreferrer">
                <div
                  className={`${styles.imgPort} ${
                    idx === currentIndex ? styles.currentItem : ""
                  }`}
                  style={{ backgroundImage: `url(${projeto.imagem})` }}
                >
                  <div className={styles.overlay}>{projeto.titulo}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
