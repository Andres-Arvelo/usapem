"use client";

import { FormEvent, useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send message.");
      }

      setFormData(initialFormData);
      setStatus("sent");
      setStatusMessage("Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Drop us a line!</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        required
      />
      <textarea
        name="message"
        rows={7}
        placeholder="Message"
        value={formData.message}
        onChange={(event) =>
          setFormData({ ...formData, message: event.target.value })
        }
        required
      />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "SENDING..." : "SEND"}
      </button>

      {statusMessage ? (
        <p className={`contact-status contact-status-${status}`} role="status">
          {statusMessage}
        </p>
      ) : null}

      <p className="contact-recaptcha">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </p>
    </form>
  );
}
