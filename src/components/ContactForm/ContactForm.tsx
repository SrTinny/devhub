import styles from "./ContactForm.module.css";
import Input from "../Input/Input";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

function ContactForm() {
  return (
    <section className={styles.contact} id="contato">
      <h2>
        Entre em <span>Contato.</span>
      </h2>
      <form>
        <Input label="Nome" placeholder="Seu Nome" icon={<FaUser />} required />
        <Input
          label="Telefone"
          placeholder="Seu Telefone"
          icon={<FaPhone />}
          type="tel"
          required
        />
        <Input
          label="Email"
          placeholder="Seu Email"
          icon={<FaEnvelope />}
          type="email"
          required
        />

        <button className={styles.submitForm} type="submit">
          Enviar Pedido
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
