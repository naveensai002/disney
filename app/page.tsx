import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

const Home = async () => {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      {/* movie carousel wrapper */}
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MovieCarousel title="Upcoming" movies={upcomingMovies} />
        <MovieCarousel title="Popular" movies={topRatedMovies} />
        <MovieCarousel title="Top Rated" movies={popularMovies} />
      </div>
    </main>
  );
};

export default Home;
