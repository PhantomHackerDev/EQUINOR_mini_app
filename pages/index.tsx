'use client';
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Main from "@/components/main";

export default function Home() {
  return (
    <div
      className={`flex m-auto flex-col items-center justify-center md:w-1/2 sm:w-full h-auto font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex flex-col items-center w-full h-auto bg-black">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
