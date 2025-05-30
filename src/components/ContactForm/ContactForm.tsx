import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <section className={styles.contact} id="contato">
      <h2>Fale com a gente</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <textarea
          name="mensagem"
          rows={5}
          placeholder="Descreva seu pedido..."
          required
        />
        <button type="submit">Enviar Pedido</button>
      </form>
    </section>
  );
}

export default ContactForm;
