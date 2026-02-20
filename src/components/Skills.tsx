import Image from "next/image";
import Reveal from "./Reveal";

const skillCards = [
  {
    num: "01",
    title: "Browse & Install",
    description:
      "Discover skills from the community. One tap to add new capabilities to your agent.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Build & Share",
    description:
      "Write your own skills and publish them. The SDK makes it straightforward to create and distribute.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Open Ecosystem",
    description:
      "No gatekeepers. Anyone can contribute, review, and improve the skills that power agents on ethOS.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-surface/30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan text-xs tracking-wider">
              [04]
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-cyan/30 to-transparent" />
            <span className="font-mono text-muted text-[11px] uppercase tracking-[0.25em]">
              Skills
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden hud-corners">
              <Image
                src="/images/skills-ecosystem.jpg"
                alt="dGEN1 device held among glowing orbs showing token launch interface"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,204,0.02) 2px, rgba(0,255,204,0.02) 4px)",
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
                Community-Powered{" "}
                <span className="text-accent">Skills</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
                A public repository where users and developers contribute agent
                skills. Extend what your agent can do with community-built
                modules — from DeFi actions to notification handlers to custom
                automations.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {skillCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className="bg-surface rounded-lg border border-white/[0.04] p-8 group hover:border-white/[0.08] transition-all duration-400">
                <div className="flex items-start justify-between mb-5">
                  <div className="text-cyan group-hover:text-accent transition-colors duration-300">
                    {card.icon}
                  </div>
                  <span className="font-mono text-[11px] text-white/[0.08] group-hover:text-white/[0.15] transition-colors">
                    {card.num}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
