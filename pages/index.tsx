'use client';
import Carousel from "@/components/common/carousel";
import { carouselImage } from "@/utils/content";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <div
      className={`flex m-auto flex-col items-center justify-center h-screen md:w-1/2 sm:w-full font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="flex flex-col items-center w-full h-screen bg-black">
        <Header />
        <div className="w-3/4">
          <Carousel images={carouselImage} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
