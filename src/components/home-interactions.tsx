"use client";

import { useState } from "react";

export default function HomeInteractions() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form
      className="quote-form"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        setStatus("submitting");
        setErrorMessage("");

        try {
          const response = await fetch("/api/quote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            const result = await response.json().catch(() => null);
            throw new Error(result?.error ?? "Unable to send your request.");
          }

          setStatus("success");
          form.reset();
        } catch (err) {
          setStatus("error");
          setErrorMessage(
            err instanceof Error ? err.message : "Unable to send your request.",
          );
        }
      }}
    >
      <label>
        Full Name *<input name="name" required autoComplete="name" />
      </label>
      <label>
        Company
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        Email *
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Pickup location
        <input name="pickup" />
      </label>
      <label>
        Delivery location
        <input name="delivery" />
      </label>
      <label className="field-full">
        Tell us about the shipment
        <textarea
          name="message"
          placeholder="Freight type, equipment required, timing, or other details"
        />
      </label>
      <button
        className="button button-orange field-full"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Submit quote request"}{" "}
        <span aria-hidden="true">→</span>
      </button>
      {status === "success" && (
        <p className="form-status" role="status">
          Thank you. Your request is ready to be reviewed by our team.
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
