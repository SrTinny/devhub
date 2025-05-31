import styles from "./Services.module.css";
import iconImpressao from "../../assets/icon-impressao.png";
import iconWeb from "../../assets/icon-web.png";
import iconSoftware from "../../assets/icon-software.png";
import iconMoveis from "../../assets/icon-moveis.png";

const services = [
  {
    icon: iconImpressao,
    title: "Impressão 3D",
    desc: "Transformamos ideias em realidade com tecnologia de impressão 3D moderna.",
  },
  {
    icon: iconWeb,
    title: "Projetos Web",
    desc: "Sites rápidos, responsivos e com design único para sua marca se destacar.",
  },
  {
    icon: iconSoftware,
    title: "Softwares Sob Medida",
    desc: "Soluções digitais personalizadas para automatizar processos e aumentar resultados.",
  },
  {
    icon: iconMoveis,
    title: "Projetos de Mobiliário",
    desc: "Design de móveis inteligentes e funcionais para ambientes residenciais e comerciais.",
  },
];

function Services() {
  return (
    <section className={styles.servicesSection} id="servicos">
      <div className={styles.header}>
        <h2>Nossos Serviços</h2>
        <p>
          Descubra nossas soluções criativas e tecnológicas pensadas sob medida
          para transformar ideias em resultados.
        </p>
      </div>

      <div className={styles.services}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <img src={s.icon} alt={s.title} className={styles.icon} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
