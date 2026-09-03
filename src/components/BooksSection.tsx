"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { books, categories } from "@/lib/data";
import BookCard from "./BookCard";

export default function BooksSection() {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState("همه");

  const q = searchParams.get("q") || "";
  const sale = searchParams.get("sale") === "1";

  const filtered = books.filter((b) => {
    if (selected !== "همه" && b.category !== selected) return false;
    if (sale && !b.originalPrice) return false;
    if (q && !b.title.includes(q) && !b.author.includes(q) && !b.category.includes(q)) return false;
    return true;
  });

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              {q ? `نتایج جستجو: "${q}"` : sale ? "کتاب‌های تخفیف‌دار" : "کتاب‌های ما"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{filtered.length} عنوان کتاب</p>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selected === cat
                  ? "bg-amber-600 text-white shadow-md shadow-amber-200"
                  : "bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-700 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">📭</p>
            <p className="text-gray-500 font-medium">کتابی با این مشخصات پیدا نشد</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
