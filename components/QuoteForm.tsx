"use client";

import { FormEvent, useState } from "react";

const PROJECT_TYPES = [
  "Business cards & stationery",
  "Brochures / booklets",
  "Custom boxes & packaging",
  "Labels & hang tags",
  "Large-format / signage",
  "Something else",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend wired up yet — replace this with your API route or
    // form service (e.g. POST to /api/quote) when ready to go live.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="crop-marks border border-ink/15 p-8 text-center">
        <div className="job-label">Ticket received</div>
        <h2 className="mt-3 font-display text-2xl">Your request is in the queue.</h2>
        <p className="mt-3 text-sm text-ink/70">
          A production estimator will email you within one business day with
          pricing and a ship date.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="crop-marks border border-ink/15 p-6 sm:p-8">
      <div className="job-label">Quote Request — Job Ticket</div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div className="mt-5">
        <label className="job-label mb-2 block" htmlFor="projectType">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full border border-ink/25 bg-stock px-4 py-3 font-body text-sm text-ink focus:border-ink"
        >
          <option value="">Select a project type</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Quantity" name="quantity" placeholder="e.g. 5,000" />
        <Field label="Target ship date" name="shipDate" type="date" />
      </div>

      <div className="mt-5">
        <label className="job-label mb-2 block" htmlFor="details">
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Dimensions, stock, finish, reference files — anything that helps us quote accurately."
          className="w-full border border-ink/25 bg-stock px-4 py-3 font-body text-sm text-ink focus:border-ink"
        />
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Submit Ticket →
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="job-label mb-2 block" htmlFor={name}>
        {label}
        {required && <span className="text-magenta"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-ink/25 bg-stock px-4 py-3 font-body text-sm text-ink focus:border-ink"
      />
    </div>
  );
}
