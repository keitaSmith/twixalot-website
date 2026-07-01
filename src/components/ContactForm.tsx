import { budgetRanges, projectTypes, timelineOptions } from "@/data/site";

export function ContactForm() {
  return (
    <form className="grid gap-4" aria-label="Project inquiry form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Name
          <input name="name" type="text" autoComplete="name" className="twix-input" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Email
          <input name="email" type="email" autoComplete="email" className="twix-input" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Company / organisation
          <input name="company" type="text" autoComplete="organization" className="twix-input" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Current website
          <input name="website" type="url" autoComplete="url" className="twix-input" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Project type
          <select name="projectType" className="twix-input">
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Budget range
          <select name="budget" className="twix-input">
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/76">
          Timeline
          <select name="timeline" className="twix-input">
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-white/76">
        Message
        <textarea name="message" rows={6} className="twix-input resize-y" />
      </label>
      <button
        type="button"
        className="mt-2 inline-flex min-h-13 w-full items-center justify-center bg-white px-6 font-semibold text-[#03143c] transition hover:bg-[#e8eeff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-magenta)] sm:w-fit"
      >
        Start a project
      </button>
    </form>
  );
}
