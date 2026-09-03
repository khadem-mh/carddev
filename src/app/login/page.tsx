"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiEye, FiEyeOff, FiBookOpen } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    router.push("/");
  };

  const handleGoogle = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <FiBookOpen className="text-amber-600 text-3xl" />
            <span className="text-2xl font-black text-amber-700">کتاب‌خانه</span>
          </Link>
          <h1 className="text-2xl font-black text-gray-900 mt-4">ورود به حساب</h1>
          <p className="text-gray-500 text-sm mt-1">خوش برگشتی! وارد حساب خود شو</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-60"
          >
            <FcGoogle className="h-5 w-5" />
            ورود با گوگل
          </button>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">یا با ایمیل</span>
            <div className="flex-1 h-px bg-gray-100" />
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl py-2.5 pr-10 pl-4 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-semibold text-gray-700">رمز عبور</label>
                <Link href="/forgot-password" className="text-xs text-amber-600 hover:text-amber-700 font-medium">
                  فراموشی رمز؟
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type={show ? "text" : "password"}
                  required
                  placeholder="رمز عبور خود را وارد کنید"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl py-2.5 pr-10 pl-10 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute left-3 top-3 text-gray-400 hover:text-gray-600">
                  {show ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                className="w-4 h-4 accent-amber-600 rounded"
              />
              <span className="text-sm text-gray-600">مرا به خاطر بسپار</span>
            </label>

            {error && <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-2">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 active:scale-95 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-amber-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              ) : "ورود"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            حساب نداری?{" "}
            <Link href="/register" className="text-amber-600 hover:text-amber-700 font-semibold">ثبت‌نام کن</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
