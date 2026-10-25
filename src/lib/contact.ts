import { z } from "astro/zod";

// Rules from the contact-and-cv spec. `website` is the honeypot field:
// it is hidden for people, so only bots fill it.
export const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico no válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function isBot(data: ContactInput): boolean {
  return Boolean(data.website);
}

// Visitor text goes into HTML, so every special character is escaped first.
export function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildEmailHtml({ name, email, message }: ContactInput): string {
  return `
    <h1>Nuevo mensaje de contacto</h1>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
  `;
}
