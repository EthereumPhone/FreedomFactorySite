const sdks = [
  {
    name: "Wallet SDK",
    description: "ERC-4337 account abstraction under the hood — sign transactions, messages, and interact with chains with a simple API.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5" />
        <circle cx="18" cy="16" r="1" />
      </svg>
    ),
  },
  {
    name: "XMTP Messenger SDK",
    description: "Encrypted peer-to-peer messaging with the XMTP protocol.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    name: "Terminal SDK",
    description: "Display content on the dGEN1 Terminal — the small screen below the main screen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 17l6-5-6-5M12 19h8" />
      </svg>
    ),
  },
  {
    name: "Matrix SDK",
    description: "Control the LED Matrix — the light grid left of the Terminal on the dGEN1.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    name: "Contacts SDK",
    description: "Identity-aware contacts powered by open standards.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    name: "Paymaster SDK",
    description: "Gasless transactions and sponsored user operations.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 010 4H8M12 6v2m0 8v2" />
      </svg>
    ),
  },
];

export default function SDKs() {
  return (
    <section id="sdks" className="py-24 md:py-32 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Build on <span className="text-accent">ethOS</span>
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            A full suite of SDKs to build applications, agents, and experiences
            on top of the dGEN1.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdks.map((sdk) => (
            <div
              key={sdk.name}
              className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-colors group"
            >
              <div className="text-cyan group-hover:text-accent transition-colors mb-4">
                {sdk.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{sdk.name}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {sdk.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://docs.freedomfactory.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white/40 text-foreground font-semibold rounded-lg transition-colors"
          >
            Explore the Docs
            <svg
              width="16"
              height="16"
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
    </section>
  );
}
