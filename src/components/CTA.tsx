import Image from "next/image";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="get-dgen1" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background image */}
            <Image
              src="/images/cta-bg.jpg"
              alt="dGEN1 device with red neon background"
              fill
              className="object-cover opacity-15"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/60" />
            {/* Red glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/[0.06] blur-[100px] rounded-full pointer-events-none" />

            {/* HUD corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-accent/25" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-accent/25" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-accent/25" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-accent/25" />

            <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center">
              <div className="font-mono text-xs text-accent/50 tracking-[0.3em] uppercase mb-6">
                // ready?
              </div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Ready to{" "}
                <span className="text-accent text-glow-red">Break Free?</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed">
                Get the dGEN1 and experience ethOS — the open mobile OS built
                for users and agents.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://mint.freedomfactory.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-4 bg-accent hover:bg-accent-hover text-white font-display font-semibold text-base tracking-wider rounded transition-all duration-300 glow-pulse"
                >
                  MINT YOUR dGEN1
                </a>
                <a
                  href="https://docs.freedomfactory.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-4 border border-white/15 hover:border-white/30 text-foreground font-display font-semibold text-base tracking-wider rounded transition-all duration-300"
                >
                  READ THE DOCS
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="mt-24">
        <div className="divider-glow mx-auto max-w-7xl" />
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a
              href="#"
              className="text-accent font-display font-bold italic text-[1.15em] tracking-[0.08em] leading-none"
            >
              FREEDOM/FACTORY&trade;
            </a>

            <div className="flex items-center gap-6">
              {[
                { label: "Docs", href: "https://docs.freedomfactory.io" },
                { label: "Mint", href: "https://mint.freedomfactory.io" },
                { label: "Twitter", href: "https://x.com/FreedomFactory" },
                {
                  label: "Discord",
                  href: "https://discord.gg/2WHw6UBmYn",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="font-mono text-xs text-muted/50">
              &copy; {new Date().getFullYear()} Freedom Factory
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
