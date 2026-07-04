"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EstimateSummary } from "./EstimateSummary";

type PathwayKey = "launch" | "signature" | "content" | "custom";
type DesignKey = "clean" | "branded" | "premium" | "cinematic";
type CmsKey = "none" | "basic" | "structured" | "advanced";

type PriceOption = {
  label: string;
  value: string;
  amount: number;
  detail?: string;
  description?: string;
  examples?: string[];
};

type SummaryLine = {
  label: string;
  detail?: string;
  amount?: string;
  tone?: "included" | "added" | "upgrade";
};

type Pathway = {
  label: string;
  value: PathwayKey;
  base: number;
  includedPages: string;
  includedDesign: DesignKey;
  includedCms: CmsKey;
  includedScope: string[];
};

type CarePlan = PriceOption & {
  subtitle: string;
  chooseIfText: string;
  includes: string[];
  explanation: string;
};

const pathways: Pathway[] = [
  {
    label: "Launch Website",
    value: "launch",
    base: 2900,
    includedPages: "Up to 5 pages",
    includedDesign: "clean",
    includedCms: "none",
    includedScope: ["Up to 5 pages", "Clean responsive design", "Simple contact form", "Basic SEO setup", "Basic launch support", "No CMS by default"],
  },
  {
    label: "Signature Website",
    value: "signature",
    base: 6900,
    includedPages: "Up to 8 pages",
    includedDesign: "branded",
    includedCms: "none",
    includedScope: ["Up to 8 pages", "Custom branded design", "Polished responsive layout", "Light animations and visual polish", "Contact form and basic SEO setup", "Launch support"],
  },
  {
    label: "Content Platform",
    value: "content",
    base: 9500,
    includedPages: "Up to 10 pages",
    includedDesign: "branded",
    includedCms: "structured",
    includedScope: ["Up to 10 pages", "Structured CMS setup", "Up to 3 content types", "One primary content area", "Contact form and basic SEO setup", "CMS handover"],
  },
  {
    label: "Custom System",
    value: "custom",
    base: 12000,
    includedPages: "Up to 5 public or admin screens",
    includedDesign: "clean",
    includedCms: "structured",
    includedScope: ["Discovery and workflow mapping", "Custom app/system foundation", "Database-backed structure", "One primary workflow", "Admin or dashboard foundation", "Launch support"],
  },
];

const pageScopeOptions: PriceOption[] = [
  { label: "Within Included Page Allowance", value: "included", amount: 0 },
  { label: "Slightly Above Included Allowance", value: "slight", amount: 1200, detail: "Additional page or screen scope" },
  { label: "Medium Page Or Screen Expansion", value: "medium", amount: 2800, detail: "Additional page or screen scope" },
  { label: "Large Page Or Screen Expansion", value: "large", amount: 5000, detail: "Additional page or screen scope" },
];

const designOptions: Array<PriceOption & { value: DesignKey }> = [
  {
    label: "Clean And Focused",
    value: "clean",
    amount: 0,
    description:
      "A professional, responsive layout with clear spacing, strong readability and simple visual polish.",
    examples: ["Simple service website", "Landing page", "Minimal animation"],
  },
  {
    label: "Custom Branded",
    value: "branded",
    amount: 0,
    description:
      "A website shaped around the brand with more tailored sections, typography, colour, imagery and refined UI details.",
    examples: ["Custom hero sections", "Branded layouts", "Light tasteful motion"],
  },
  {
    label: "Premium Visual Direction",
    value: "premium",
    amount: 0,
    description:
      "A stronger creative direction with more distinctive layouts, richer visual treatments and additional visual polish.",
    examples: ["Expressive homepage", "Custom visual treatments", "More careful responsive QA"],
  },
  {
    label: "Highly Animated Or Cinematic",
    value: "cinematic",
    amount: 0,
    description:
      "Advanced visual storytelling with custom motion, scroll-based interactions, cinematic hero sections, video, 3D or complex transitions.",
    examples: ["GSAP scroll scenes", "Video or 3D-led sections", "Extra performance testing"],
  },
];

