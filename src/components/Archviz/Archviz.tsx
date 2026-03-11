import styles from "./Archviz.module.css";
import archiviz1 from "../../assets/archiviz1.png";
import archiviz2 from "../../assets/archiviz2.png";
import archiviz3 from "../../assets/archiviz3.png";

function Archviz() {
  return (
    <section className={styles.archviz} id="archviz">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            A empresa tambem presta <span>Design Archviz</span>
          </h2>
          <p>
            Servico de design archviz para apresentacao visual de projetos de
            arquitetura e interiores, ideal para destacar portfolio,
            autoridade e valor percebido.
          </p>
        </div>

        <div className={styles.content}>
          <article className={styles.card}>
            <h3>Transforme seu espaco com solucoes praticas e acessiveis</h3>
            <p>
              Design de interiores que une estetica contemporanea e
              funcionalidade inteligente.
            </p>

            <p className={styles.cardDescription}>
              Prestamos servico de Design Archviz para ambientes residenciais e
              comerciais, com foco em composicao visual, identidade do espaco e
              valorizacao do projeto.
            </p>

            <div className={styles.tags}>
              <span>Archviz</span>
              <span>Arquitetura</span>
              <span>Interiores</span>
              <span>Apresentacao Visual</span>
            </div>

            <a
              href="https://joao-victor-archviz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Ver projeto real
            </a>
          </article>

          <div className={styles.gallery} aria-hidden="true">
            <figure className={styles.imageCardBack}>
              <img
                src={archiviz3}
                alt="Composicao central de ambiente para design archviz"
                loading="lazy"
              />
            </figure>

            <figure className={styles.imageCardPrimary}>
              <img
                src={archiviz1}
                alt="Ambiente arquitetonico com acabamento premium"
                loading="lazy"
              />
            </figure>

            <figure className={styles.imageCardSecondary}>
              <img
                src={archiviz2}
                alt="Composicao visual de projeto archviz para portfolio"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Archviz;
