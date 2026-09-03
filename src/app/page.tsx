import { Suspense } from "react";
import Hero from "@/components/Hero";
import BooksSection from "@/components/BooksSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense>
        <BooksSection />
      </Suspense>
    </>
  );
}
