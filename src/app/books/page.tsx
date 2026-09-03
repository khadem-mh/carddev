import { books, categories } from "@/lib/data";
import BooksSection from "@/components/BooksSection";

export default function BooksPage() {
  return (
    <div>
      <div className="bg-gradient-to-bl from-amber-50 to-orange-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-gray-900 mb-2">همه کتاب‌ها</h1>
          <p className="text-gray-500">{books.length} عنوان موجود در فروشگاه</p>
        </div>
      </div>
      <BooksSection />
    </div>
  );
}
