// src/services/api.ts

export interface ContactPayload {
  nome: string;
  telefone: string;
  email: string;
  pedido: string;
}

const API_BASE_URL = "https://SEU_BACKEND.com";
// ← Ajuste aqui para a URL real da sua API.

export async function sendContact(payload: ContactPayload): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro na requisição: ${response.status} – ${errorText}`);
  }
}
