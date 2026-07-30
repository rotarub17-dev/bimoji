export type Category =
  | "Funny"
  | "Love"
  | "Mood"
  | "Beauty"
  | "Food"
  | "Daily Life"
  | "Seasonal";

export const categories: Category[] = [
  "Funny",
  "Love",
  "Mood",
  "Beauty",
  "Food",
  "Daily Life",
  "Seasonal",
];

export interface Sticker {
  id: number;
  emoji: string;
  name: string;
  category: Category;
  accent: string;
}

export const stickers: Sticker[] = [
  { id: 1, emoji: "😂", name: "Râs cu lacrimi", category: "Funny", accent: "from-blush-200 to-blush-100" },
  { id: 2, emoji: "🤭", name: "Râs sfios", category: "Funny", accent: "from-rose-100 to-ivory-100" },
  { id: 3, emoji: "😜", name: "Limbă jucăușă", category: "Funny", accent: "from-gold-100 to-blush-100" },
  { id: 4, emoji: "😍", name: "Inimi în ochi", category: "Love", accent: "from-blush-300 to-blush-100" },
  { id: 5, emoji: "🥰", name: "Iubire caldă", category: "Love", accent: "from-rose-200 to-blush-100" },
  { id: 6, emoji: "💖", name: "Inimă strălucitoare", category: "Love", accent: "from-blush-200 to-rose-100" },
  { id: 7, emoji: "🥺", name: "Ochiori blânzi", category: "Mood", accent: "from-ivory-200 to-blush-100" },
  { id: 8, emoji: "😎", name: "Atitudine cool", category: "Mood", accent: "from-gold-200 to-rose-100" },
  { id: 9, emoji: "🥲", name: "Fericit-emoționat", category: "Mood", accent: "from-rose-100 to-ivory-100" },
  { id: 10, emoji: "💄", name: "Ruj perfect", category: "Beauty", accent: "from-blush-300 to-rose-100" },
  { id: 11, emoji: "💅", name: "Manichiură elegantă", category: "Beauty", accent: "from-rose-200 to-blush-100" },
  { id: 12, emoji: "🌸", name: "Înflorită", category: "Beauty", accent: "from-blush-200 to-ivory-100" },
  { id: 13, emoji: "🍓", name: "Căpșună dulce", category: "Food", accent: "from-rose-200 to-blush-100" },
  { id: 14, emoji: "🧁", name: "Cupcake cremos", category: "Food", accent: "from-blush-200 to-gold-100" },
  { id: 15, emoji: "☕", name: "Cafea de dimineață", category: "Food", accent: "from-gold-200 to-rose-100" },
  { id: 16, emoji: "🛏️", name: "Dimineață liniștită", category: "Daily Life", accent: "from-ivory-200 to-blush-100" },
  { id: 17, emoji: "📚", name: "Timp de lectură", category: "Daily Life", accent: "from-rose-100 to-gold-100" },
  { id: 18, emoji: "🚶‍♀️", name: "Plimbare ușoară", category: "Daily Life", accent: "from-blush-100 to-ivory-100" },
  { id: 19, emoji: "🌸", name: "Primăvară", category: "Seasonal", accent: "from-blush-200 to-rose-100" },
  { id: 20, emoji: "☀️", name: "Vară aurie", category: "Seasonal", accent: "from-gold-200 to-blush-100" },
  { id: 21, emoji: "🍂", name: "Toamnă caldă", category: "Seasonal", accent: "from-rose-200 to-gold-100" },
  { id: 22, emoji: "❄️", name: "Iarnă cristalină", category: "Seasonal", accent: "from-ivory-200 to-blush-100" },
];
