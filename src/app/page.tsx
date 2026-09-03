import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BooksSection from "@/components/BooksSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      {/* Features bar */}
      <div className="bg-white border-y border-gray-100" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
            {[
              { icon: "🚚", text: "ارسال رایگان بالای ۲۰۰ هزار" },
              { icon: "↩️", text: "بازگشت کالا تا ۷ روز" },
              { icon: "🔒", text: "پرداخت امن" },
              { icon: "📞", text: "پشتیبانی ۲۴/۷" },
            ].map((f) => (
              <div key={f.text} className="flex items-center justify-center gap-2 py-2">
                <span>{f.icon}</span>
                <span className="hidden sm:inline">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BooksSection />
      <Footer />
    </main>
  );
}
