import styles from "./Services.module.css";

const services = [
  {
    title: "Modelagem 3D",
    desc: "Projetamos objetos e ambientes com alta precisão para visualização e produção.",
  },
  {
    title: "Impressão 3D",
    desc: "Transformamos ideias em realidade com tecnologia de impressão 3D moderna.",
  },
  {
    title: "Desenvolvimento Web",
    desc: "Sites rápidos, responsivos e com design único para sua marca se destacar.",
  },
  {
    title: "Softwares Sob Medida",
    desc: "Soluções digitais personalizadas para automatizar processos e aumentar resultados.",
  },
  {
    title: "Projetos de Mobiliário",
    desc: "Design de móveis inteligentes e funcionais para ambientes residenciais e comerciais.",
  },
];

function Services() {
  return (
    <section className={styles.services} id="servicos">
      {services.map((s, i) => (
        <div key={i} className={styles.card}>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;
