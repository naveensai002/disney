export const getImagePath = (imagePath?: string, fullSize?: string) => {
  return imagePath
    ? `https://image.tmdb.org/t/p/${
        fullSize ? "original" : "w500"
      }/${imagePath}`
    : "https://links.papareact.com/08z";
};
