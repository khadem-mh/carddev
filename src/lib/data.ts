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
  badge?: "پرفروش" | "جدید" | "تخفیف";
  pages: number;
  publisher: string;
  year: number;
};

export const books: Book[] = [
  {
    id: 1,
    title: "اتم‌های عادت",
    author: "جیمز کلیر",
    price: 85000,
    originalPrice: 120000,
    cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    category: "خودسازی",
    rating: 4.8,
    reviews: 2340,
    description: "کتابی درباره چگونگی ایجاد عادت‌های خوب و ترک عادت‌های بد با تغییرات کوچک اما مداوم. جیمز کلیر با ارائه روش‌های علمی ثابت‌شده، به شما نشان می‌دهد که چگونه می‌توانید با تغییرات ۱ درصدی، نتایج شگفت‌انگیز بسازید.",
    inStock: true,
    badge: "پرفروش",
    pages: 320,
    publisher: "نشر آریاناقلم",
    year: 1401,
  },
  {
    id: 2,
    title: "قدرت حال",
    author: "اکهارت تله",
    price: 72000,
    cover: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
    category: "معنوی",
    rating: 4.6,
    reviews: 1890,
    description: "راهنمایی برای رسیدن به روشنگری از طریق زندگی در لحظه حال. اکهارت تله با زبانی ساده و روان، شما را به سفری درونی دعوت می‌کند که در آن یاد می‌گیرید از افکار آزاردهنده رها شوید.",
    inStock: true,
    badge: "جدید",
    pages: 236,
    publisher: "نشر پندار تابان",
    year: 1402,
  },
  {
    id: 3,
    title: "پدر پولدار، پدر فقیر",
    author: "رابرت کیوساکی",
    price: 95000,
    originalPrice: 130000,
    cover: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
    category: "مالی",
    rating: 4.5,
    reviews: 3120,
    description: "درس‌هایی که مدرسه درباره پول به شما نمی‌آموزد. این کتاب دیدگاه شما را نسبت به پول، سرمایه‌گذاری و ثروت کاملاً تغییر می‌دهد.",
    inStock: true,
    badge: "تخفیف",
    pages: 285,
    publisher: "نشر آستان قدس",
    year: 1400,
  },
  {
    id: 4,
    title: "هزار خورشید تابان",
    author: "خالد حسینی",
    price: 68000,
    cover: "https://covers.openlibrary.org/b/isbn/9781594483073-L.jpg",
    category: "رمان",
    rating: 4.9,
    reviews: 4560,
    description: "داستانی از دوستی عمیق دو زن افغان در بستر تاریخ معاصر. روایتی تکان‌دهنده از مقاومت، عشق و امید در میان جنگ و ویرانی.",
    inStock: true,
    pages: 372,
    publisher: "نشر ثالث",
    year: 1399,
  },
  {
    id: 5,
    title: "بادبادک‌باز",
    author: "خالد حسینی",
    price: 62000,
    cover: "https://covers.openlibrary.org/b/isbn/9781594480003-L.jpg",
    category: "رمان",
    rating: 4.8,
    reviews: 5230,
    description: "داستانی پرتأثیر از دوستی، خیانت و بازگشت در افغانستان. روایتی که قلب هر خواننده‌ای را به لرزه درمی‌آورد.",
    inStock: false,
    pages: 324,
    publisher: "نشر ثالث",
    year: 1398,
  },
  {
    id: 6,
    title: "تفکر سریع و کند",
    author: "دانیل کانمن",
    price: 110000,
    originalPrice: 150000,
    cover: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
    category: "روانشناسی",
    rating: 4.7,
    reviews: 2890,
    description: "کاوشی در دو سیستم تفکر انسانی و تأثیر آن‌ها بر تصمیمات ما. دانیل کانمن برنده جایزه نوبل، رازهای ذهن انسان را آشکار می‌کند.",
    inStock: true,
    badge: "تخفیف",
    pages: 499,
    publisher: "نشر دانژه",
    year: 1401,
  },
  {
    id: 7,
    title: "سرخ و سیاه",
    author: "استاندال",
    price: 55000,
    cover: "https://covers.openlibrary.org/b/isbn/9780140447644-L.jpg",
    category: "کلاسیک",
    rating: 4.4,
    reviews: 1240,
    description: "رمان کلاسیک فرانسوی درباره جاه‌طلبی و عشق در فرانسه قرن نوزدهم. شاهکاری که بیش از دو قرن است خوانندگان را مجذوب خود کرده.",
    inStock: true,
    pages: 576,
    publisher: "نشر نیلوفر",
    year: 1399,
  },
  {
    id: 8,
    title: "استارتاپ ناب",
    author: "اریک ریس",
    price: 88000,
    cover: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
    category: "کسب‌وکار",
    rating: 4.5,
    reviews: 1780,
    description: "روشی نوین برای ایجاد کسب‌وکارهای موفق از طریق آزمایش مداوم. روشی که صدها استارتاپ موفق را متحول کرده است.",
    inStock: true,
    badge: "جدید",
    pages: 299,
    publisher: "نشر آریاناقلم",
    year: 1402,
  },
];

export const categories = ["همه", "خودسازی", "رمان", "روانشناسی", "مالی", "کسب‌وکار", "کلاسیک", "معنوی"];
