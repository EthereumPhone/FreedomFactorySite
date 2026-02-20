import Image from "next/image";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Open Source",
    description: "Everything about ethOS, open for all.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10 20l4-16m4 4l4 4-4 4M6 8l-4 4 4 4" />
      </svg>
    ),
  },
  {
    title: "Open Protocols",
    description:
      "Built on standards anyone can build on: XMTP, Ethereum, and more.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
  },
  {
    title: "User Sovereignty",
    description: "Your device, your rules, your data.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan text-xs tracking-wider">
              [01]
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-cyan/30 to-transparent" />
            <span className="font-mono text-muted text-[11px] uppercase tracking-[0.25em]">
              Vision
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
                Open by <span className="text-accent">Default</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
                Freedom Factory builds ethOS, an open-source mobile operating
                system for the dGEN1. Your mobile device should work for you,
                not against you. Every layer is open, auditable, and extensible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden hud-corners">
              <Image
                src="/images/vision-wallet.jpg"
                alt="dGEN1 showing wallet with USDC, AAVE, ETH against cyan neon spiral"
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
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="tactical-card rounded-lg p-8">
                <div className="text-cyan mb-5">{pillar.icon}</div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
