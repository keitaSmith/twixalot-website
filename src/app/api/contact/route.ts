import { budgetRanges, projectTypes, timelineOptions } from "@/data/site";

const resendEndpoint = "https://api.resend.com/emails";
const recipient = "keita.smith@twixalot.com";
// TODO: Verify twixalot.com in Resend before production use of this sender.
const sender = "Twixalot Website <inquiries@twixalot.com>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  honeypot?: unknown;
  source?: unknown;
  calculatorPathway?: unknown;
  estimateLow?: unknown;
  estimateHigh?: unknown;
  monthlyCare?: unknown;
  monthlyCarePrice?: unknown;
  calculatorAnswers?: unknown;
  generatedEstimateSummary?: unknown;
};

type CalculatorAnswers = Record<string, unknown>;

const allowedSources = ["direct-contact", "pricing-calculator"] as const;

const trimString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isAllowed = (value: string, options: readonly string[]) => value === "" || options.includes(value);

const readableValue = (value: unknown): string => {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map(String).join(", ");
  }

  if (value === null || value === undefined || value === "") {
    return "";
  }

  if (typeof value === "object") {
    return formatObject(value as Record<string, unknown>)
      .map(([label, nestedValue]) => `${label}: ${nestedValue}`)
      .join("; ");
  }

  return String(value);
};

const labelFromKey = (key: string) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());

const formatObject = (value: Record<string, unknown>) =>
  Object.entries(value)
    .map(([key, entry]) => [labelFromKey(key), readableValue(entry)] as const)
    .filter(([, entry]) => entry);

const parseCalculatorAnswers = (value: unknown): CalculatorAnswers | null => {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value) as unknown;
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as CalculatorAnswers) : null;
    } catch {
      return null;
    }
  }

  if (typeof value === "object" && !Array.isArray(value)) {
    return value as CalculatorAnswers;
  }

  return null;
};

const textLine = (label: string, value: string) => (value ? `${label}: ${value}` : "");

const htmlRow = (label: string, value: string) => {
  if (!value) {
    return "";
  }

  return `<tr><th align="left" style="padding:8px 12px 8px 0;color:#334155;">${escapeHtml(label)}</th><td style="padding:8px 0;color:#0f172a;">${escapeHtml(value).replaceAll("\n", "<br />")}</td></tr>`;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (trimString(payload.honeypot)) {
    return Response.json({ ok: true });
  }

  const name = trimString(payload.name);
  const email = trimString(payload.email);
  const phone = trimString(payload.phone);
  const company = trimString(payload.company);
  const projectType = trimString(payload.projectType);
  const budget = trimString(payload.budget);
  const timeline = trimString(payload.timeline);
  const message = trimString(payload.message);
  const submittedSource = trimString(payload.source);
  const source = submittedSource || "direct-contact";
  const sourceLabel = source === "pricing-calculator" ? "pricing calculator" : "direct contact";
  const calculatorPathway = trimString(payload.calculatorPathway);
  const estimateLow = trimString(payload.estimateLow);
  const estimateHigh = trimString(payload.estimateHigh);
  const monthlyCare = trimString(payload.monthlyCare);
  const monthlyCarePrice = trimString(payload.monthlyCarePrice);
  const generatedEstimateSummary = trimString(payload.generatedEstimateSummary);
  const calculatorAnswers = parseCalculatorAnswers(payload.calculatorAnswers);

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your name.";
  if (!email || !isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (!message) errors.message = "Please tell me a little about the project.";
  if (!isAllowed(projectType, projectTypes)) errors.projectType = "Please choose a valid project type.";
  if (!isAllowed(budget, budgetRanges)) errors.budget = "Please choose a valid budget range.";
  if (!isAllowed(timeline, timelineOptions)) errors.timeline = "Please choose a valid timeline.";
  if (!allowedSources.includes(source as (typeof allowedSources)[number])) errors.source = "Please use a valid source.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ message: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json({ message: "Email sending is not configured yet." }, { status: 500 });
  }

  const answerRows = calculatorAnswers ? formatObject(calculatorAnswers) : [];
  const estimateRange = estimateLow && estimateHigh ? `${estimateLow} to ${estimateHigh}` : "";
  const subject = `New Twixalot inquiry from ${name}`;
  const text = [
    textLine("Name", name),
    textLine("Email", email),
    textLine("Phone", phone),
    textLine("Company or organisation", company),
    textLine("Project type", projectType),
    textLine("Estimated budget or calculator range", budget),
    textLine("Timeline", timeline),
    textLine("Source", sourceLabel),
    textLine("Calculator pathway", calculatorPathway),
    textLine("Calculator estimate range", estimateRange),
    textLine("Monthly care", monthlyCarePrice ? `${monthlyCare} (${monthlyCarePrice} per month)` : monthlyCare),
    "",
    "Message:",
    message,
    generatedEstimateSummary ? `\nPricing estimate summary:\n${generatedEstimateSummary}` : "",
    answerRows.length
      ? `\nCalculator answers:\n${answerRows.map(([label, value]) => `${label}: ${value}`).join("\n")}`
      : "",
  ]
    .filter((line) => line !== "")
    .join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#0f172a;">
      <h1 style="font-size:22px;margin:0 0 16px;">New Twixalot inquiry</h1>
      <table style="border-collapse:collapse;margin-bottom:24px;">
        ${htmlRow("Name", name)}
        ${htmlRow("Email", email)}
        ${htmlRow("Phone", phone)}
        ${htmlRow("Company or organisation", company)}
        ${htmlRow("Project type", projectType)}
        ${htmlRow("Estimated budget or calculator range", budget)}
        ${htmlRow("Timeline", timeline)}
        ${htmlRow("Source", sourceLabel)}
        ${htmlRow("Calculator pathway", calculatorPathway)}
        ${htmlRow("Calculator estimate range", estimateRange)}
        ${htmlRow("Monthly care", monthlyCarePrice ? `${monthlyCare} (${monthlyCarePrice} per month)` : monthlyCare)}
      </table>
      <h2 style="font-size:16px;margin:24px 0 8px;">Message</h2>
      <p style="white-space:normal;margin:0 0 20px;">${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      ${
        generatedEstimateSummary
          ? `<h2 style="font-size:16px;margin:24px 0 8px;">Pricing estimate summary</h2><p style="margin:0 0 20px;">${escapeHtml(generatedEstimateSummary).replaceAll("\n", "<br />")}</p>`
          : ""
      }
      ${
        answerRows.length
          ? `<h2 style="font-size:16px;margin:24px 0 8px;">Calculator answers</h2><table style="border-collapse:collapse;">${answerRows
              .map(([label, value]) => htmlRow(label, value))
              .join("")}</table>`
          : ""
      }
    </div>
  `;

  try {
    const response = await fetch(resendEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      return Response.json({ message: "I could not send the message right now. Please try again in a moment." }, { status: 502 });
    }

    // TODO: Update the Privacy Policy to mention Resend once contact email sending is active.
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "I could not send the message right now. Please try again in a moment." }, { status: 502 });
  }
}
