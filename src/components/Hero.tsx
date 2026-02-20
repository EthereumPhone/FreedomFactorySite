import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hand holding dGEN1 device with radar interface against blue ring light"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a10] via-[#060a10]/90 to-[#060a10]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a10] via-transparent to-[#060a10]/40" />
        {/* Scan lines */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,204,0.015) 2px, rgba(0,255,204,0.015) 4px)",
          }}
        />
      </div>

      {/* HUD viewport corners */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-cyan/20 z-20 hidden md:block" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-cyan/20 z-20 hidden md:block" />
      <div className="absolute bottom-20 left-6 w-8 h-8 border-b border-l border-cyan/20 z-20 hidden md:block" />
      <div className="absolute bottom-20 right-6 w-8 h-8 border-b border-r border-cyan/20 z-20 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40 w-full">
        <div className="max-w-2xl">
          {/* System tag */}
          <div
            className="hero-animate flex items-center gap-3 mb-8"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-mono text-cyan text-xs tracking-wider">
              [00]
            </span>
            <div className="h-px w-16 bg-gradient-to-r from-cyan/40 to-transparent" />
            <span className="font-mono text-muted text-[11px] uppercase tracking-[0.25em]">
              System Online
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="hero-animate font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.92]"
            style={{ animationDelay: "0.4s" }}
          >
            THE NEXT
            <br />
            GENERATION
            <br />
            <span className="text-accent text-glow-red">MOBILE OS</span>
          </h1>

          {/* Decorative line */}
          <div
            className="hero-animate mt-6 flex items-center gap-3"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="h-px w-12 bg-accent/40" />
            <div className="w-1.5 h-1.5 rotate-45 border border-accent/40" />
            <div className="h-px w-24 bg-gradient-to-r from-accent/40 to-transparent" />
          </div>

          {/* Terminal subtitle */}
          <p
            className="hero-animate mt-6 font-mono text-sm md:text-base text-muted/80 max-w-lg leading-relaxed"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="text-cyan mr-2">$</span>
            An OS that embraces open protocols and gives users and their agents
            the tools to do what they want.
            <span className="cursor-blink" />
          </p>

          {/* CTA buttons */}
          <div
            className="hero-animate mt-12 flex flex-wrap gap-4"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="https://mint.freedomfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-display font-semibold text-sm tracking-wider rounded transition-all duration-300 glow-pulse"
            >
              GET YOUR dGEN1
            </a>
            <a
              href="https://docs.freedomfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-cyan/25 hover:border-cyan/50 text-cyan font-display font-semibold text-sm tracking-wider rounded transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,255,204,0.08)]"
            >
              READ THE DOCS
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.04]">
        <div className="bg-background/70 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-6 font-mono text-[11px] text-muted/60">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan dot-pulse" />
                <span className="hidden sm:inline">ethOS v3.2</span>
              </span>
              <span className="hidden md:inline text-white/[0.06]">|</span>
              <span className="hidden md:inline">Open Protocol Stack</span>
              <span className="hidden lg:inline text-white/[0.06]">|</span>
              <span className="hidden lg:inline">
                XMTP &middot; Ethereum &middot; ERC-4337
              </span>
            </div>
            <span className="font-mono text-[11px] text-accent/60 tracking-widest">
              dGEN1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
