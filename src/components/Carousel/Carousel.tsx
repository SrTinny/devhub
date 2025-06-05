import { useEffect, useState, useRef } from "react";
import styles from "./Carousel.module.css";

const projetos = [
  {
    titulo: "iFestify",
    imagem: "/assets/test1.png",
    descricao: "Projeto desenvolvido sobre demanda.",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "ViaTopic",
    imagem: "/assets/test1.png",
    descricao:
      "Projeto desenvolvido para Auxiliar a população de Sobral e região a ter acesso a informação de forma acessivel.",
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
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxIndex, setMaxIndex] = useState(projetos.length - 1);
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function calculateSizes() {
      if (!carouselRef.current) return;

      const items = carouselRef.current.querySelectorAll(
        `.${styles.imgPort}`
      ) as NodeListOf<HTMLElement>;

      if (items.length === 0) return;

      const firstRect = items[0].getBoundingClientRect();
      let sw: number;
      if (items.length > 1) {
        const secondRect = items[1].getBoundingClientRect();
        sw = secondRect.left - firstRect.left;
      } else {
        sw = firstRect.width;
      }

      const containerWidth = carouselRef.current.clientWidth;
      const visibleCount = Math.max(1, Math.floor(containerWidth / sw));

      const mi =
        projetos.length - visibleCount >= 0
          ? projetos.length - visibleCount
          : 0;

      setSlideWidth(sw);
      setMaxIndex(mi);

      setCurrentIndex((prev) => (prev > mi ? 0 : prev));
    }

    calculateSizes();
    window.addEventListener("resize", calculateSizes);
    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  // 2) Autoplay: avança 1 item a cada 5s, mas só se não estiver pausado
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      className={styles.portfolioSection}
      id="portfolio"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className={styles.titulo}>
        Nossos <span>Projetos</span>
      </h2>

      <div className={styles.interface}>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          <i className="bi bi-caret-left" />
        </button>
        <button className={styles.arrowRight} onClick={handleNext}>
          <i className="bi bi-caret-right" />
        </button>

        {/* 5) “Janela” do carrossel */}
        <div ref={carouselRef} className={styles.flexCarousel}>
          <div
            className={styles.carousel}
            style={{
              transform: `translateX(-${currentIndex * slideWidth}px)`,
            }}
          >
            {projetos.map((projeto, idx) => (
              <a key={idx} href={projeto.link} target="_blank" rel="noreferrer">
                <div
                  className={styles.imgPort}
                  style={{
                    backgroundImage: `url(${projeto.imagem})`,
                  }}
                >
                  <div className={styles.overlay}>
                    <div className={styles.projectDetails}>
                      <h2>{projeto.titulo}</h2>
                      <p>{projeto.descricao}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
