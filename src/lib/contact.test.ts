import { test } from "node:test";
import assert from "node:assert/strict";
import { contactSchema, buildEmailHtml, isBot } from "./contact.ts";

const valid = {
  name: "Ana",
  email: "ana@example.com",
  message: "Hola, necesito un sistema de ventas.",
};

// Valid data must pass, otherwise real clients could not write.
test("accepts a valid message", () => {
  assert.equal(contactSchema.safeParse(valid).success, true);
});

// Spec: a message under 10 characters shows a Spanish error and sends nothing.
test("rejects a message shorter than 10 characters", () => {
  const result = contactSchema.safeParse({ ...valid, message: "corto" });
  assert.equal(result.success, false);
  assert.match(result.error!.issues[0].message, /al menos 10 caracteres/);
});

test("rejects a short name and a bad email", () => {
  assert.equal(contactSchema.safeParse({ ...valid, name: "A" }).success, false);
  assert.equal(
    contactSchema.safeParse({ ...valid, email: "no-es-correo" }).success,
    false,
  );
});

// Spec: a <script> in the message must be shown as text in the email.
test("escapes HTML in the email body", () => {
  const html = buildEmailHtml({
    ...valid,
    message: "<script>alert(1)</script> & más",
  });
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes("&lt;script&gt;alert(1)&lt;/script&gt; &amp; más"));
});

// Spec: a filled hidden field means a bot, and the send is dropped.
test("detects the honeypot", () => {
  assert.equal(isBot({ ...valid, website: "http://spam.example" }), true);
  assert.equal(isBot({ ...valid, website: "" }), false);
  assert.equal(isBot(valid), false);
});
