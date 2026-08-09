export default function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden bg-navy text-paper">
      <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-lime/30 blur-3xl" />

      <div className="relative mx-auto max-w-content px-6 py-20 text-center md:px-10 md:py-28">
        <h2 id="contact-heading" className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
          Have a complicated product that needs to feel obvious?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-paper/70">
          Let&apos;s turn the hard part into a better experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="mailto:jumana.motorwala44@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Start a conversation ↗
          </a>

          <a href="https://www.linkedin.com/in/jumanamotorwala-productdesigner/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10">
            <svg width="18" height="18" viewBox="0 0 50 50" fill="none" aria-hidden="true">
              <path d="M41 4H9C6.24 4 4 6.24 4 9V41C4 43.76 6.24 46 9 46H41C43.76 46 46 43.76 46 41V9C46 6.24 43.76 4 41 4ZM17 20V39H11V20H17ZM11 14.47C11 13.07 12.2 12 14 12C15.8 12 16.93 13.07 17 14.47C17 15.87 15.88 17 14 17C12.2 17 11 15.87 11 14.47ZM39 39H33C33 39 33 29.74 33 29C33 27 32 25 29.5 24.96H29.42C27 24.96 26 27.02 26 29C26 29.91 26 39 26 39H20V20H26V22.56C26 22.56 27.93 20 31.81 20C35.78 20 39 22.73 39 28.26V39Z" fill="currentColor" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}