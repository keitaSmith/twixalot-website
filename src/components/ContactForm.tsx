"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import { budgetRanges, projectTypes, timelineOptions } from "@/data/site";

type EstimateAnswers = {
  source?: string;
  projectPathway?: string;
  calculatorPathway?: string;
  estimateRange?: string;
  estimateLow?: string;
  estimateHigh?: string;
  monthlyCare?: string;
  monthlyCarePrice?: string;
  timeline?: string;
  generatedEstimateSummary?: string;
  selectedAnswers?: Record<string, unknown>;
  [key: string]: unknown;
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  honeypot: string;
};

type SummaryBlock = {
  label: string;
  value: string;
  wide?: boolean;
};

type SubmittedSummary = {
  contact: SummaryBlock[];
  estimate: SummaryBlock[];
  responses: SummaryBlock[];
  message: string;
};

type ContactSource = "direct-contact" | "pricing-calculator";
type SubmitState = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "Not Sure Yet",
  budget: "Not Sure Yet",
  timeline: "Not Sure Yet",
  message: "",
  honeypot: "",
};

const noMessageText = "No additional message was provided.";
const noEstimateText = "No calculator estimate was provided.";

function timelineFromEstimate(value?: string) {
  if (!value) return "";
  if (value === "Flexible Timeline") return "Flexible";
  if (value === "Standard Priority") return "Standard Priority";
  if (value === "Rush Timeline") return "Rush Or Urgent";
  return "";
}

function readableValue(value: unknown): string {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map(String).join("\n");
  }

  if (value === null || value === undefined || value === "") {
    return "";
  }

  if (typeof value === "object") {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, entry]) => `${key}: ${readableValue(entry)}`)
      .filter(Boolean)
      .join("\n");
  }

  return String(value);
}

function calculatorResponseBlocks(answers: EstimateAnswers | null): SummaryBlock[] {
  if (!answers) return [];

  const selectedAnswers = answers.selectedAnswers;
  const source = selectedAnswers && typeof selectedAnswers === "object" && !Array.isArray(selectedAnswers)
    ? selectedAnswers
    : answers;

  return Object.entries(source)
    .filter(([key]) => !["source", "selectedAnswers", "generatedEstimateSummary"].includes(key))
    .map(([label, value]) => {
      const readable = readableValue(value);
      return {
        label,
        value: readable,
        wide: readable.length > 60 || readable.includes("\n"),
      };
    })
    .filter((item) => item.value);
}

