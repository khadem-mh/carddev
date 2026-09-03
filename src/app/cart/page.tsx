"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowRight, FiCheck } from "react-icons/fi";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const [paying, setPaying] = useState(false);
  const [paid, setPaid] = useState(false);
  const router = useRouter();

  const handlePay = async () => {
    setPaying(true);
    await new Promise((r) => setTimeout(r, 1200));
    setPaying(false);
    setPaid(true);
    setTimeout(() => {
      clearCart();
      router.push("/");
    }, 2000);
  };

  if (paid) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <FiCheck className="h-10 w-10 text-emerald-600" />
        </div>
        <h1 className="text-2xl font-black text-gray-900 mb-2">پرداخت موفق!</h1>
        <p className="text-gray-500">در حال انتقال به صفحه اصلی...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <FiShoppingBag className="h-20 w-20 text-gray-200 mb-6" />
        <h1 className="text-2xl font-black text-gray-800 mb-2">سبد خرید شما خالی است</h1>
        <p className="text-gray-500 mb-8">هنوز کتابی به سبد اضافه نکردی!</p>
        <Link
          href="/books"
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          <FiArrowRight />
          رفتن به فروشگاه
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 200000 ? 0 : 25000;
  const finalPrice = totalPrice + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-900">سبد خرید</h1>
          <p className="text-gray-500 text-sm mt-1">{totalItems} کتاب</p>
        </div>
        <button
          onClick={clearCart}
          className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-medium transition-colors hover:bg-red-50 px-3 py-2 rounded-xl"
        >
          <FiTrash2 className="h-4 w-4" />
          حذف همه
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 shadow-sm">
              <Link href={`/books/${item.id}`} className="shrink-0">
                <div className="relative h-24 w-16 rounded-xl overflow-hidden">
                  <Image src={item.cover} alt={item.title} fill className="object-cover" />
                </div>
              </Link>

              <div className="flex-1 min-w-0">
                <Link href={`/books/${item.id}`}>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug hover:text-amber-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-xs mt-0.5">{item.author}</p>

                <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all"
                    >
                      <FiMinus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all"
                    >
                      <FiPlus className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="font-black text-gray-900 text-base">
                      {(item.price * item.quantity).toLocaleString("fa-IR")}
                      <span className="text-xs font-normal text-gray-500 mr-1">تومان</span>
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
            <h2 className="font-black text-gray-900 text-lg mb-6">خلاصه سفارش</h2>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>قیمت کالاها ({totalItems} عدد)</span>
                <span>{totalPrice.toLocaleString("fa-IR")} تومان</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>هزینه ارسال</span>
                {shipping === 0 ? (
                  <span className="text-emerald-600 font-semibold">رایگان</span>
                ) : (
                  <span>{shipping.toLocaleString("fa-IR")} تومان</span>
                )}
              </div>
              {shipping > 0 && (
                <p className="text-xs text-amber-600 bg-amber-50 rounded-xl p-2.5">
                  برای ارسال رایگان {(200000 - totalPrice).toLocaleString("fa-IR")} تومان دیگر خرید کنید
                </p>
              )}
              <div className="border-t pt-3 flex justify-between font-black text-gray-900 text-base">
                <span>مبلغ قابل پرداخت</span>
                <span>{finalPrice.toLocaleString("fa-IR")} تومان</span>
              </div>
            </div>

            <button
              onClick={handlePay}
              disabled={paying}
              className="w-full bg-amber-600 hover:bg-amber-700 active:scale-95 disabled:opacity-70 text-white font-black py-4 rounded-xl transition-all text-base shadow-lg shadow-amber-200 flex items-center justify-center gap-2"
            >
              {paying ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  در حال پرداخت...
                </>
              ) : "پرداخت"}
            </button>

            <Link
              href="/books"
              className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500 hover:text-amber-700 transition-colors"
            >
              <FiArrowRight className="h-4 w-4" />
              ادامه خرید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
