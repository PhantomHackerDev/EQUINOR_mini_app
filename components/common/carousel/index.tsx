'use client';

import React, {useState, useEffect, useRef} from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
};

const Carousel: React.FC<CarouselProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const previewElement = previewRef.current;
    if (previewElement) {
      const thumbnailWidth = 10; // 64px width + 8px margin
      const previewWidth = previewElement.clientWidth;
      const scrollPosition = currentIndex * thumbnailWidth - previewWidth / 2 + thumbnailWidth / 2;
      previewElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex justify-center items-center transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 rounded-xl">
            <Image src={image} alt={`Slide ${index}`} width={700} height={300} className="rounded-xl" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center p-2 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
      {/* <div
        ref={previewRef}
        className="flex justify-center space-x-2 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Carousel