import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  sendEmail: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
      email: z.string().email("Correo electrónico no válido"),
      message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
    }),
    handler: async ({ name, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['josejaviergarciap123@gmail.com'],
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `
          <h1>Nuevo mensaje de contacto</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }

      return {
        success: true,
        data,
      };
    },
  }),
};
