// search for all genres that belong to a game
export const genresForGame = (genres, gamesGenres, gameId) => {
  let i;
  let genresArr = [];
  for(i of gamesGenres) {
    if (i.gameId === gameId) {
      let genre = genres[i.genreId];
      genresArr.push(genre.name)
    }
  }
  return genresArr;
};