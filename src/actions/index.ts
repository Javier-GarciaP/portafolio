import { defineAction, ActionError } from "astro:actions";
import { Resend } from "resend";
import { contactSchema, isBot, buildEmailHtml } from "../lib/contact";

export const server = {
  sendEmail: defineAction({
    accept: "form",
    input: contactSchema,
    handler: async (input) => {
      // Bots get the same answer as people, so they learn nothing.
      if (isBot(input)) return { success: true };

      const apiKey = import.meta.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "El envío no está configurado todavía.",
        });
      }

      const { error } = await new Resend(apiKey).emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: ["josejaviergarciap123@gmail.com"],
        replyTo: input.email,
        subject: `Nuevo mensaje de contacto de ${input.name.replace(/[\r\n]+/g, " ")}`,
        html: buildEmailHtml(input),
      });
      if (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        });
      }
      return { success: true };
    },
  }),
};
