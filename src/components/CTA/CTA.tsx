import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta_section}>
      <div className={styles.content}>
        <h2>Pronto para transformar sua presença digital?</h2>
        <p>Agende uma consultoria gratuita de 30 minutos com nossos especialistas</p>
        
        <div className={styles.features}>
          <div className={styles.feature}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Análise de seu projeto atual
          </div>
          <div className={styles.feature}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Proposta personalizada
          </div>
          <div className={styles.feature}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Timeline e investimento
          </div>
        </div>

        <a href="#contato" className={styles.button}>
          Agendar Consultoria Grátis
        </a>

        <p className={styles.subtext}>Sem compromisso. Sem custo inicial 💡</p>
      </div>
    </section>
  );
}

export default CTA;
