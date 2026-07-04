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

type ContactSource = "direct-contact" | "pricing-calculator";
type SubmitState = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "Not sure yet",
  budget: "Not sure yet",
  timeline: "Not sure yet",
  message: "",
  honeypot: "",
};

function timelineFromEstimate(value?: string) {
  if (!value) {
    return "";
  }

  if (value === "Flexible timeline") {
    return "Flexible";
  }

  if (value === "Standard priority") {
    return "Standard priority";
  }

  if (value === "Rush timeline") {
    return "Rush or urgent";
  }

  return "";
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [estimateSummary, setEstimateSummary] = useState("");
  const [calculatorAnswers, setCalculatorAnswers] = useState<EstimateAnswers | null>(null);
  const [status, setStatus] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const inquiry = window.sessionStorage.getItem("twixalotEstimateInquiry");
    const answersRaw = window.sessionStorage.getItem("twixalotEstimateAnswers");

    if (!inquiry) {
      return;
    }

    const prefill = window.setTimeout(() => {
      setEstimateSummary(inquiry);
      setValues((current) => ({
        ...current,
        message: current.message || inquiry,
      }));

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
          budget: budgetRanges.includes("Calculator estimate attached") ? "Calculator estimate attached" : current.budget,
          timeline: mappedTimeline && timelineOptions.includes(mappedTimeline) ? mappedTimeline : current.timeline,
        }));
      } catch {
        // Ignore malformed saved estimates. The readable estimate summary is still submitted.
      }
    }, 0);

    return () => window.clearTimeout(prefill);
  }, []);

  const updateValue = (name: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => {
      if (!current[name]) {
        return current;
      }

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
      setStatusMessage("Thanks. Your inquiry has been sent, and I will get back to you soon.");
      setValues(initialValues);
      setEstimateSummary("");
      setCalculatorAnswers(null);
    } catch {
      setStatus("error");
      setStatusMessage("I could not send the message right now. Please try again in a moment.");
    }
  };

  return (
    <form className="grid gap-4" aria-label="Project inquiry form" onSubmit={handleSubmit}>
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
          Company / organisation
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
            Project type
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
            Estimated budget or calculator range
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
          Message
          <textarea
            name="message"
            rows={6}
            className="twix-input resize-y"
            required
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex min-h-13 w-full items-center justify-center bg-white px-6 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] sm:w-fit"
      >
        {status === "submitting" ? "Sending..." : "Start a project"}
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
