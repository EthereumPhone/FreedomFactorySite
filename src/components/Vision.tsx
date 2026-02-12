import Image from "next/image";

const pillars = [
  {
    title: "Open Source",
    description: "Everything about ethOS, open for all.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 8l-4 4 4 4" />
      </svg>
    ),
  },
  {
    title: "Open Protocols",
    description: "Built on standards anyone can build on: XMTP, Ethereum, and more.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
  },
  {
    title: "User Sovereignty",
    description: "Your device, your rules, your data.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Open by <span className="text-accent">Default</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Freedom Factory builds ethOS, an open-source mobile operating
              system for the dGEN1. Your mobile device should work for you,
              not against you. Every layer is open, auditable, and extensible.
            </p>
          </div>
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
            <Image
              src="/images/image3.webp"
              alt="dGEN1 device with globe interface"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="text-cyan mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-muted leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
