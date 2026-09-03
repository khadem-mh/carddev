import { books } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { HiStar } from "react-icons/hi";
import { FiBookOpen, FiCalendar, FiLayers } from "react-icons/fi";

export function generateStaticParams() {
  return books.map((b) => ({ id: String(b.id) }));
}

export default async function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = books.find((b) => b.id === Number(id));
  if (!book) notFound();

  const discount = book.originalPrice
    ? Math.round((1 - book.price / book.originalPrice) * 100)
    : 0;

  const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-amber-700">خانه</Link>
        <span>/</span>
        <Link href="/books" className="hover:text-amber-700">کتاب‌ها</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{book.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Cover */}
        <div className="flex justify-center">
          <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-amber-100">
            <Image src={book.cover} alt={book.title} fill className="object-cover" />
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                %{discount} تخفیف
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div>
          {book.badge && (
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${
              book.badge === "پرفروش" ? "bg-red-100 text-red-600" :
              book.badge === "جدید" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
            }`}>
              {book.badge}
            </span>
          )}
          <h1 className="text-3xl font-black text-gray-900 mb-2 leading-tight">{book.title}</h1>
          <p className="text-lg text-amber-700 font-semibold mb-4">{book.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-amber-400">
              {[1,2,3,4,5].map((s) => (
                <HiStar key={s} className={`h-5 w-5 ${s <= Math.round(book.rating) ? "text-amber-400" : "text-gray-200"}`} />
              ))}
            </div>
            <span className="font-bold text-gray-800">{book.rating}</span>
            <span className="text-sm text-gray-500">({book.reviews.toLocaleString("fa-IR")} نظر)</span>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-3 gap-4 bg-amber-50 rounded-xl p-4 mb-6 text-center">
            <div className="flex flex-col items-center gap-1">
              <FiBookOpen className="text-amber-600 h-5 w-5" />
              <span className="text-xs text-gray-500">ناشر</span>
              <span className="text-xs font-bold text-gray-800">{book.publisher}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FiLayers className="text-amber-600 h-5 w-5" />
              <span className="text-xs text-gray-500">صفحات</span>
              <span className="text-xs font-bold text-gray-800">{book.pages}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FiCalendar className="text-amber-600 h-5 w-5" />
              <span className="text-xs text-gray-500">سال نشر</span>
              <span className="text-xs font-bold text-gray-800">{book.year}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">{book.description}</p>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <div>
              {book.originalPrice && (
                <p className="text-sm text-gray-400 line-through">{book.originalPrice.toLocaleString("fa-IR")} تومان</p>
              )}
              <p className="text-3xl font-black text-gray-900">
                {book.price.toLocaleString("fa-IR")}
                <span className="text-base font-normal text-gray-500 mr-1">تومان</span>
              </p>
            </div>
          </div>

          <AddToCartButton book={book} />

          <p className={`mt-3 text-sm font-medium ${book.inStock ? "text-emerald-600" : "text-red-500"}`}>
            {book.inStock ? "✓ موجود در انبار" : "✗ ناموجود"}
          </p>
        </div>
      </div>

      {/* Related books */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-black text-gray-900 mb-6">کتاب‌های مشابه</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {related.map((b) => (
              <Link key={b.id} href={`/books/${b.id}`} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all">
                <div className="relative h-16 w-12 shrink-0 rounded-lg overflow-hidden">
                  <Image src={b.cover} alt={b.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 line-clamp-1">{b.title}</p>
                  <p className="text-xs text-gray-500">{b.author}</p>
                  <p className="text-sm font-bold text-amber-700 mt-1">{b.price.toLocaleString("fa-IR")} ت</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
