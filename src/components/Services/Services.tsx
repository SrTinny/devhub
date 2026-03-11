import type { ReactNode } from "react";
import styles from "./Services.module.css";

type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
  href?: string;
};

const services: Service[] = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
        <path d="M12 6v6m0 4v.01M9 12h6m-3-3v6"/>
      </svg>
    ),
    title: "Impressão 3D",
    desc: "Transformamos ideias em realidade com tecnologia de impressão 3D moderna.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M2 17h20M6 21h12"/>
      </svg>
    ),
    title: "Projetos Web",
    desc: "Sites rápidos, responsivos e com design único para sua marca se destacar.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <path d="M8 12.5l2 2 4-4"/>
      </svg>
    ),
    title: "Softwares Sob Medida",
    desc: "Soluções digitais personalizadas para automatizar processos e aumentar resultados.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="8" height="12" rx="1"/>
        <rect x="14" y="4" width="8" height="12" rx="1"/>
        <path d="M6 16h12M6 20h12"/>
      </svg>
    ),
    title: "Design Archviz",
    desc: "Projetos visuais profissionais para arquitetura e interiores com foco em conversao.",
    href: "#archviz",
  },
];

function Services() {
  return (
    <section className={styles.servicesSection} id="servicos">
      <div className={styles.header}>
        <h2>
          Nossos <span>Serviços</span>
        </h2>
        <p>
          Descubra nossas soluções criativas e tecnológicas pensadas sob medida
          para transformar ideias em resultados.
        </p>
      </div>

      <div className={styles.services}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {s.href ? (
              <a href={s.href} className={styles.cardLink}>
                Ver projeto Archviz
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
