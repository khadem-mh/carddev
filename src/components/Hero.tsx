export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              🎉 تخفیف ویژه تابستان تا ۳۰٪
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              دنیای کتاب
              <span className="text-amber-600"> در دسترس شماست</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              بیش از ۱۰،۰۰۰ عنوان کتاب در دسته‌بندی‌های مختلف با ارسال رایگان برای خریدهای بالای ۲۰۰ هزار تومان.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                مشاهده کتاب‌ها
              </button>
              <button className="border border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold px-6 py-3 rounded-xl transition-colors">
                پیشنهادهای ویژه
              </button>
            </div>

            <div className="flex gap-8 mt-10">
              {[
                { label: "عنوان کتاب", value: "+۱۰,۰۰۰" },
                { label: "مشتری راضی", value: "+۵۰,۰۰۰" },
                { label: "ارسال سریع", value: "۲۴ ساعته" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-amber-700">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {["seed/hero1", "seed/hero2", "seed/hero3", "seed/hero4"].map((seed, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden shadow-lg ${i === 1 ? "mt-8" : ""}`}
                >
                  <img
                    src={`https://picsum.photos/${seed}/240/320`}
                    alt="book"
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
