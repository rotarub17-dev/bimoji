import { categories } from "@/data/stickers";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-6 py-3 shadow-sm shadow-rose-100/50">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">💗</span>
          <span className="font-display text-xl font-semibold text-gradient">
            BiMoji
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {categories.slice(0, 5).map((c) => (
            <a
              key={c}
              href={`#gallery`}
              className="text-sm font-medium text-rose-500 transition-colors hover:text-blush-500"
            >
              {c}
            </a>
          ))}
        </div>
        <a href="#gallery" className="btn-primary !px-6 !py-2.5 text-sm">
          Explorează
        </a>
      </nav>
    </header>
  );
}
