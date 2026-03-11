import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import styles from "./Carousel.module.css";

type Projeto = {
  titulo: string;
  imagem?: string;
  descricao: string;
  link: string;
  tecnologias: string[];
};

const projetos: Projeto[] = [
  {
    titulo: "UX Software",
    descricao:
      "Loja demo fullstack construida com Next.js (frontend) e Express + Prisma (backend). Projeto focado em experiencias de UI/UX, com gerenciamento de produtos, categorias livres para admin, carrinho e paginas de suporte; ideal para prototipagem e testes de integracao.",
    link: "https://ux-software.vercel.app/",
    tecnologias: ["Next.js", "Express", "Prisma"],
  },
  {
    titulo: "Monitoramento Ar-Condicionado IoT",
    descricao:
      "Sistema full-stack para controle e monitoramento de ar-condicionado via IoT com ESP32, composto por frontend em React/Vite, backend em Node.js/Express, persistencia via Prisma/PostgreSQL, autenticacao JWT, controle de acesso por papeis (Admin/User), agendamento automatico de comandos e comunicacao firmware-backend por heartbeat.",
    link: "https://sistema-de-monitoramento-de-ar-cond.vercel.app/",
    tecnologias: ["React/Vite", "Node.js", "ESP32 IoT"],
  },
  {
    titulo: "Portfolio Pessoal",
    imagem: "/assets/portifolio.png",
    descricao:
      "Uma aplicacao de portfolio pessoal construida com React + Vite para apresentar projetos, habilidades e informacoes de contato de forma responsiva e acessivel.",
    link: "https://portfolio-chi-sable-czrbylf1ox.vercel.app/",
    tecnologias: ["React", "Vite", "Acessibilidade"],
  },
  {
    titulo: "Joao Victor Archviz",
    descricao:
      "Projeto desenvolvido para portfolio archviz profissional com interface limpa e conversao focada em contato direto.",
    link: "https://joao-victor-archviz.vercel.app/",
    tecnologias: ["Archviz", "Landing Page", "Conversao"],
  },
  {
    titulo: "iMovi Bootstrap",
    imagem: "/assets/imovi.png",
    descricao:
      "Modelo de site desenvolvido com Bootstrap 5 para apresentar projetos de uma empresa ficticia chamada iMovi. O site e responsivo, com elementos visuais modernos e dinamicos, ideal para estrutura de portfolio ou projetos de imoveis.",
    link: "https://bootstrap-modelo.vercel.app/",
    tecnologias: ["Bootstrap 5", "Responsivo", "Imoveis"],
  },
];

export default function CarrosselProjetos() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [previewLoaded, setPreviewLoaded] = useState<Record<string, boolean>>(
    {}
  );

  const handlePreviewLoad = (projectTitle: string) => {
    setPreviewLoaded((current) => ({
      ...current,
      [projectTitle]: true,
    }));
  };

  return (
    <section className={styles.portfolioSection} id="portfolio">
      <div className={styles.header}>
        <h2 className={styles.titulo}>
          Nossos <span>Projetos</span>
        </h2>
        <p>
          Selecionamos projetos reais com foco em tecnologia, resultado e
          experiencia do usuario.
        </p>
      </div>

      <div
        className={styles.interface}
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Projeto anterior"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M14.5 6L8.5 12L14.5 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Proximo projeto"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9.5 6L15.5 12L9.5 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={900}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className={styles.carousel}
        >
          {projetos.map((projeto) => (
            <SwiperSlide key={projeto.titulo}>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
                aria-label={`Ver o projeto ${projeto.titulo}`}
              >
                <div className={styles.previewLayer}>
                  {projeto.imagem ? (
                    <img
                      src={projeto.imagem}
                      alt={`Screenshot do projeto ${projeto.titulo}`}
                      className={styles.projectImage}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div
                      className={styles.projectImageFallback}
                      aria-hidden="true"
                    />
                  )}

                  <iframe
                    src={projeto.link}
                    title={`Pre-visualizacao do projeto ${projeto.titulo}`}
                    className={`${styles.projectIframe} ${
                      previewLoaded[projeto.titulo]
                        ? styles.projectIframeVisible
                        : ""
                    }`}
                    loading="lazy"
                    onLoad={() => handlePreviewLoad(projeto.titulo)}
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.overlay}>
                  <div className={styles.projectDetails}>
                    <h3>{projeto.titulo}</h3>
                    <p title={projeto.descricao}>{projeto.descricao}</p>
                    <div className={styles.techList}>
                      {projeto.tecnologias.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
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
