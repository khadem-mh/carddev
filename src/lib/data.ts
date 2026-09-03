export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  cover: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
  badge?: string;
};

export const books: Book[] = [
  {
    id: 1,
    title: "اتم‌های عادت",
    author: "جیمز کلیر",
    price: 85000,
    originalPrice: 120000,
    cover: "https://picsum.photos/seed/book1/300/400",
    category: "خودسازی",
    rating: 4.8,
    reviews: 2340,
    description: "کتابی درباره چگونگی ایجاد عادت‌های خوب و ترک عادت‌های بد با تغییرات کوچک اما مداوم.",
    inStock: true,
    badge: "پرفروش",
  },
  {
    id: 2,
    title: "قدرت حال",
    author: "اکهارت تله",
    price: 72000,
    cover: "https://picsum.photos/seed/book2/300/400",
    category: "معنوی",
    rating: 4.6,
    reviews: 1890,
    description: "راهنمایی برای رسیدن به روشنگری از طریق زندگی در لحظه حال.",
    inStock: true,
    badge: "جدید",
  },
  {
    id: 3,
    title: "هوش مالی",
    author: "رابرت کیوساکی",
    price: 95000,
    originalPrice: 130000,
    cover: "https://picsum.photos/seed/book3/300/400",
    category: "مالی",
    rating: 4.5,
    reviews: 3120,
    description: "درس‌هایی که مدرسه درباره پول به شما نمی‌آموزد.",
    inStock: true,
    badge: "تخفیف",
  },
  {
    id: 4,
    title: "هزار خورشید تابان",
    author: "خالد حسینی",
    price: 68000,
    cover: "https://picsum.photos/seed/book4/300/400",
    category: "رمان",
    rating: 4.9,
    reviews: 4560,
    description: "داستانی از دوستی عمیق دو زن افغان در بستر تاریخ معاصر.",
    inStock: true,
  },
  {
    id: 5,
    title: "بادبادک‌باز",
    author: "خالد حسینی",
    price: 62000,
    cover: "https://picsum.photos/seed/book5/300/400",
    category: "رمان",
    rating: 4.8,
    reviews: 5230,
    description: "داستانی پرتأثیر از دوستی، خیانت و بازگشت در افغانستان.",
    inStock: false,
  },
  {
    id: 6,
    title: "تفکر سریع و کند",
    author: "دانیل کانمن",
    price: 110000,
    originalPrice: 150000,
    cover: "https://picsum.photos/seed/book6/300/400",
    category: "روانشناسی",
    rating: 4.7,
    reviews: 2890,
    description: "کاوشی در دو سیستم تفکر انسانی و تأثیر آن‌ها بر تصمیمات ما.",
    inStock: true,
    badge: "تخفیف",
  },
  {
    id: 7,
    title: "سرخ و سیاه",
    author: "استاندال",
    price: 55000,
    cover: "https://picsum.photos/seed/book7/300/400",
    category: "کلاسیک",
    rating: 4.4,
    reviews: 1240,
    description: "رمان کلاسیک فرانسوی درباره جاه‌طلبی و عشق در فرانسه قرن نوزدهم.",
    inStock: true,
  },
  {
    id: 8,
    title: "استارتاپ ناب",
    author: "اریک ریس",
    price: 88000,
    cover: "https://picsum.photos/seed/book8/300/400",
    category: "کسب‌وکار",
    rating: 4.5,
    reviews: 1780,
    description: "روشی نوین برای ایجاد کسب‌وکارهای موفق از طریق آزمایش مداوم.",
    inStock: true,
    badge: "جدید",
  },
];

export const categories = ["همه", "خودسازی", "رمان", "روانشناسی", "مالی", "کسب‌وکار", "کلاسیک", "معنوی"];
