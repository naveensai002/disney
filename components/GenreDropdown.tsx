import Genres from "@/typings";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzgzMzVjZDdiYWU0MTczZGRiMmM4ZDczYjJjMWY3MyIsInN1YiI6IjYzZGU1ZDRlY2U1ZDgyMDBjZDhmZjkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kOUgFEQP-PK1lWN-7pdxWDPGPKqgqx4cXybG61W9Cvc`,
    },
    next: {
      revalidate: 60 * 60 * 24, //24 shours
    },
  };

  const response = await fetch(url, options);
  const json = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex  text-white justify-center items-center">
        Genre <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {json.genres.map((genre) => {
          return (
            <DropdownMenuItem key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropdown;
