import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)] ${className}`}
      aria-label="Twixalot home"
    >
      <Image
        src="/logos/twixalot-logo-type-white.svg"
        alt="Twixalot"
        width={172}
        height={35}
        priority={priority}
        className="h-6 w-auto sm:h-7"
      />
    </Link>
  );
}