const cmsOptions: Array<PriceOption & { value: CmsKey; baseAmount: number }> = [
  {
    label: "No CMS",
    value: "none",
    amount: 0,
    baseAmount: 0,
    description: "Mostly fixed content. Future changes are handled by a developer.",
  },
  {
    label: "Basic CMS Editing",
    value: "basic",
    amount: 0,
    baseAmount: 1800,
    description: "Simple editing for a few areas such as text, images or basic page sections.",
  },
  {
    label: "Structured CMS",
    value: "structured",
    amount: 0,
    baseAmount: 3500,
    description: "A proper content structure for services, news, events, people, resources or partners. Included in Content Platform projects.",
  },
  {
    label: "Advanced CMS",
    value: "advanced",
    amount: 0,
    baseAmount: 6000,
    description: "More complex content management with multiple content types, relationships, filters, media, multilingual content or editorial workflows.",
  },
];

const languageOptions: PriceOption[] = [
  { label: "One Language", value: "one", amount: 0 },
  { label: "Two Languages", value: "two", amount: 1200, detail: "Two-language setup" },
  { label: "Three Or More Languages", value: "three-plus", amount: 2500, detail: "Multilingual content setup" },
];

const contentHelpOptions: PriceOption[] = [
  { label: "Client Provides Final Content", value: "provided", amount: 0, description: "You provide the finished text, images and core content." },
  { label: "Light Editing And Formatting", value: "light", amount: 900, description: "I lightly edit, format and place supplied content." },
  { label: "Content Structure And Rewrite Support", value: "rewrite", amount: 2000, description: "I help structure pages and improve rough copy." },
  { label: "Heavy Content Planning And Page Writing Support", value: "heavy", amount: 4000, description: "I help plan, write and shape substantial page content." },
];

const contentModules: PriceOption[] = [
  { label: "News Or Blog", value: "news", amount: 1200 },
  { label: "Events Calendar", value: "events", amount: 1800 },
  { label: "Resources Directory", value: "resources", amount: 1800 },
  { label: "Services Section", value: "services", amount: 1000 },
  { label: "People Or Team Profiles", value: "people", amount: 1000 },
  { label: "Partners Or Sponsors", value: "partners", amount: 1200 },
  { label: "Community Updates", value: "community", amount: 1200 },
  { label: "Jobs Or Opportunities", value: "jobs", amount: 1800 },
  { label: "Media Gallery Or Video Library", value: "media", amount: 2200 },
  { label: "Product Catalogue", value: "products", amount: 3000 },
];

const integrationOptions: PriceOption[] = [
  { label: "Newsletter Integration", value: "newsletter", amount: 800 },
  { label: "Calendar Integration", value: "calendar", amount: 1200 },
  { label: "Booking Flow", value: "booking", amount: 2500 },
  { label: "Payments", value: "payments", amount: 2800 },
  { label: "Memberships Or Gated Content", value: "memberships", amount: 4500 },
  { label: "Multiple APIs Or Custom Integrations", value: "apis", amount: 5500 },
  { label: "Blog Or News Section", value: "feature-news", amount: 1200 },
  { label: "Events Calendar", value: "feature-events", amount: 1800 },
  { label: "E-Commerce Or Product Catalogue", value: "feature-commerce", amount: 3500 },
  { label: "Member Area Or Login", value: "feature-members", amount: 4500 },
  { label: "Dashboard Or Admin Workflow", value: "feature-dashboard", amount: 6000 },
  { label: "Migration From Old Website", value: "migration", amount: 1500 },
  { label: "SEO Setup", value: "seo", amount: 0, detail: "Basic SEO setup is included in the pathway." },
  { label: "Analytics Setup", value: "analytics", amount: 500 },
  { label: "Training Or Handover Session", value: "training", amount: 600 },
];

const timelineOptions: Array<PriceOption & { multiplier?: number }> = [
  { label: "Flexible Timeline", value: "flexible", amount: 0 },
  { label: "Standard Priority", value: "standard", amount: 800 },
  { label: "Rush Timeline", value: "rush", amount: 0, multiplier: 1.2, description: "Requires schedule compression, priority planning and a 20 percent estimate increase." },
];

