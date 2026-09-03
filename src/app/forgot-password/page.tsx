"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMail, FiBookOpen, FiArrowRight, FiCheck } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <FiBookOpen className="text-amber-600 text-3xl" />
            <span className="text-2xl font-black text-amber-700">کتاب‌خانه</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {!sent ? (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-2xl mb-4">
                  <FiMail className="h-7 w-7 text-amber-600" />
                </div>
                <h1 className="text-xl font-black text-gray-900">فراموشی رمز عبور</h1>
                <p className="text-gray-500 text-sm mt-2">
                  ایمیل حساب خود را وارد کن تا لینک بازیابی رمز برات بفرستیم.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">ایمیل</label>
                  <div className="relative">
                    <FiMail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl py-2.5 pr-10 pl-4 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-amber-200"
                >
                  ارسال لینک بازیابی
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-5">
                <FiCheck className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-xl font-black text-gray-900 mb-2">ایمیل ارسال شد!</h2>
              <p className="text-gray-500 text-sm mb-2">
                لینک بازیابی رمز عبور به
              </p>
              <p className="font-bold text-amber-700 text-sm mb-4">{email}</p>
              <p className="text-gray-500 text-sm mb-8">
                ارسال شد. ایمیل خود را چک کن. (اگر پیدا نکردی پوشه Spam را هم بررسی کن)
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-sm text-amber-600 hover:text-amber-700 font-semibold"
              >
                ایمیل اشتباهه؟ دوباره امتحان کن
              </button>
            </div>
          )}

          <div className="flex items-center justify-center mt-6 pt-6 border-t border-gray-100">
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-700 transition-colors font-medium"
            >
              <FiArrowRight className="h-4 w-4" />
              برگشت به صفحه ورود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
