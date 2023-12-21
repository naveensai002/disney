import React from "react";

type GenreType = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = ({ params: { id }, searchParams: { genre } }: GenreType) => {
  return (
    <div>
      Genre page :{id} with genre : {genre}
    </div>
  );
};

// https://3000/genre/80?genre=crime
export default GenrePage;
