import Image from "next/image";
import { Book } from "@/lib/data";

export default function BookCard({ book }: { book: Book }) {
  const discount = book.originalPrice
    ? Math.round((1 - book.price / book.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden group" dir="rtl">
      <div className="relative overflow-hidden bg-gray-50 h-56">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {book.badge && (
          <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full text-white ${
            book.badge === "پرفروش" ? "bg-red-500" :
            book.badge === "جدید" ? "bg-green-500" : "bg-amber-500"
          }`}>
            {book.badge}
          </span>
        )}
        {!book.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white text-gray-800 text-sm font-bold px-3 py-1 rounded-full">ناموجود</span>
          </div>
        )}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}٪
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-amber-700 font-medium mb-1">{book.category}</p>
        <h3 className="font-bold text-gray-900 text-sm mb-1 leading-tight line-clamp-2">{book.title}</h3>
        <p className="text-gray-500 text-xs mb-3">{book.author}</p>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`h-3 w-3 ${i < Math.floor(book.rating) ? "fill-current" : "fill-gray-200"}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400">({book.reviews.toLocaleString("fa-IR")})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">{book.price.toLocaleString("fa-IR")}</span>
            <span className="text-xs text-gray-500 mr-1">تومان</span>
            {book.originalPrice && (
              <p className="text-xs text-gray-400 line-through">{book.originalPrice.toLocaleString("fa-IR")}</p>
            )}
          </div>
          <button
            disabled={!book.inStock}
            className="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-200 disabled:cursor-not-allowed text-white text-xs font-medium px-4 py-2 rounded-xl transition-colors"
          >
            {book.inStock ? "افزودن" : "ناموجود"}
          </button>
        </div>
      </div>
    </div>
  );
}
