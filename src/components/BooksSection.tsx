"use client";
import { useState } from "react";
import { books, categories } from "@/lib/data";
import BookCard from "./BookCard";
import { FiGrid, FiList } from "react-icons/fi";

export default function BooksSection() {
  const [selected, setSelected] = useState("همه");

  const filtered = selected === "همه" ? books : books.filter((b) => b.category === selected);

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-black text-gray-900">کتاب‌های ما</h2>
            <p className="text-gray-500 text-sm mt-1">{filtered.length} عنوان کتاب</p>
          </div>
        </div>

        {/* Category pills */}
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
