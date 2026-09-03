"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiBookOpen } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showC, setShowC] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "نام الزامی است";
    if (!form.email.includes("@")) e.email = "ایمیل معتبر وارد کن";
    if (form.password.length < 6) e.password = "رمز باید حداقل ۶ کاراکتر باشد";
    if (form.password !== form.confirm) e.confirm = "رمزها مطابقت ندارند";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
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

  const f = (id: keyof typeof form) => ({
    value: form[id],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [id]: e.target.value });
      if (errors[id]) setErrors({ ...errors, [id]: "" });
    },
  });

  const inputCls = (err?: string) =>
    `w-full border rounded-xl py-2.5 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 transition-all ${
      err ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-amber-400 focus:ring-amber-100"
    }`;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 justify-center">
            <FiBookOpen className="text-amber-600 text-3xl" />
            <span className="text-2xl font-black text-amber-700">کتاب‌خانه</span>
          </Link>
          <h1 className="text-2xl font-black text-gray-900 mt-4">ایجاد حساب کاربری</h1>
          <p className="text-gray-500 text-sm mt-1">به خانواده کتاب‌خانه بپیوند</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all disabled:opacity-60 mb-6"
          >
            <FcGoogle className="h-5 w-5" />
            ثبت‌نام با گوگل
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">یا با ایمیل</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">نام و نام خانوادگی</label>
              <div className="relative">
                <FiUser className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="علی محمدی" {...f("name")} className={inputCls(errors.name) + " pr-10"} />
              </div>
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">ایمیل</label>
              <div className="relative">
                <FiMail className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <input type="email" placeholder="example@email.com" {...f("email")} className={inputCls(errors.email) + " pr-10"} />
              </div>
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">رمز عبور</label>
              <div className="relative">
                <FiLock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <input type={show ? "text" : "password"} placeholder="حداقل ۶ کاراکتر" {...f("password")} className={inputCls(errors.password) + " pr-10 pl-10"} />
                <button type="button" onClick={() => setShow(!show)} className="absolute left-3 top-3 text-gray-400">
                  {show ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">تکرار رمز عبور</label>
              <div className="relative">
                <FiLock className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <input type={showC ? "text" : "password"} placeholder="رمز را دوباره وارد کن" {...f("confirm")} className={inputCls(errors.confirm) + " pr-10 pl-10"} />
                <button type="button" onClick={() => setShowC(!showC)} className="absolute left-3 top-3 text-gray-400">
                  {showC ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
            </div>

            <p className="text-xs text-gray-400">
              با ثبت‌نام، <Link href="#" className="text-amber-600 hover:underline">قوانین و شرایط</Link> را می‌پذیری.
            </p>

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
              ) : "ایجاد حساب"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            قبلاً حساب داری?{" "}
            <Link href="/login" className="text-amber-600 hover:text-amber-700 font-semibold">وارد شو</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
