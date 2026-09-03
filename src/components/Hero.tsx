import Link from "next/link";
import { FiArrowLeft, FiTruck, FiRefreshCw, FiLock, FiHeadphones } from "react-icons/fi";

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-bl from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                🎉 تخفیف ویژه تابستان — تا ۳۰٪ تخفیف
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
                دنیای کتاب
                <br />
                <span className="text-amber-600">در دسترس شماست</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
                بیش از ۱۰،۰۰۰ عنوان کتاب در دسته‌بندی‌های مختلف با ارسال رایگان برای خریدهای بالای ۲۰۰ هزار تومان.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/books"
                  className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-amber-200"
                >
                  مشاهده همه کتاب‌ها
                  <FiArrowLeft />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  پیشنهادهای ویژه
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-amber-100">
                {[
                  { label: "عنوان کتاب", value: "+۱۰,۰۰۰" },
                  { label: "مشتری راضی", value: "+۵۰,۰۰۰" },
                  { label: "ارسال سریع", value: "۲۴ ساعته" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-amber-700">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4 max-h-[480px]">
              {[
                "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
                "https://covers.openlibrary.org/b/isbn/9781594483073-L.jpg",
                "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
                "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? "mt-8" : ""}`}
                >
                  <img src={src} alt="" className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <div className="bg-white border-y border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FiTruck />, title: "ارسال رایگان", sub: "بالای ۲۰۰ هزار تومان" },
              { icon: <FiRefreshCw />, title: "بازگشت کالا", sub: "تا ۷ روز ضمانت" },
              { icon: <FiLock />, title: "پرداخت امن", sub: "درگاه معتبر بانکی" },
              { icon: <FiHeadphones />, title: "پشتیبانی", sub: "۲۴ ساعته / ۷ روز" },
            ].map((f) => (
              <div key={f.title} className="flex items-center gap-3 py-2">
                <span className="text-amber-600 text-2xl shrink-0">{f.icon}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{f.title}</p>
                  <p className="text-xs text-gray-500">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
