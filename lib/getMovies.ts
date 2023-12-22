import { SearchResults } from "@/typings";
import { KeyRound } from "lucide-react";

export const fetchFromTMDB = async (url: URL, cacheTime?: number) => {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_videeo", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-us");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzgzMzVjZDdiYWU0MTczZGRiMmM4ZDczYjJjMWY3MyIsInN1YiI6IjYzZGU1ZDRlY2U1ZDgyMDBjZDhmZjkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kOUgFEQP-PK1lWN-7pdxWDPGPKqgqx4cXybG61W9Cvc",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24, //24 hours default
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data;
};

export const getUpcomingMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);
  return data.results;
};

export const getTopRatedMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);
  return data.results;
};

export const getPopularMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);
  return data.results;
};

export const getDiscoverMovies = async (id?: string, keywords?: string) => {
  const url = new URL(`https://api.themoviedb.org/3/discover/movie`);

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_id", id);

  const data = await fetchFromTMDB(url);
  return data.results;
};

export async function getSearchedMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");

  url.searchParams.set("query", term);

  const data = await fetchFromTMDB(url);
  return data.results;
}