const careOptions: CarePlan[] = [
  {
    label: "No Monthly Care",
    value: "none",
    amount: 0,
    subtitle: "Project Handover Only",
    chooseIfText: "Your website is mostly finished, rarely changes and you prefer to request future updates separately.",
    includes: ["Final launch support", "Basic handover", "Basic documentation where appropriate", "Future work quoted separately"],
    explanation: "Good for simple sites that do not need regular attention after launch.",
  },
  {
    label: "Basic Care",
    value: "basic",
    amount: 290,
    subtitle: "Peace Of Mind For Simple Websites",
    chooseIfText: "Your site is small, does not change often, but you want light technical support after launch.",
    includes: ["Monthly technical check", "Minor bug fixes", "Small text, image or layout updates", "Email support", "Up to 1 hour of small updates per month"],
    explanation: "Recommended for simple websites that need light ongoing help, occasional fixes and technical peace of mind after launch.",
  },
  {
    label: "Standard Care",
    value: "standard",
    amount: 490,
    subtitle: "Regular Support For CMS Websites",
    chooseIfText: "Your website has a CMS, regular content updates or needs small improvements over time.",
    includes: ["Everything in Basic Care", "Up to 2.5 hours of updates per month", "CMS content support", "Small design or layout improvements", "Priority bug fixes", "Quarterly review"],
    explanation: "Recommended for CMS websites and content platforms that need regular updates, CMS help and small improvements after launch.",
  },
  {
    label: "Growth Care",
    value: "growth",
    amount: 900,
    subtitle: "Ongoing Improvements For Active Platforms",
    chooseIfText: "Your website or platform is active, changes often or plays an important role in your business, community or organisation.",
    includes: ["Everything in Standard Care", "Up to 5 hours of updates or improvements per month", "New small sections or page improvements", "Analytics or performance review where applicable", "Monthly planning check-in", "Higher priority support"],
    explanation: "Recommended for active platforms that need ongoing improvements, content support and technical attention after launch.",
  },
];

const recommendedCareByPathway: Record<PathwayKey, string[]> = {
  launch: ["basic"],
  signature: ["basic", "standard"],
  content: ["standard"],
  custom: ["growth"],
};

const designUpgradeAmounts: Record<PathwayKey, Record<DesignKey, number>> = {
  launch: { clean: 0, branded: 1500, premium: 3500, cinematic: 5500 },
  signature: { clean: 0, branded: 0, premium: 2000, cinematic: 4000 },
  content: { clean: 0, branded: 0, premium: 2000, cinematic: 4000 },
  custom: { clean: 0, branded: 1500, premium: 3500, cinematic: 5500 },
};

const formatCHF = (amount: number) => {
  const separator = String.fromCharCode(0x2019);
  return `CHF ${Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator)}`;
};

const roundHundred = (amount: number) => Math.round(amount / 100) * 100;
const findPathway = (value: PathwayKey) => pathways.find((pathway) => pathway.value === value) ?? pathways[0];
const findOption = <T extends { value: string }>(options: T[], value: string) =>
  options.find((option) => option.value === value) ?? options[0];

