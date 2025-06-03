import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import { FaUser, FaPhone, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import Modal from "../Modal/Modal";

const ContactForm: React.FC = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [pedido, setPedido] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [errors, setErrors] = useState({
    nome: "",
    telefone: "",
    email: "",
    pedido: "",
  });

  // Máscara simples de telefone
  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);

    if (errors.nome) {
      setErrors((prev) => ({ ...prev, nome: "" }));
    }
  };

  const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "");
    let formatted = digits;

    if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(
        7,
        11
      )}`;
    }

    setTelefone(formatted);

    if (errors.telefone) {
      setErrors((prev) => ({ ...prev, telefone: "" }));
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePedidoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPedido(e.target.value);

    if (errors.pedido) {
      setErrors((prev) => ({ ...prev, pedido: "" }));
    }
  };

  // Validação completa com mensagens
  const isFormValid = () => {
    const newErrors = {
      nome: "",
      telefone: "",
      email: "",
      pedido: "",
    };
    let valid = true;

    if (!nome.trim()) {
      newErrors.nome = "Nome é obrigatório.";
      valid = false;
    }
    if (!telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório.";
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email é obrigatório.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Formato de email inválido.";
      valid = false;
    }
    if (!pedido.trim()) {
      newErrors.pedido = "Pedido é obrigatório.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(true);

      // Limpa campos
      setNome("");
      setTelefone("");
      setEmail("");
      setPedido("");
      setErrors({
        nome: "",
        telefone: "",
        email: "",
        pedido: "",
      });
    }, 500);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section className={styles.contact} id="contato">
      <h2>
        Entre em <span>Contato</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          placeholder="Seu Nome"
          icon={<FaUser />}
          required
          value={nome}
          onChange={handleNomeChange}
          error={errors.nome}
        />

        <Input
          label="Telefone"
          placeholder="(XX) XXXXX-XXXX"
          icon={<FaPhone />}
          type="tel"
          required
          value={telefone}
          onChange={handleTelefoneChange}
          error={errors.telefone}
        />

        <Input
          label="Email"
          placeholder="Seu Email"
          icon={<FaEnvelope />}
          type="email"
          required
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />

        <TextArea
          label="Pedido"
          name="pedido"
          placeholder="Descreva seu pedido"
          required
          value={pedido}
          onChange={handlePedidoChange}
          error={errors.pedido}
        />

        <div>
          <button
            className={styles.submitForm}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Pedido"}
          </button>
        </div>
      </form>

      {/* Modal de sucesso */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FaCheckCircle size={48} color="var(--primary)" />
        <h3>Formulário enviado com sucesso!</h3>
        <p>Sua mensagem foi enviada com sucesso!</p>
        <p>Obrigado por entrar em contato!</p>
      </Modal>
    </section>
  );
};

export default ContactForm;
