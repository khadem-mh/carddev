"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX, FiBookOpen } from "react-icons/fi";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/books?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <FiBookOpen className="text-amber-600 text-2xl" />
            <span className="text-xl font-extrabold text-amber-700">کتاب‌خانه</span>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی کتاب، نویسنده..."
                className="w-full border border-gray-200 rounded-full py-2 pr-4 pl-10 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
              />
              <button type="submit" className="absolute left-3 top-2.5 text-gray-400 hover:text-amber-600 transition-colors">
                <FiSearch className="h-4 w-4" />
              </button>
            </div>
          </form>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/books" className="hover:text-amber-700 transition-colors">کتاب‌ها</Link>
            <Link href="/books?sale=1" className="hover:text-amber-700 transition-colors">تخفیف‌ها</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="p-2 text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-colors hidden md:flex">
              <FiUser className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="relative p-2 text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-colors">
              <FiShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-amber-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="جستجو..."
                  className="w-full border border-gray-200 rounded-full py-2 pr-4 pl-10 text-sm focus:outline-none focus:border-amber-400"
                />
                <button type="submit" className="absolute left-3 top-2.5 text-gray-400">
                  <FiSearch className="h-4 w-4" />
                </button>
              </div>
            </form>
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-600">
              <Link href="/books" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">کتاب‌ها</Link>
              <Link href="/books?sale=1" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">تخفیف‌ها</Link>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">ورود</Link>
              <Link href="/register" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">ثبت‌نام</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
