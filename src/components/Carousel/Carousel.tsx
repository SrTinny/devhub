import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import styles from "./Carousel.module.css";

const projetos = [
  {
    titulo: "iFestify",
    imagem: "/assets/test1.png",
    descricao:
      "Projeto desenvolvido sobre demanda para apresentação de um produto.",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "ViaTopic",
    imagem: "/assets/test2.png",
    descricao:
      "Projeto desenvolvido para auxiliar a população de Sobral e região.",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test3.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
  {
    titulo: "Site Portfólio",
    imagem: "/assets/test4.png",
    descricao: "Exemplo de Descrição.",
    link: "https://meusite.com/portfolio",
  },
];

export default function CarrosselProjetos() {
  const swiperRef = useRef<SwiperClass>();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <h2 className={styles.titulo}>
        Nossos <span>Projetos</span>
      </h2>

      <div
        className={styles.interface}
        onMouseEnter={() => {
          setIsHovered(true);
          swiperRef.current?.autoplay?.stop();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          swiperRef.current?.autoplay?.start();
        }}
      >
        {/* Setas personalizadas */}
        <button
          className={styles.arrowLeft}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="bi bi-caret-left" />
        </button>
        <button
          className={styles.arrowRight}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i className="bi bi-caret-right" />
        </button>

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 }, // em vez de 1024
          }}
          className={styles.carousel}
        >
          {projetos.map((projeto, idx) => (
            <SwiperSlide key={idx}>
              <a href={projeto.link} target="_blank" rel="noreferrer">
                <div
                  className={styles.imgPort}
                  style={{ backgroundImage: `url(${projeto.imagem})` }}
                >
                  <div className={styles.overlay}>
                    <div className={styles.projectDetails}>
                      <h2>{projeto.titulo}</h2>
                      <p>{projeto.descricao}</p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
