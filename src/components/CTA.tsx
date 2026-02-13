import Image from "next/image";

export default function CTA() {
  return (
    <section id="get-dgen1" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl bg-surface border border-white/5 overflow-hidden px-8 py-20 md:px-16 md:py-28 text-center">
          {/* Background image */}
          <Image
            src="/images/cta-bg.jpg"
            alt="dGEN1 device with red neon background"
            fill
            className="object-cover opacity-20"
          />
          {/* Accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to <span className="text-accent">Break Free?</span>
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Get the dGEN1 and experience ethOS — the open mobile OS built for
              users and agents.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://mint.freedomfactory.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg text-lg transition-colors"
              >
                Mint Your dGEN1
              </a>
              <a
                href="https://docs.freedomfactory.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 border border-white/20 hover:border-white/40 text-foreground font-semibold rounded-lg text-lg transition-colors"
              >
                Read the Docs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 pt-10 pb-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#"
            className="text-accent font-semibold italic text-[1.1em] tracking-[0.05em] leading-[130%] no-underline"
          >
            FREEDOM/FACTORY&trade;
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://docs.freedomfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a
              href="https://mint.freedomfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Mint
            </a>
            <a
              href="https://x.com/FreedomFactory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/2WHw6UBmYn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Discord
            </a>
          </div>

          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Freedom Factory. All rights
            reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
