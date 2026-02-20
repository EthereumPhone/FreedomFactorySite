import Reveal from "./Reveal";

const sdks = [
  {
    name: "Wallet SDK",
    description:
      "ERC-4337 account abstraction under the hood: sign transactions, messages, and interact with chains with a simple API.",
    link: "https://docs.freedomfactory.io/build/jvm-sdk",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5" />
        <circle cx="18" cy="16" r="1" />
      </svg>
    ),
  },
  {
    name: "XMTP Messenger SDK",
    description: "Encrypted peer-to-peer messaging with the XMTP protocol.",
    link: "https://docs.freedomfactory.io/build/xmtp-messenger-sdk",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    name: "Terminal SDK",
    description:
      "Display content on the dGEN1 Terminal, the small screen below the main screen.",
    link: "https://docs.freedomfactory.io/build/dgen1-terminal-sdk",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 17l6-5-6-5M12 19h8" />
      </svg>
    ),
  },
  {
    name: "Matrix SDK",
    description:
      "Control the LED Matrix, the light grid left of the Terminal on the dGEN1.",
    link: "https://docs.freedomfactory.io/build/dgen1-terminal-sdk",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
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
    link: "https://docs.freedomfactory.io/build/contacts-sdk",
    icon: (
      <svg
        width="24"
        height="24"
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
  {
    name: "Paymaster SDK",
    description: "Gasless transactions and sponsored user operations.",
    link: "https://docs.freedomfactory.io/build/paymaster-sdk",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 010 4H8M12 6v2m0 8v2" />
      </svg>
    ),
  },
];

export default function SDKs() {
  return (
    <section id="sdks" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-surface/30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-cyan text-xs tracking-wider">
              [02]
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-cyan/30 to-transparent" />
            <span className="font-mono text-muted text-[11px] uppercase tracking-[0.25em]">
              Developer SDKs
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Build on <span className="text-accent">ethOS</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              A full suite of SDKs to build applications, agents, and
              experiences on top of the dGEN1.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sdks.map((sdk, i) => {
            const inner = (
              <>
                <div className="absolute top-0 left-0 w-[3px] h-full bg-accent rounded-l-lg origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                <div className="text-cyan group-hover:text-accent transition-colors duration-300 mb-4">
                  {sdk.icon}
                </div>
                <h3 className="font-display text-base font-semibold mb-1.5">
                  {sdk.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {sdk.description}
                </p>
              </>
            );

            return (
              <Reveal key={sdk.name} delay={i * 80}>
                {sdk.link ? (
                  <a
                    href={sdk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block bg-surface rounded-lg p-6 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-400 overflow-hidden"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group relative bg-surface rounded-lg p-6 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-400 overflow-hidden">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={500}>
          <div className="mt-12 text-center">
            <a
              href="https://docs.freedomfactory.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-cyan/20 hover:border-cyan/40 text-cyan font-display font-semibold text-sm tracking-wider rounded transition-all duration-300"
            >
              EXPLORE THE DOCS
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
        </Reveal>
      </div>
    </section>
  );
}
