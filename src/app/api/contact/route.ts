import { budgetRanges, projectTypes, timelineOptions } from "@/data/site";

const resendEndpoint = "https://api.resend.com/emails";
// TODO: Verify twixalot.com in Resend before production use of these senders.
const defaultRecipient = "keita.smith@twixalot.com";
const defaultEnquiriesFrom = "enquiries@twixalot.com";
const defaultNoReplyFrom = "noreply@twixalot.com";

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

type SummaryBlock = {
  label: string;
  value: string;
  wide?: boolean;
};

const allowedSources = ["direct-contact", "pricing-calculator"] as const;
const noMessageText = "No additional message was provided.";
const noEstimateText = "No calculator estimate was provided.";

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

const labelFromKey = (key: string) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());

const parseCalculatorAnswers = (value: unknown): CalculatorAnswers | null => {
  if (!value) return null;

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value) as unknown;
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as CalculatorAnswers) : null;
    } catch {
      return null;
    }
  }

  return typeof value === "object" && !Array.isArray(value) ? (value as CalculatorAnswers) : null;
};

const readableValue = (value: unknown): string => {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map(String).join("\n");
  }

  if (value === null || value === undefined || value === "") {
    return "";
  }

  if (typeof value === "object") {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, entry]) => `${labelFromKey(key)}: ${readableValue(entry)}`)
      .filter(Boolean)
      .join("\n");
  }

  return String(value);
};

const formatCalculatorResponses = (answers: CalculatorAnswers | null): SummaryBlock[] => {
  if (!answers) return [];

  const selectedAnswers = answers.selectedAnswers;
  const source = selectedAnswers && typeof selectedAnswers === "object" && !Array.isArray(selectedAnswers)
    ? (selectedAnswers as Record<string, unknown>)
    : answers;

  return Object.entries(source)
    .filter(([key]) => !["source", "selectedAnswers", "generatedEstimateSummary"].includes(key))
    .map(([key, value]) => {
      const readable = readableValue(value);
      return {
        label: source === answers ? labelFromKey(key) : key,
        value: readable,
        wide: readable.length > 60 || readable.includes("\n"),
      };
    })
    .filter((item) => item.value);
};

const textLine = (label: string, value: string) => (value ? `${label}: ${value}` : "");

