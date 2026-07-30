export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="mx-auto max-w-6xl rounded-4xl bg-white/60 px-8 py-10 text-center backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">💗</span>
          <span className="font-display text-2xl font-semibold text-gradient">
            BiMoji
          </span>
        </div>
        <p className="mt-3 text-sm text-rose-400/80">
          Emoții pentru fiecare conversație
        </p>
        <p className="mt-6 text-xs text-rose-300/70">
          © {new Date().getFullYear()} BiMoji. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
