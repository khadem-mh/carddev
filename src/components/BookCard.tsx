"use client";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { useState } from "react";

export default function BookCard({ book }: { book: Book }) {
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.some((i) => i.id === book.id);

  const discount = book.originalPrice
    ? Math.round((1 - book.price / book.originalPrice) * 100)
    : 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link href={`/books/${book.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
        {/* Cover */}
        <div className="relative overflow-hidden bg-gray-50 h-56 shrink-0">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {book.badge && (
            <span className={`absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full text-white shadow ${
              book.badge === "پرفروش" ? "bg-red-500" :
              book.badge === "جدید" ? "bg-emerald-500" : "bg-amber-500"
            }`}>
              {book.badge}
            </span>
          )}
          {!book.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-gray-800 text-sm font-bold px-4 py-1.5 rounded-full">ناموجود</span>
            </div>
          )}
          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-full shadow">
              %{discount}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <span className="text-[11px] text-amber-700 font-semibold mb-1">{book.category}</span>
          <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-1">{book.title}</h3>
          <p className="text-gray-500 text-xs mb-3">{book.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            <div className="flex text-amber-400">
              {[1,2,3,4,5].map((s) => (
                <HiStar key={s} className={`h-3.5 w-3.5 ${s <= Math.round(book.rating) ? "text-amber-400" : "text-gray-200"}`} />
              ))}
            </div>
            <span className="text-[11px] text-gray-400">({book.reviews.toLocaleString("fa-IR")})</span>
          </div>

          {/* Price + Add */}
          <div className="flex items-end justify-between mt-auto">
            <div>
              {book.originalPrice && (
                <p className="text-xs text-gray-400 line-through mb-0.5">
                  {book.originalPrice.toLocaleString("fa-IR")} تومان
                </p>
              )}
              <p className="text-base font-bold text-gray-900">
                {book.price.toLocaleString("fa-IR")}
                <span className="text-xs font-normal text-gray-500 mr-1">تومان</span>
              </p>
            </div>
            <button
              onClick={handleAdd}
              disabled={!book.inStock}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl transition-all ${
                !book.inStock
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : added || inCart
                  ? "bg-emerald-500 text-white"
                  : "bg-amber-600 hover:bg-amber-700 text-white active:scale-95"
              }`}
            >
              <FiShoppingCart className="h-3.5 w-3.5" />
              {added ? "افزوده شد" : inCart ? "در سبد" : "افزودن"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
