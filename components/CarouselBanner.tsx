"use client";

import { Movie } from "@/typings";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";

type Props = {
  movies: Movie[];
};

Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer"
    >
      <div className="flex ">
        {movies.map((movie) => (
          <div className="flex-full min-w-0 relative" key={movie.id}>
            <Image
              src={getImagePath(movie.backdrop_path, "true")}
              key={movie.id}
              width={1920}
              height={1080}
              alt="carousel-image"
              className="opacity-50 object-fit object-center"
            />
            <div className="hidden absolute md:inline mt-0 top-0 z-20 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent font-bold w-full h-full bg-gradient-to-r from-gray-900/90 to-transparent pl-10 ">
              <h2 className="font-bold mb-4 tracking-widest max-w-xl text-5xl">
                {movie.title}
              </h2>
              <p className="max-w-md tracking-tighter">
                {movie.overview.slice(0, 200)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0" />
    </div>
  );
}

export default CarouselBanner;
