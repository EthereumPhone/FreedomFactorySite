import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hand holding dGEN1 device with radar interface against blue ring light"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            The Next Generation{" "}
            <span className="text-accent">Mobile OS</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            An OS that embraces open protocols and gives users and their agents
            the tools to do what they want.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://mint.freedomfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
            >
              Get Your dGEN1
            </a>
            <a
              href="https://docs.freedomfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-foreground font-semibold rounded-lg transition-colors"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
