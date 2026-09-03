export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📚</span>
              <span className="text-white text-xl font-bold">کتاب‌خانه</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              بزرگ‌ترین فروشگاه آنلاین کتاب با بیش از ۱۰،۰۰۰ عنوان در دسته‌بندی‌های مختلف.
            </p>
          </div>

          {[
            {
              title: "دسته‌بندی‌ها",
              links: ["رمان", "خودسازی", "روانشناسی", "کسب‌وکار"],
            },
            {
              title: "خدمات",
              links: ["ارسال سریع", "بازگشت کالا", "پشتیبانی ۲۴/۷", "کارت هدیه"],
            },
            {
              title: "ارتباط با ما",
              links: ["info@ketabkhaneh.ir", "021-12345678", "تهران، خیابان ولیعصر"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© ۱۴۰۳ کتاب‌خانه. تمام حقوق محفوظ است.</p>
          <div className="flex items-center gap-3">
            {["visa", "master", "شبا"].map((p) => (
              <span key={p} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