const valueHtml = (value: string) => {
  const lines = value
    .split(/\n|,\s+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (lines.length > 1) {
    return `<ul style="margin:0;padding:0 0 0 18px;">${lines.map((line) => `<li style="margin:0 0 4px;">${escapeHtml(line)}</li>`).join("")}</ul>`;
  }

  return escapeHtml(value).replaceAll("\n", "<br />");
};

const cardCell = (block: SummaryBlock, width: string) => `
  <td width="${width}" valign="top" style="padding:6px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;">
      <tr>
        <td style="padding:14px 16px;">
          <div style="font-size:11px;line-height:16px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">${escapeHtml(block.label)}</div>
          <div style="margin-top:6px;font-size:15px;line-height:22px;color:#0f172a;">${valueHtml(block.value)}</div>
        </td>
      </tr>
    </table>
  </td>
`;

const cardGrid = (blocks: SummaryBlock[]) => {
  const rows: string[] = [];
  let pending: SummaryBlock | null = null;

  for (const block of blocks) {
    if (block.wide) {
      if (pending) {
        rows.push(`<tr>${cardCell(pending, "50%")}<td width="50%" style="padding:6px;"></td></tr>`);
        pending = null;
      }
      rows.push(`<tr>${cardCell(block, "100%")}</tr>`);
      continue;
    }

    if (pending) {
      rows.push(`<tr>${cardCell(pending, "50%")}${cardCell(block, "50%")}</tr>`);
      pending = null;
    } else {
      pending = block;
    }
  }

  if (pending) {
    rows.push(`<tr>${cardCell(pending, "50%")}<td width="50%" style="padding:6px;"></td></tr>`);
  }

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows.join("")}</table>`;
};

const section = (title: string, blocks: SummaryBlock[], emptyText?: string) => `
  <tr>
    <td style="padding-top:24px;">
      <h2 style="margin:0 0 10px;font-size:16px;line-height:22px;color:#0f172a;">${escapeHtml(title)}</h2>
      ${
        blocks.length
          ? cardGrid(blocks)
          : `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;"><tr><td style="padding:14px 16px;font-size:15px;line-height:22px;color:#475569;">${escapeHtml(emptyText || "")}</td></tr></table>`
      }
    </td>
  </tr>
`;

const emailShell = ({ heading, intro, sections, footer }: { heading: string; intro: string; sections: string; footer: string }) => `
  <!doctype html>
  <html>
    <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;color:#0f172a;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#f1f5f9;">
        <tr>
          <td align="center" style="padding:28px 14px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:720px;border-collapse:separate;border-spacing:0;background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;">
              <tr>
                <td style="padding:28px 28px 8px;">
                  <div style="font-size:12px;line-height:18px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0b4fd9;">Twixalot</div>
                  <h1 style="margin:8px 0 10px;font-size:26px;line-height:32px;color:#020617;">${escapeHtml(heading)}</h1>
                  <p style="margin:0;font-size:15px;line-height:24px;color:#475569;">${escapeHtml(intro)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:0 22px 28px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                    ${sections}
                  </table>
                </td>
              </tr>
              <tr>
                <td style="border-top:1px solid #e2e8f0;padding:18px 28px;font-size:12px;line-height:20px;color:#64748b;">
                  ${escapeHtml(footer)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

const sendEmail = async ({
  apiKey,
  from,
  to,
  replyTo,
  subject,
  html,
  text,
}: {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
}) =>
  fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      html,
      text,
    }),
  });

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
  const sourceLabel = source === "pricing-calculator" ? "Pricing Calculator" : "Direct Contact";
  const calculatorPathway = trimString(payload.calculatorPathway);
  const estimateLow = trimString(payload.estimateLow);
  const estimateHigh = trimString(payload.estimateHigh);
  const monthlyCare = trimString(payload.monthlyCare);
  const monthlyCarePrice = trimString(payload.monthlyCarePrice);
  const calculatorAnswers = parseCalculatorAnswers(payload.calculatorAnswers);

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your name.";
  if (!email || !isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (!isAllowed(projectType, projectTypes)) errors.projectType = "Please choose a valid project type.";
  if (!isAllowed(budget, budgetRanges)) errors.budget = "Please choose a valid budget range.";
  if (!isAllowed(timeline, timelineOptions)) errors.timeline = "Please choose a valid timeline.";
  if (!allowedSources.includes(source as (typeof allowedSources)[number])) errors.source = "Please use a valid source.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ message: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.ENQUIRIES_TO_EMAIL?.trim() || process.env.CONTACT_EMAIL_TO?.trim() || defaultRecipient;
  const enquiriesFromAddress = process.env.ENQUIRIES_FROM_EMAIL?.trim() || "enquiries@twixalot.com";
  const noReplyFromAddress = process.env.NOREPLY_FROM_EMAIL?.trim() || "noreply@twixalot.com";
  const internalFrom = `Twixalot Website <${enquiriesFromAddress || defaultEnquiriesFrom}>`;
  const clientFrom = `Twixalot <${noReplyFromAddress || defaultNoReplyFrom}>`;

  if (!apiKey) {
    return Response.json({ message: "Email sending is not configured yet. Missing RESEND_API_KEY." }, { status: 500 });
  }

  const estimateRange = estimateLow && estimateHigh ? `${estimateLow} to ${estimateHigh}` : "";
  const contactBlocks: SummaryBlock[] = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Company / Business Name", value: company },
  ].filter((item) => item.value);

  const estimateBlocks: SummaryBlock[] = [
    { label: "Selected Service / Package", value: calculatorPathway || projectType },
    { label: "Estimated Price / Range", value: estimateRange || budget },
    { label: "Timeline / Urgency", value: timeline },
    { label: "Project Type / Category", value: projectType },
    { label: "Monthly Care", value: monthlyCarePrice ? `${monthlyCare} (${monthlyCarePrice} per month)` : monthlyCare },
  ].filter((item) => item.value && item.value !== "Not Sure Yet");

  const responseBlocks = formatCalculatorResponses(calculatorAnswers);
  const messageBlocks: SummaryBlock[] = [{ label: "Additional Message", value: message || noMessageText, wide: true }];
  const submittedAt = new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Zurich" });

  const internalSections = [
    section("Contact Details", contactBlocks),
    section("Estimate Overview", estimateBlocks, noEstimateText),
    section("Calculator Responses", responseBlocks, noEstimateText),
    section("Additional Message", messageBlocks),
  ].join("");
  const clientSections = internalSections;

  const internalHtml = emailShell({
    heading: "New Twixalot Enquiry",
    intro: "A new enquiry has been submitted through the Twixalot website.",
    sections: internalSections,
    footer: `Submitted ${submittedAt}. Source: ${sourceLabel}. The estimate came from the website calculator when calculator details are present.`,
  });
  const clientHtml = emailShell({
    heading: "Thank You For Your Enquiry",
    intro:
      "Thank you for your enquiry. The contents of this email provide a summary of the information you provided during your estimate calculation. I will be in touch as soon as possible to set up an initial consultation.",
    sections: clientSections,
    footer: "In the meantime, feel free to contact me directly at keita.smith@twixalot.com or by phone at +41 76 324 51 00.",
  });

  const summaryText = [
    "Contact Details",
    ...contactBlocks.map((item) => textLine(item.label, item.value)),
    "",
    "Estimate Overview",
    ...(estimateBlocks.length ? estimateBlocks.map((item) => textLine(item.label, item.value)) : [noEstimateText]),
    "",
    "Calculator Responses",
    ...(responseBlocks.length ? responseBlocks.map((item) => textLine(item.label, item.value)) : [noEstimateText]),
    "",
    "Additional Message",
    message || noMessageText,
  ].join("\n");

  try {
    const internalResponse = await sendEmail({
      apiKey,
      from: internalFrom,
      to: recipient,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html: internalHtml,
      text: `New Twixalot enquiry\n\nA new enquiry has been submitted through the Twixalot website.\n\n${summaryText}\n\nSubmitted: ${submittedAt}\nSource: ${sourceLabel}`,
    });

    if (!internalResponse.ok) {
      return Response.json({ message: "I could not send the enquiry right now. Please try again in a moment." }, { status: 502 });
    }

    const clientResponse = await sendEmail({
      apiKey,
      from: clientFrom,
      to: email,
      replyTo: recipient,
      subject: "Thank you for your enquiry — Twixalot",
      html: clientHtml,
      text: `Hi ${name},\n\nThank you for your enquiry. The contents of this email provide a summary of the information you provided during your estimate calculation. I will be in touch as soon as possible to set up an initial consultation.\n\n${summaryText}\n\nIn the meantime, feel free to contact me directly at keita.smith@twixalot.com or by phone at +41 76 324 51 00.`,
    });

    if (!clientResponse.ok) {
      return Response.json({ message: "Your enquiry reached Twixalot, but the confirmation email could not be sent. Please contact me directly if you need a copy." }, { status: 502 });
    }

    // TODO: Update the Privacy Policy to mention Resend once contact email sending is active.
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "I could not send the enquiry right now. Please try again in a moment." }, { status: 502 });
  }
}
