import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import styles from "./Carousel.module.css";

const projetos = [
  {
    titulo: "iFestify",
    imagem: "/assets/ifestify.png",
    descricao:
      "Projeto desenvolvido sobre demanda para apresentação de um produto.",
    link: "https://www.ifestify.com/",
  },
  {
    titulo: "ViaTopic",
    imagem: "/assets/viatopic.png",
    descricao:
      "Projeto desenvolvido para auxiliar a população de Sobral e região.",
    link: "https://viatopic.netlify.app/",
  },
  {
    titulo: "Portifólio",
    imagem: "/assets/portifolio.png",
    descricao: "Modelo de porfifólio interativo.",
    link: "https://portifolio-self-ten-43.vercel.app/",
  },
  {
    titulo: "Imovi",
    imagem: "/assets/imovi.png",
    descricao: "Site de alugel e venda de imóveis.",
    link: "https://bootstrap-modelo.vercel.app/",
  },
];

export default function CarrosselProjetos() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <h2 className={styles.titulo}>
        Nossos <span>Projetos</span>
      </h2>

      <div
        className={styles.interface}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
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
