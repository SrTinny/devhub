import styles from "./Process.module.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Briefing",
      description: "Entendemos seus objetivos, público-alvo e desafios através de uma consultoria estratégica.",
    },
    {
      number: "02",
      title: "Design",
      description: "Criamos wireframes e protótipos interativos para validar a experiência antes do desenvolvimento.",
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "Codificamos usando as melhores práticas, ferramentas e frameworks modernos.",
    },
    {
      number: "04",
      title: "Testes",
      description: "QA completo: performance, segurança, SEO, acessibilidade em todos os navegadores.",
    },
    {
      number: "05",
      title: "Deploy",
      description: "Lançamento em produção com configuração de infraestrutura e otimizações finais.",
    },
    {
      number: "06",
      title: "Suporte",
      description: "Monitoramento contínuo, atualizações, melhorias e suporte 24/7 pós-lançamento.",
    },
  ];

  return (
    <section className={styles.process} id="processo">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Nosso <span>Processo</span></h2>
          <p>Metodologia comprovada que transforma ideias em resultados</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.connector}>
                {idx < steps.length - 1 && <div className={styles.line}></div>}
              </div>
              <div className={styles.step_content}>
                <div className={styles.number}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.timeline_mobile}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step_mobile}>
              <div className={styles.number_mobile}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
