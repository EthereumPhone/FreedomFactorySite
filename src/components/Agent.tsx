import Image from "next/image";
import Reveal from "./Reveal";

const features = [
  {
    title: "Own Wallet & Identity",
    description:
      "Your dGENt gets its own wallet, contact entry, and XMTP address. The dGENt is a first-class citizen on the device.",
  },
  {
    title: "Named by You",
    description:
      "Give your dGENt a name or let it auto-generate one. It's yours to personalize.",
  },
  {
    title: "Unique Personality",
    description:
      "System color, terminal activity, LED patterns, each dGEN1 dGENt has its own distinct personality.",
  },
  {
    title: "Experiments Start Now",
    description:
      "The dGENts framework is live on ethOS/dGEN1. Build, test, and push the boundaries today.",
  },
];

export default function Agent() {
  return (
    <section id="dgents" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan text-xs tracking-wider">
              [03]
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-cyan/30 to-transparent" />
            <span className="font-mono text-muted text-[11px] uppercase tracking-[0.25em]">
              AI Agents
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[2/3] max-w-sm mx-auto rounded-lg overflow-hidden hud-corners">
              <Image
                src="/images/agent-terminal.jpg"
                alt="dGEN1 close-up showing LED matrix and terminal displaying TXN SUCCESS"
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
              {/* Terminal overlay label */}
              <div className="absolute bottom-12 left-8 right-8 z-10">
                <div className="bg-background/80 backdrop-blur-sm border border-white/[0.06] rounded px-4 py-2.5 font-mono text-xs">
                  <span className="text-muted">dGENt:</span>{" "}
                  <span className="text-cyan">AndyClaw</span>
                  <span className="text-muted/50 ml-2">// active</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={100}>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
                Your dGENts.{" "}
                <span className="text-accent">Your Identity.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
                Meet AndyClaw: AI dGENts have first-class identity on ethOS.
                Every dGENt is a real participant in the network, not just a
                chatbot overlay.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={200 + i * 80}>
                  <div className="flex gap-4 group">
                    <div className="mt-2 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:shadow-[0_0_8px_rgba(255,66,61,0.6)] transition-shadow duration-300" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
