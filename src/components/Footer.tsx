import Link from "next/link";
import { FiBookOpen, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FiBookOpen className="text-amber-500 text-2xl" />
              <span className="text-white text-xl font-black">کتاب‌خانه</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              بزرگ‌ترین فروشگاه آنلاین کتاب با بیش از ۱۰،۰۰۰ عنوان در دسته‌بندی‌های مختلف.
            </p>
            <div className="flex gap-3">
              {[FiInstagram, FiTwitter, FiLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-amber-600 hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "دسته‌بندی‌ها",
              links: [
                { label: "رمان", href: "/books" },
                { label: "خودسازی", href: "/books" },
                { label: "روانشناسی", href: "/books" },
                { label: "کسب‌وکار", href: "/books" },
              ],
            },
            {
              title: "خدمات",
              links: [
                { label: "ارسال سریع", href: "#" },
                { label: "بازگشت کالا", href: "#" },
                { label: "پشتیبانی ۲۴/۷", href: "#" },
                { label: "کارت هدیه", href: "#" },
              ],
            },
            {
              title: "ارتباط با ما",
              links: [
                { label: "info@ketabkhaneh.ir", href: "#" },
                { label: "۰۲۱-۱۲۳۴۵۶۷۸", href: "#" },
                { label: "تهران، خیابان ولیعصر", href: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-bold mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-amber-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© ۱۴۰۳ کتاب‌خانه. تمام حقوق محفوظ است.</p>
          <div className="flex items-center gap-2">
            {["ویزا", "مسترکارت", "شبا"].map((p) => (
              <span key={p} className="bg-gray-800 text-gray-400 text-xs px-3 py-1.5 rounded-lg">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
