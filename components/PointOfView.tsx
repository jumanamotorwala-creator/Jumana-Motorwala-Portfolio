export default function PointOfView() {
  return (
    <section aria-labelledby="pov-heading" className="mx-auto max-w-content px-6 pt-20 pb-8 md:px-10 md:pt-28 md:pb-10">
      <div aria-hidden="true" className="mb-6 h-1 w-16 rounded-full bg-navy" />
      <h2 id="pov-heading" className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
        Complexity is inevitable. Confusion isn&apos;t.
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/70 md:text-lg">
        The products I enjoy working on usually have a lot going on: multiple users, high-stakes decisions, dense information, and little room for error. My job is to find the signal, shape the system, and make the next step feel obvious.
      </p>
    </section>
  );
}