"use client";
import { useState } from "react";
import { books, categories } from "@/lib/data";
import BookCard from "./BookCard";
import CategoryFilter from "./CategoryFilter";

export default function BooksSection() {
  const [selected, setSelected] = useState("همه");

  const filtered = selected === "همه" ? books : books.filter((b) => b.category === selected);

  return (
    <section className="py-14" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">کتاب‌های ما</h2>
            <p className="text-gray-500 text-sm mt-1">{filtered.length} عنوان کتاب</p>
          </div>
          <CategoryFilter categories={categories} selected={selected} onChange={setSelected} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
