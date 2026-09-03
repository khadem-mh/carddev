import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "کتاب‌خانه | فروشگاه آنلاین کتاب",
  description: "بیش از ۱۰،۰۰۰ عنوان کتاب با ارسال سریع",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col bg-[#f8f7f4]">
        <AuthProvider>
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
