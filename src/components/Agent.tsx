import Image from "next/image";

const features = [
  {
    title: "Own Wallet & Identity",
    description:
      "Your agent gets its own wallet, contact entry, and XMTP address. The agent is a first-class citizen on the device.",
  },
  {
    title: "Named by You",
    description:
      "Give your agent a name or let it auto-generate one. It's yours to personalize.",
  },
  {
    title: "Unique Personality",
    description:
      "System color, terminal activity, LED patterns, each dGEN1 agent has its own distinct personality.",
  },
  {
    title: "Experiments Start Now",
    description:
      "The agent framework is live on ethOS/dGEN1. Build, test, and push the boundaries today.",
  },
];

export default function Agent() {
  return (
    <section id="agent" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Your Agent.{" "}
              <span className="text-accent">Your Identity.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Meet AndyClaw: AI agents have first-class identity on ethOS.
              Every agent is a real participant in the network, not just a
              chatbot overlay.
            </p>

            <div className="mt-10 grid gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-accent" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative aspect-[2/3] max-w-sm mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/images/image2.jpg"
              alt="dGEN1 device showing wallet interface"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
