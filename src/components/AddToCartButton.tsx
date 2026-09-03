"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Book } from "@/lib/data";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function AddToCartButton({ book }: { book: Book }) {
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState(false);
  const inCart = items.some((i) => i.id === book.id);

  const handleAdd = () => {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!book.inStock) {
    return (
      <button disabled className="w-full bg-gray-200 text-gray-400 cursor-not-allowed font-bold py-3.5 px-6 rounded-xl text-base">
        ناموجود
      </button>
    );
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAdd}
        className={`flex-1 flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl text-base transition-all active:scale-95 ${
          added
            ? "bg-emerald-500 text-white"
            : "bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-200"
        }`}
      >
        {added ? <FiCheck className="h-5 w-5" /> : <FiShoppingCart className="h-5 w-5" />}
        {added ? "به سبد اضافه شد!" : inCart ? "دوباره اضافه کن" : "افزودن به سبد خرید"}
      </button>
      {inCart && (
        <Link
          href="/cart"
          className="flex items-center gap-2 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-bold py-3.5 px-4 rounded-xl transition-colors text-sm"
        >
          مشاهده سبد
        </Link>
      )}
    </div>
  );
}
