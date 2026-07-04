import { CalendarCheck, ClipboardList, Route, Settings2 } from "lucide-react";

export const processOverview = {
  label: "HOW IT WORKS",
  heading: "A clear path from idea to launch.",
  intro:
    "A compact version of the usual project rhythm, shaped to keep the work focused, understandable and ready for handover.",
};

export const processSteps = [
  {
    title: "Discovery",
    description:
      "We clarify your goals, audience, content, functionality, timeline and what needs to be editable after launch.",
    icon: ClipboardList,
  },
  {
    title: "Structure & Design",
    description:
      "The sitemap, page structure, visual direction and key interactions are shaped before the build begins.",
    icon: Route,
  },
  {
    title: "Build & Review",
    description:
      "The website or system is developed, tested, reviewed and adjusted with feedback along the way.",
    icon: Settings2,
  },
  {
    title: "Launch & Support",
    description:
      "The site goes live with deployment, domain setup, CMS access, handover and optional ongoing support.",
    icon: CalendarCheck,
  },
];