function buildSubmittedSummary(values: FormValues, calculatorAnswers: EstimateAnswers | null): SubmittedSummary {
  const estimateRange =
    calculatorAnswers?.estimateLow && calculatorAnswers?.estimateHigh
      ? `${calculatorAnswers.estimateLow} to ${calculatorAnswers.estimateHigh}`
      : "";

  return {
    contact: [
      { label: "Name", value: values.name },
      { label: "Email", value: values.email },
      { label: "Phone", value: values.phone },
      { label: "Company / Business Name", value: values.company },
    ].filter((item) => item.value),
    estimate: [
      { label: "Selected Service / Package", value: calculatorAnswers?.calculatorPathway || calculatorAnswers?.projectPathway || values.projectType },
      { label: "Estimated Price / Range", value: estimateRange || values.budget },
      { label: "Timeline / Urgency", value: values.timeline },
      { label: "Project Type / Category", value: values.projectType },
      {
        label: "Monthly Care",
        value: calculatorAnswers?.monthlyCarePrice
          ? `${calculatorAnswers.monthlyCare || "Care Plan"} (${calculatorAnswers.monthlyCarePrice} per month)`
          : calculatorAnswers?.monthlyCare || "",
      },
    ].filter((item) => item.value && item.value !== "Not Sure Yet"),
    responses: calculatorResponseBlocks(calculatorAnswers),
    message: values.message.trim() || noMessageText,
  };
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [estimateSummary, setEstimateSummary] = useState("");
  const [calculatorAnswers, setCalculatorAnswers] = useState<EstimateAnswers | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<SubmittedSummary | null>(null);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const enquiry = window.sessionStorage.getItem("twixalotEstimateInquiry");
    const answersRaw = window.sessionStorage.getItem("twixalotEstimateAnswers");

    if (!enquiry && !answersRaw) {
      return;
    }

    const prefill = window.setTimeout(() => {
      setEstimateSummary(enquiry || "");

      if (!answersRaw) {
        return;
      }

      try {
        const answers = JSON.parse(answersRaw) as EstimateAnswers;
        const mappedProjectType = answers.calculatorPathway || answers.projectPathway || "";
        const mappedTimeline = timelineFromEstimate(answers.timeline);

        setCalculatorAnswers(answers);
        setValues((current) => ({
          ...current,
          projectType: mappedProjectType && projectTypes.includes(mappedProjectType) ? mappedProjectType : current.projectType,
          budget: budgetRanges.includes("Calculator Estimate Attached") ? "Calculator Estimate Attached" : current.budget,
          timeline: mappedTimeline && timelineOptions.includes(mappedTimeline) ? mappedTimeline : current.timeline,
        }));
      } catch {
        // Ignore malformed saved estimates. The visible message remains reserved for the client's own note.
      }
    }, 0);

    return () => window.clearTimeout(prefill);
  }, []);

  const updateValue = (name: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");
    setFieldErrors({});

    const source: ContactSource = estimateSummary || calculatorAnswers ? "pricing-calculator" : "direct-contact";
    const calculatorAnswersJson = calculatorAnswers ? JSON.stringify(calculatorAnswers) : "";
    const summary = buildSubmittedSummary(values, calculatorAnswers);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source,
          calculatorPathway: calculatorAnswers?.calculatorPathway || calculatorAnswers?.projectPathway || "",
          estimateLow: calculatorAnswers?.estimateLow || "",
          estimateHigh: calculatorAnswers?.estimateHigh || "",
          monthlyCare: calculatorAnswers?.monthlyCare || "",
          monthlyCarePrice: calculatorAnswers?.monthlyCarePrice || "",
          calculatorAnswers: calculatorAnswersJson,
          generatedEstimateSummary: calculatorAnswers?.generatedEstimateSummary || estimateSummary,
        }),
      });
      const result = (await response.json()) as {
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(result.message || "Something went wrong. Please try again.");
        setFieldErrors(result.errors || {});
        return;
      }

      window.sessionStorage.removeItem("twixalotEstimateInquiry");
      window.sessionStorage.removeItem("twixalotEstimateAnswers");
      setStatus("success");
      setStatusMessage("Your enquiry was sent successfully. A confirmation email has been sent to you.");
      setSubmittedSummary(summary);
      setValues(initialValues);
      setEstimateSummary("");
      setCalculatorAnswers(null);
    } catch {
      setStatus("error");
      setStatusMessage("I could not send the enquiry right now. Please try again in a moment.");
    }
  };

  return (
    <form className="grid gap-4" aria-label="Project enquiry form" onSubmit={handleSubmit}>
      {estimateSummary || calculatorAnswers ? (
        <div className="rounded-[8px] border border-[rgba(11,79,217,0.34)] bg-[rgba(11,79,217,0.1)] p-4 text-sm leading-7 text-white/72">
          Your estimate from the calculator has been noted. Please complete your contact details below and add any extra message you would like to send.
        </div>
      ) : null}

      <label className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        Leave this field empty
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.honeypot}
          onChange={(event) => updateValue("honeypot", event.target.value)}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <FieldError error={fieldErrors.name}>
          <label className="grid gap-2 text-sm font-medium text-white/76">
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              className="twix-input"
              required
              value={values.name}
              onChange={(event) => updateValue("name", event.target.value)}
            />
          </label>
        </FieldError>
        <FieldError error={fieldErrors.email}>
          <label className="grid gap-2 text-sm font-medium text-white/76">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              className="twix-input"
              required
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
            />
          </label>
        </FieldError>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="twix-input"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Company / Organisation
          <input
            name="company"
            type="text"
            autoComplete="organization"
            className="twix-input"
            value={values.company}
            onChange={(event) => updateValue("company", event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <FieldError error={fieldErrors.projectType}>
          <label className="grid gap-2 text-sm font-medium text-white/76">
            Project Type
            <select
              name="projectType"
              className="twix-input"
              value={values.projectType}
              onChange={(event) => updateValue("projectType", event.target.value)}
            >
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
        </FieldError>
        <FieldError error={fieldErrors.budget}>
          <label className="grid gap-2 text-sm font-medium text-white/76">
            Estimated Budget Or Calculator Range
            <select
              name="budget"
              className="twix-input"
              value={values.budget}
              onChange={(event) => updateValue("budget", event.target.value)}
            >
              {budgetRanges.map((range) => (
                <option key={range}>{range}</option>
              ))}
            </select>
          </label>
        </FieldError>
        <FieldError error={fieldErrors.timeline}>
          <label className="grid gap-2 text-sm font-medium text-white/76">
            Timeline
            <select
              name="timeline"
              className="twix-input"
              value={values.timeline}
              onChange={(event) => updateValue("timeline", event.target.value)}
            >
              {timelineOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </FieldError>
      </div>

      <FieldError error={fieldErrors.message}>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Additional Message
          <textarea
            name="message"
            rows={6}
            className="twix-input resize-y"
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
          />
        </label>
      </FieldError>

      {statusMessage ? (
        <p
          className={`rounded-[8px] border p-3 text-sm leading-6 ${
            status === "success"
              ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
              : "border-[rgba(226,7,86,0.35)] bg-[rgba(226,7,86,0.1)] text-white/76"
          }`}
          role={status === "error" ? "alert" : "status"}
        >
          {statusMessage}
        </p>
      ) : null}

      {submittedSummary ? <SubmittedSummaryCard summary={submittedSummary} /> : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex min-h-13 w-full items-center justify-center bg-white px-6 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] sm:w-fit"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

function FieldError({ children, error }: { children: ReactNode; error?: string }) {
  return (
    <div>
      {children}
      {error ? <p className="mt-2 text-xs leading-5 text-[var(--color-magenta)]">{error}</p> : null}
    </div>
  );
}

function SubmittedSummaryCard({ summary }: { summary: SubmittedSummary }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5">
      <h2 className="text-xl font-semibold text-white">Enquiry Summary</h2>
      <p className="mt-2 text-sm leading-7 text-white/58">Here is a copy of the information that was submitted.</p>
      <SummarySection title="Contact Details" blocks={summary.contact} />
      <SummarySection title="Estimate Overview" blocks={summary.estimate} emptyText={noEstimateText} />
      <SummarySection title="Calculator Responses" blocks={summary.responses} emptyText={noEstimateText} />
      <SummarySection title="Additional Message" blocks={[{ label: "Message", value: summary.message, wide: true }]} />
    </div>
  );
}

function SummarySection({ title, blocks, emptyText }: { title: string; blocks: SummaryBlock[]; emptyText?: string }) {
  return (
    <section className="mt-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/42">{title}</h3>
      {blocks.length > 0 ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {blocks.map((block) => (
            <div key={`${title}-${block.label}`} className={`rounded-[8px] bg-[#050b1d]/72 p-4 ${block.wide ? "sm:col-span-2" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/38">{block.label}</p>
              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-white/72">{block.value}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-3 rounded-[8px] bg-[#050b1d]/72 p-4 text-sm leading-6 text-white/58">{emptyText}</p>
      )}
    </section>
  );
}
