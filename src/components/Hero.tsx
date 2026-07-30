export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 text-center md:pt-32 md:pb-36">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blush-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gold-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <h1 className="font-display text-7xl font-bold leading-none tracking-tight md:text-9xl">
          <span className="text-gradient">BiMoji</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl font-display text-2xl font-medium text-rose-500 md:text-3xl">
          Emoții pentru fiecare conversație.
        </p>

        <p className="mx-auto mt-5 max-w-lg text-base text-rose-400/80 md:text-lg">
          O colecție delicată de stickere emoji, create cu grijă pentru a-ți
          exprima starea în fiecare moment.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#gallery" className="btn-primary">
            Vezi galeria
          </a>
          <a href="#categories" className="btn-secondary">
            Descoperă categoriile
          </a>
        </div>

        {/* floating emoji preview */}
        <div className="mt-16 flex items-center justify-center gap-4 md:gap-8">
          {["😍", "🧁", "🌸", "😂", "☕"].map((e, i) => (
            <span
              key={i}
              className="animate-float text-4xl md:text-6xl"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