export function PricingCalculator() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [pathway, setPathway] = useState<PathwayKey | "">("");
  const [pageScope, setPageScope] = useState("");
  const [designLevel, setDesignLevel] = useState<DesignKey | "">("");
  const [cmsNeeds, setCmsNeeds] = useState<CmsKey | "">("");
  const [languages, setLanguages] = useState("");
  const [contentHelp, setContentHelp] = useState("");
  const [primaryModule, setPrimaryModule] = useState("");
  const [additionalModules, setAdditionalModules] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [care, setCare] = useState("");
  const [error, setError] = useState("");

  const effectivePathway = pathway || "signature";
  const selectedPathway = findPathway(effectivePathway as PathwayKey);
  const selectedCare = findOption(careOptions, care || "none");
  const wizardSteps = useMemo(() => {
    const steps = [
      { key: "pathway", question: "What Do You Want To Build?", required: true },
      { key: "scope", question: "How Large Is The Project?", required: true },
      { key: "design", question: "How Polished Or Interactive Should It Feel?", required: true },
      { key: "cms", question: "Do You Need To Edit Content Yourself?", required: true },
      ...(effectivePathway === "content" ? [{ key: "primary", question: "What Is The Main Content Area?", required: true }] : []),
      { key: "modules", question: "Do You Need Any Additional Content Areas?", required: false },
      { key: "languages", question: "How Many Languages Should The Site Support?", required: true },
      { key: "content", question: "How Much Help Do You Need With Content?", required: true },
      { key: "features", question: "What Extra Features Or Integrations Do You Need?", required: false },
      { key: "timeline", question: "How Soon Do You Need It?", required: true },
      { key: "care", question: "What Kind Of Support Do You Want After Launch?", required: true },
      { key: "result", question: "Your Planning Estimate", required: false },
    ];
    return steps;
  }, [effectivePathway]);

  const currentStep = wizardSteps[Math.min(stepIndex, wizardSteps.length - 1)];
  const isResultStep = currentStep.key === "result";
  const totalQuestions = wizardSteps.length - 1;
  const completedQuestions = isResultStep ? totalQuestions : stepIndex;
  const progressPercent = (completedQuestions / totalQuestions) * 100;

  const estimate = useMemo(() => {
    const selectedTimeline = findOption(timelineOptions, timeline || "flexible");
    const pageOption = findOption(pageScopeOptions, pageScope || "included");
    const designOption = findOption(designOptions, designLevel || selectedPathway.includedDesign);
    const cmsOption = findOption(cmsOptions, cmsNeeds || selectedPathway.includedCms);
    const languageOption = findOption(languageOptions, languages || "one");
    const contentHelpOption = findOption(contentHelpOptions, contentHelp || "provided");
    const addedScope: SummaryLine[] = [];
    let subtotal = selectedPathway.base;

    const addLine = (option: PriceOption, detail: string, tone: SummaryLine["tone"] = "added") => {
      if (option.amount <= 0) return;
      subtotal += option.amount;
      addedScope.push({ label: option.label, detail, tone });
    };

    addLine(pageOption, pageOption.detail ?? `Base includes ${selectedPathway.includedPages}`);

    const designAmount = designUpgradeAmounts[effectivePathway as PathwayKey][(designLevel || selectedPathway.includedDesign) as DesignKey];
    if (designAmount > 0) {
      subtotal += designAmount;
      addedScope.push({ label: designOption.label, detail: "Design upgrade beyond the pathway's included visual scope", tone: "upgrade" });
    }

    const selectedCms = (cmsNeeds || selectedPathway.includedCms) as CmsKey;
    const cmsAmount =
      effectivePathway === "content" && selectedCms === "advanced"
        ? 2500
        : effectivePathway === "content" || selectedCms === selectedPathway.includedCms
          ? 0
          : cmsOption.baseAmount;
    if (cmsAmount > 0) {
      subtotal += cmsAmount;
      addedScope.push({ label: cmsOption.label, detail: effectivePathway === "content" ? "Advanced CMS upgrade above structured CMS" : "CMS added beyond base scope", tone: "upgrade" });
    }

    addLine(languageOption, languageOption.detail ?? "Additional language setup");
    addLine(contentHelpOption, "Content support beyond client-provided final content");

    if (effectivePathway === "content") {
      additionalModules
        .filter((moduleValue) => moduleValue !== primaryModule)
        .map((moduleValue) => findOption(contentModules, moduleValue))
        .forEach((moduleOption) => addLine(moduleOption, "Additional content area"));
    }

    features
      .filter((value) => {
        if (value === "seo") return false;
        if (effectivePathway === "content" && primaryModule === "events" && value === "feature-events") return false;
        if (effectivePathway === "content" && primaryModule === "news" && value === "feature-news") return false;
        if (additionalModules.includes("events") && value === "feature-events") return false;
        if (additionalModules.includes("news") && value === "feature-news") return false;
        if (additionalModules.includes("products") && value === "feature-commerce") return false;
        return true;
      })
      .map((featureValue) => findOption(integrationOptions, featureValue))
      .forEach((featureOption) => addLine(featureOption, featureOption.detail ?? "Additional integration or feature"));

    if (selectedTimeline.amount > 0) addLine(selectedTimeline, "Timeline priority", "upgrade");
    if (selectedTimeline.multiplier) {
      const rushIncrease = subtotal * (selectedTimeline.multiplier - 1);
      subtotal += rushIncrease;
      addedScope.push({ label: "Rush Timeline", detail: "20 percent priority increase applied after selected scope", tone: "upgrade" });
    }

    const lowRaw = effectivePathway === "custom" ? Math.max(12000, subtotal * 0.9) : subtotal * 0.9;
    const highRaw = effectivePathway === "custom" ? Math.max(12000, subtotal * 1.25) : subtotal * 1.25;
    const primaryModuleLabel = effectivePathway === "content" && primaryModule ? findOption(contentModules, primaryModule).label : "";

    return {
      low: formatCHF(roundHundred(lowRaw)),
      high: formatCHF(roundHundred(highRaw)),
      monthlyCare: `${selectedCare.label}, ${formatCHF(selectedCare.amount)} per month`,
      hasMonthlyCare: selectedCare.amount > 0,
      monthlyCareExplanation: selectedCare.explanation,
      pathwayTitle: selectedPathway.label,
      included: [`${selectedPathway.label} base: ${formatCHF(selectedPathway.base)}`, ...selectedPathway.includedScope, primaryModuleLabel ? `${primaryModuleLabel} as the primary content area` : ""].filter(Boolean),
      addedScope,
    };
  }, [additionalModules, cmsNeeds, contentHelp, designLevel, effectivePathway, features, languages, pageScope, primaryModule, selectedCare, selectedPathway, timeline]);

  const canContinue = () => {
    switch (currentStep.key) {
      case "pathway":
        return Boolean(pathway);
      case "scope":
        return Boolean(pageScope);
      case "design":
        return Boolean(designLevel);
      case "cms":
        return Boolean(cmsNeeds);
      case "primary":
        return Boolean(primaryModule);
      case "languages":
        return Boolean(languages);
      case "content":
        return Boolean(contentHelp);
      case "timeline":
        return Boolean(timeline);
      case "care":
        return Boolean(care);
      default:
        return true;
    }
  };

  const goNext = () => {
    if (!canContinue()) {
      setError("Choose an option to continue.");
      return;
    }
    setError("");
    setStepIndex((current) => Math.min(current + 1, wizardSteps.length - 1));
  };

  const goBack = () => {
    setError("");
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const updatePathway = (nextPathway: PathwayKey) => {
    const next = findPathway(nextPathway);
    setPathway(nextPathway);
    setDesignLevel(next.includedDesign);
    setCmsNeeds(next.includedCms);
    setPageScope("included");
    setPrimaryModule("");
    setAdditionalModules([]);
    setFeatures([]);
  };

  const toggleValue = (value: string, setter: (updater: (current: string[]) => string[]) => void) => {
    setter((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]));
  };

  const answerRows = [
    ["Project Pathway", selectedPathway.label],
    ["Project Size", pageScope ? findOption(pageScopeOptions, pageScope).label : ""],
    ["Visual Design And Interaction Level", designLevel ? findOption(designOptions, designLevel).label : ""],
    ["CMS Needs", cmsNeeds ? findOption(cmsOptions, cmsNeeds).label : ""],
    ["Main Content Focus", effectivePathway === "content" && primaryModule ? findOption(contentModules, primaryModule).label : ""],
    ["Additional Content Areas", additionalModules.length ? additionalModules.map((item) => findOption(contentModules, item).label).join(", ") : ""],
    ["Languages", languages ? findOption(languageOptions, languages).label : ""],
    ["Content Support", contentHelp ? findOption(contentHelpOptions, contentHelp).label : ""],
    ["Integrations And Special Features", features.length ? features.map((item) => findOption(integrationOptions, item).label).join(", ") : ""],
    ["Timeline", timeline ? findOption(timelineOptions, timeline).label : ""],
    ["Care And Support", care ? findOption(careOptions, care).label : ""],
  ].filter(([, value]) => value);

  const buildInquiryMessage = () => {
    const lines = [
      "Hi Keita,",
      "",
      "I used the Twixalot pricing calculator and would like to discuss this estimate.",
      "",
      "Estimated Project Range:",
      `${estimate.low} to ${estimate.high}`,
      "",
      "Selected Monthly Care:",
      estimate.monthlyCare,
      "",
      "Project Pathway:",
      selectedPathway.label,
      "",
      "Included In This Pathway:",
      ...estimate.included.map((item) => `* ${item}`),
      "",
      "My Answers:",
      ...answerRows.map(([label, value]) => `* ${label}: ${value}`),
    ];

    if (estimate.addedScope.length > 0) {
      lines.push("", "Added Scope:", ...estimate.addedScope.map((item) => `* ${item.label}`));
    }

    lines.push("", "Message:", "");
    return lines.join("\n");
  };

  const discussEstimate = () => {
    const message = buildInquiryMessage();
    const selectedCareOption = findOption(careOptions, care || "none");
    const answers = {
      source: "pricing-calculator",
      projectPathway: selectedPathway.label,
      calculatorPathway: selectedPathway.label,
      estimateRange: `${estimate.low} to ${estimate.high}`,
      estimateLow: estimate.low,
      estimateHigh: estimate.high,
      monthlyCare: selectedCareOption.label,
      monthlyCarePrice: selectedCareOption.amount > 0 ? formatCHF(selectedCareOption.amount) : "CHF 0",
      timeline: timeline ? findOption(timelineOptions, timeline).label : "",
      generatedEstimateSummary: message,
      selectedAnswers: Object.fromEntries(answerRows),
    };

    window.sessionStorage.setItem("twixalotEstimateInquiry", message);
    window.sessionStorage.setItem("twixalotEstimateAnswers", JSON.stringify(answers));
    router.push("/contact");
  };

  return (
    <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-7">
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-white/58">
          <span>{isResultStep ? "Estimate Ready" : `Step ${stepIndex + 1} of ${totalQuestions}`}</span>
          <span>{Math.round(progressPercent)}% complete</span>
        </div>
        <div
          className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-label="Estimate progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progressPercent)}
        >
          <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-electric),var(--color-magenta))]" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className={`grid gap-6 lg:items-start ${isResultStep ? "" : "lg:grid-cols-[minmax(0,1fr)_22rem]"}`}>
        <section>
          <p className="twix-eyebrow">Estimate Wizard</p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-white">{currentStep.question}</h3>
          {error ? <p className="mt-4 rounded-[8px] border border-[rgba(226,7,86,0.42)] bg-[rgba(226,7,86,0.1)] p-3 text-sm text-white">{error}</p> : null}
          <div className="mt-6">{renderStep()}</div>
        </section>

        {!isResultStep ? (
          <aside className="rounded-[8px] border border-white/10 bg-[#050b1d]/72 p-5 text-sm leading-7 text-white/58">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Selected So Far</p>
            <dl className="mt-4 grid gap-3">
              {answerRows.length > 0 ? answerRows.slice(0, 6).map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/34">{label}</dt>
                  <dd className="mt-1 text-white/68">{value}</dd>
                </div>
              )) : <p>No answers yet.</p>}
            </dl>
            <p className="mt-6 text-xs leading-6 text-white/42">The estimate appears after the support question, so the result reflects the full project shape.</p>
          </aside>
        ) : null}
      </div>

      {!isResultStep ? (
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/14 px-5 font-semibold text-white/70 transition hover:border-white/34 hover:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            Back
          </button>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)]"
          >
            Next
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      ) : null}
    </div>
  );

  function renderStep() {
    switch (currentStep.key) {
      case "pathway":
        return <RadioCards options={pathways.map((item) => ({ label: item.label, value: item.value, amount: item.base, description: `Starts at ${formatCHF(item.base)}. ${item.includedPages} included.` }))} value={pathway} onChange={(value) => updatePathway(value as PathwayKey)} amountPrefix="Base" />;
      case "scope":
        return <QuestionBlock helper={`The ${selectedPathway.label} pathway includes ${selectedPathway.includedPages}.`}><RadioCards options={pageScopeOptions} value={pageScope} onChange={setPageScope} includedValue="included" /></QuestionBlock>;
      case "design":
        return (
          <QuestionBlock
            helper="Choose the closest level of visual polish and interaction. Small fade-ins, hover effects and basic transitions do not automatically make a project cinematic."
          >
            <RadioCards options={designOptions.map((option) => ({ ...option, amount: designUpgradeAmounts[effectivePathway as PathwayKey][option.value] }))} value={designLevel} onChange={(value) => setDesignLevel(value as DesignKey)} includedValue={selectedPathway.includedDesign} amountPrefix="Upgrade" expanded />
          </QuestionBlock>
        );
      case "cms":
        return (
          <QuestionBlock helper="A CMS is a content management system. It lets you edit website content without changing code.">
            <RadioCards options={cmsOptions.map((option) => ({ ...option, amount: effectivePathway === "content" && option.value === "advanced" ? 2500 : effectivePathway === "content" || option.value === selectedPathway.includedCms ? 0 : option.baseAmount }))} value={cmsNeeds} onChange={(value) => setCmsNeeds(value as CmsKey)} includedValue={selectedPathway.includedCms} amountPrefix="Upgrade" expanded />
          </QuestionBlock>
        );
      case "primary":
        return <RadioCards options={contentModules.slice(0, 9).map((item) => ({ ...item, amount: 0, detail: "Included as the primary content area" }))} value={primaryModule} onChange={(value) => { setPrimaryModule(value); setAdditionalModules((current) => current.filter((item) => item !== value)); }} includedValue={primaryModule} />;
      case "modules":
        return <CheckboxCards options={contentModules} selected={additionalModules} onToggle={(value) => toggleValue(value, setAdditionalModules)} includedValue={effectivePathway === "content" ? primaryModule : undefined} emptyText="You can continue without additional content areas." />;
      case "languages":
        return <QuestionBlock helper="More languages usually mean more page structure, CMS setup, testing and content handling."><RadioCards options={languageOptions} value={languages} onChange={setLanguages} /></QuestionBlock>;
      case "content":
        return <RadioCards options={contentHelpOptions} value={contentHelp} onChange={setContentHelp} expanded />;
      case "features":
        return <CheckboxCards options={integrationOptions} selected={features} onToggle={(value) => toggleValue(value, setFeatures)} includedValues={includedFeatureValues()} emptyText="You can continue without extra features or integrations." />;
      case "timeline":
        return <RadioCards options={timelineOptions} value={timeline} onChange={setTimeline} expanded />;
      case "care":
        return <CareCards pathway={effectivePathway as PathwayKey} selected={care} onChange={setCare} />;
      case "result":
        return (
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_25rem]">
            <div className="rounded-[8px] border border-white/10 bg-[#050b1d]/72 p-5">
              <p className="text-sm leading-7 text-white/62">
                Your selected answers are below. The estimate is a planning range, not a final quote.
              </p>
              <dl className="mt-6 grid gap-3 md:grid-cols-2">
                {answerRows.map(([label, value]) => (
                  <div key={label} className="rounded-[8px] bg-white/[0.04] p-3">
                    <dt className="text-xs uppercase tracking-[0.12em] text-white/34">{label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-white/72">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-7 text-white/56">
                Your selected answers and estimate will be added to the message so you do not have to retype everything.
              </p>
              <button
                type="button"
                onClick={discussEstimate}
                className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 bg-white px-6 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] sm:w-fit"
              >
                Discuss this estimate
                <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
            <EstimateSummary {...estimate} />
          </div>
        );
      default:
        return null;
    }
  }

  function includedFeatureValues() {
    const included = ["seo"];
    if (effectivePathway === "content" && primaryModule === "events") included.push("feature-events");
    if (effectivePathway === "content" && primaryModule === "news") included.push("feature-news");
    if (additionalModules.includes("events")) included.push("feature-events");
    if (additionalModules.includes("news")) included.push("feature-news");
    if (additionalModules.includes("products")) included.push("feature-commerce");
    return included;
  }
}

function QuestionBlock({ helper, children }: { helper: string; children: React.ReactNode }) {
  return (
    <>
      <p className="mb-5 rounded-[8px] border border-white/10 bg-[#050b1d]/72 p-4 text-sm leading-7 text-white/62">{helper}</p>
      {children}
    </>
  );
}

function RadioCards({
  options,
  value,
  onChange,
  includedValue,
  amountPrefix = "Adds",
  expanded,
}: {
  options: PriceOption[];
  value: string;
  onChange: (value: string) => void;
  includedValue?: string;
  amountPrefix?: "Adds" | "Base" | "Upgrade";
  expanded?: boolean;
}) {
  return (
    <div className={`grid gap-3 ${expanded ? "xl:grid-cols-2" : "sm:grid-cols-2"}`} role="radiogroup">
      {options.map((option) => {
        const selected = value === option.value;
        const included = option.value === includedValue || option.amount === 0;
        const priceLabel =
          included
              ? "Included"
              : amountPrefix === "Adds" || amountPrefix === "Upgrade"
                ? ""
                : `${amountPrefix} ${formatCHF(option.amount)}`;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.value)}
            className={`rounded-[8px] border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)] ${
              selected ? "border-[rgba(11,79,217,0.72)] bg-[rgba(11,79,217,0.16)] text-white" : "border-white/10 bg-[#050b1d]/60 text-white/68 hover:border-white/24 hover:bg-white/[0.055]"
            }`}
          >
            <span className="flex items-start gap-3">
              <span className={`mt-1 h-4 w-4 rounded-full border ${selected ? "border-white bg-[var(--color-electric)] shadow-[inset_0_0_0_4px_#03143c]" : "border-white/35"}`} aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <span className="block text-sm font-semibold leading-6">{option.label}</span>
                  {priceLabel ? (
                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1 text-xs font-semibold text-white/56">{priceLabel}</span>
                  ) : null}
                </span>
                {option.description ? <span className="mt-3 block text-sm leading-7 text-white/58">{option.description}</span> : null}
                {option.detail ? <span className="mt-2 block text-xs leading-5 text-white/42">{option.detail}</span> : null}
                {option.examples ? (
                  <span className="mt-4 flex flex-wrap gap-2">
                    {option.examples.map((example) => (
                      <span key={example} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs leading-5 text-white/48">{example}</span>
                    ))}
                  </span>
                ) : null}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function CheckboxCards({
  options,
  selected,
  onToggle,
  includedValue,
  includedValues = [],
  emptyText,
}: {
  options: PriceOption[];
  selected: string[];
  onToggle: (value: string) => void;
  includedValue?: string;
  includedValues?: string[];
  emptyText: string;
}) {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {options.map((option) => {
          const included = option.value === includedValue || includedValues.includes(option.value);
          const checked = included || selected.includes(option.value);
          const label = included || option.amount === 0 ? "Included" : "";

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={checked}
              disabled={included}
              onClick={() => onToggle(option.value)}
              className={`flex min-h-14 items-start gap-3 rounded-[8px] border p-4 text-left text-sm leading-6 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)] ${
                checked ? "border-[rgba(226,7,86,0.55)] bg-[rgba(226,7,86,0.12)] text-white" : "border-white/10 bg-[#050b1d]/60 text-white/68 hover:border-white/24 hover:bg-white/[0.055]"
              } ${included ? "cursor-not-allowed opacity-75" : "cursor-pointer"}`}
            >
              <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border ${checked ? "border-white bg-[var(--color-magenta)]" : "border-white/35"}`} aria-hidden="true">
                {checked ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
              </span>
              <span className="flex-1">
                <span className="block font-medium">{option.label}</span>
                {label ? <span className="block text-xs text-white/46">{label}</span> : null}
                {option.detail ? <span className="mt-1 block text-xs leading-5 text-white/38">{option.detail}</span> : null}
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm leading-7 text-white/48">{emptyText}</p>
    </>
  );
}

function CareCards({ pathway, selected, onChange }: { pathway: PathwayKey; selected: string; onChange: (value: string) => void }) {
  const recommended = recommendedCareByPathway[pathway];

  return (
    <>
      <div className="grid gap-4 xl:grid-cols-2" role="radiogroup">
        {careOptions.map((plan) => {
          const active = selected === plan.value;
          const isRecommended = recommended.includes(plan.value);

          return (
            <button
              key={plan.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(plan.value)}
              className={`rounded-[8px] border p-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)] ${
                active ? "border-[rgba(11,79,217,0.72)] bg-[rgba(11,79,217,0.16)] text-white" : "border-white/10 bg-[#050b1d]/60 text-white/68 hover:border-white/24 hover:bg-white/[0.055]"
              }`}
            >
              <span className="flex items-start gap-3">
                <span className={`mt-1 h-4 w-4 shrink-0 rounded-full border ${active ? "border-white bg-[var(--color-electric)] shadow-[inset_0_0_0_4px_#03143c]" : "border-white/35"}`} aria-hidden="true" />
                <span>
                  <span className="block text-lg font-semibold text-white">{plan.label}</span>
                  <span className="mt-1 block text-sm text-white/54">{plan.subtitle}</span>
                  <span className="mt-3 block w-fit rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-semibold text-white/62">{formatCHF(plan.amount)} per month</span>
                  {isRecommended ? <span className="mt-3 block w-fit rounded-full border border-[rgba(226,7,86,0.32)] bg-[rgba(226,7,86,0.12)] px-3 py-1 text-xs font-semibold text-white/72">Recommended for your selected project type</span> : null}
                  <span className="mt-4 block text-sm leading-7 text-white/62">{plan.chooseIfText}</span>
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-white/38">Includes</span>
                  <span className="mt-2 grid gap-1.5">
                    {plan.includes.slice(0, 5).map((item) => <span key={item} className="block text-xs leading-5 text-white/58">{item}</span>)}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 rounded-[8px] border border-white/10 bg-[#050b1d]/72 p-4 text-sm leading-7 text-white/56">
        Care plans cover support, small fixes, technical checks and agreed improvements. Hosting, domains, paid plugins,
        licences, premium tools and third-party services remain client-owned and are billed directly to the client.
      </p>
    </>
  );
}
