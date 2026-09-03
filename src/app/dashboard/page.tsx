"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { FiLogOut, FiDownload, FiShoppingBag, FiUser, FiBookOpen, FiStar, FiPackage, FiX, FiCheck } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import { Book, books } from "@/lib/data";

export default function DashboardPage() {
  const router = useRouter();
  const { user, login, logout, isLogged } = useAuth();
  const { items, totalItems, totalPrice } = useCart();
  const [purchased, setPurchased] = useState<Book[]>([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", email: "" });
  const [editSaved, setEditSaved] = useState(false);

  useEffect(() => {
    if (!isLogged) router.push("/login");
  }, [isLogged, router]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("purchased_books") || "[]");
      setPurchased(saved);
    } catch {}
  }, []);

  if (!user) return null;

  const openEdit = () => {
    setEditForm({ name: user.name, email: user.email });
    setEditSaved(false);
    setEditOpen(true);
  };

  const saveEdit = () => {
    if (!editForm.name.trim()) return;
    login(editForm.email, editForm.name);
    setEditSaved(true);
    setTimeout(() => setEditOpen(false), 1000);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Edit Profile Modal */}
      {editOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setEditOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-black text-gray-900 text-lg">ویرایش پروفایل</h2>
              <button onClick={() => setEditOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <FiX className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="flex justify-center mb-5">
              <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-2xl border-2 border-amber-200" />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">نام و نام خانوادگی</label>
                <div className="relative">
                  <FiUser className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl py-2.5 pr-10 pl-4 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">ایمیل</label>
                <div className="relative">
                  <FiPackage className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl py-2.5 pr-10 pl-4 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={saveEdit}
                className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition-all text-sm ${
                  editSaved
                    ? "bg-emerald-500 text-white"
                    : "bg-amber-600 hover:bg-amber-700 active:scale-95 text-white shadow-md shadow-amber-200"
                }`}
              >
                {editSaved ? <><FiCheck className="h-4 w-4" /> ذخیره شد!</> : "ذخیره تغییرات"}
              </button>
              <button
                onClick={() => setEditOpen(false)}
                className="px-4 py-3 border border-gray-200 hover:border-gray-300 text-gray-600 rounded-xl transition-colors text-sm font-medium"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-2xl border-2 border-amber-200"
            />
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900">سلام، {user.name}! 👋</h1>
            <p className="text-gray-500 text-sm mt-0.5">{user.email}</p>
            <p className="text-xs text-amber-600 mt-0.5">عضو از {user.joinedAt}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-red-200 text-red-500 hover:bg-red-50 font-medium px-4 py-2 rounded-xl transition-colors text-sm"
        >
          <FiLogOut className="h-4 w-4" />
          خروج از حساب
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { icon: <FiBookOpen />, label: "کتاب خریداری‌شده", value: purchased.length, color: "bg-amber-50 text-amber-600" },
          { icon: <FiDownload />, label: "دانلود موجود", value: purchased.length, color: "bg-blue-50 text-blue-600" },
          { icon: <FiShoppingBag />, label: "در سبد خرید", value: totalItems, color: "bg-purple-50 text-purple-600" },
          { icon: <FiStar />, label: "امتیاز کاربری", value: "طلایی", color: "bg-yellow-50 text-yellow-600" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 ${s.color}`}>
              {s.icon}
            </div>
            <p className="text-2xl font-black text-gray-900">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Purchased / Downloads */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-black text-gray-900 text-lg">کتاب‌های خریداری‌شده</h2>
              <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2.5 py-1 rounded-full">{purchased.length} کتاب</span>
            </div>
            <div className="space-y-4">
              {purchased.map((book) => (
                <div key={book.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="relative h-16 w-12 shrink-0 rounded-xl overflow-hidden shadow-sm">
                    <Image src={book.cover} alt={book.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm line-clamp-1">{book.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{book.author}</p>
                    <div className="flex text-amber-400 mt-1">
                      {[1,2,3,4,5].map((s) => (
                        <HiStar key={s} className={`h-3 w-3 ${s <= Math.round(book.rating) ? "text-amber-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all shrink-0">
                    <FiDownload className="h-3.5 w-3.5" />
                    دانلود PDF
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart items */}
          {items.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-black text-gray-900 text-lg">سبد خرید فعلی</h2>
                <Link href="/cart" className="text-xs text-amber-600 font-bold hover:text-amber-700">مشاهده سبد ←</Link>
              </div>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="relative h-12 w-9 shrink-0 rounded-lg overflow-hidden">
                      <Image src={item.cover} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm line-clamp-1">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.quantity} عدد × {item.price.toLocaleString("fa-IR")} ت</p>
                    </div>
                    <p className="text-sm font-black text-amber-700 shrink-0">
                      {(item.price * item.quantity).toLocaleString("fa-IR")} ت
                    </p>
                  </div>
                ))}
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="font-black text-gray-900">جمع کل</span>
                  <span className="font-black text-amber-700">{totalPrice.toLocaleString("fa-IR")} تومان</span>
                </div>
                <Link
                  href="/cart"
                  className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition-colors mt-2"
                >
                  پرداخت
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Profile card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-black text-gray-900 mb-4">اطلاعات حساب</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <FiUser className="h-4 w-4 text-amber-500 shrink-0" />
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FiPackage className="h-4 w-4 text-amber-500 shrink-0" />
                <span>{user.email}</span>
              </div>
            </div>
            <button
              onClick={openEdit}
              className="w-full mt-4 border border-gray-200 hover:border-amber-300 text-gray-600 hover:text-amber-700 font-medium py-2.5 rounded-xl transition-colors text-sm"
            >
              ویرایش پروفایل
            </button>
          </div>

          {/* Recommended */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-black text-gray-900 mb-4">پیشنهاد برای شما</h3>
            <div className="space-y-3">
              {books.slice(1, 4).map((book) => (
                <Link key={book.id} href={`/books/${book.id}`} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-xl transition-colors">
                  <div className="relative h-12 w-9 shrink-0 rounded-lg overflow-hidden">
                    <Image src={book.cover} alt={book.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-900 line-clamp-1">{book.title}</p>
                    <p className="text-xs text-amber-700 font-bold mt-0.5">{book.price.toLocaleString("fa-IR")} ت</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/books"
              className="block w-full text-center mt-4 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold py-2.5 rounded-xl transition-colors text-sm"
            >
              مشاهده همه کتاب‌ها
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
