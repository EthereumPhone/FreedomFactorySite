import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
            <Image
              src="/images/skills-ecosystem.jpg"
              alt="dGEN1 device held among glowing orbs showing token launch interface"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Community-Powered <span className="text-accent">Skills</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              A public repository where users and developers contribute agent
              skills. Extend what your agent can do with community-built modules —
              from DeFi actions to notification handlers to custom automations.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-surface rounded-2xl p-8 border border-white/5">
            <div className="text-cyan mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse & Install</h3>
            <p className="text-muted leading-relaxed">
              Discover skills from the community. One tap to add new
              capabilities to your agent.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-white/5">
            <div className="text-cyan mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Build & Share</h3>
            <p className="text-muted leading-relaxed">
              Write your own skills and publish them. The SDK makes it
              straightforward to create and distribute.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-white/5">
            <div className="text-cyan mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Open Ecosystem</h3>
            <p className="text-muted leading-relaxed">
              No gatekeepers. Anyone can contribute, review, and improve the
              skills that power agents on ethOS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
