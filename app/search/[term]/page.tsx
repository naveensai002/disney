import { notFound } from "next/navigation";

type PropsType = {
  term: string;
};

const SearchPage = ({ params: { term } }: PropsType) => {
  //if user search with no term then lead to 404 page
  if (!term) notFound();

  //   To remove some extra spaces we have decode the URL
  const termToUse = decodeURI(term);

  //API calls to get the search movies
  //API calls to get the Popular movies

  return <div>this is searchResult :{termToUse}</div>;
};

export default SearchPage;
