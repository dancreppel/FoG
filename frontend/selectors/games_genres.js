import lodash from 'lodash';

// search for all genres that belong to a game
export const genresForGame = (genres, gamesGenres, gameId) => {
  // prevent logic if genres and gamesGenres have not been fetched yet
  if (lodash.isEmpty(genres) || lodash.isEmpty(gamesGenres)) return null;

  let genresIds = [];
  for(let i = 1; i <= Object.keys(gamesGenres).length; i++) {
    if (gamesGenres[i].gameId === Number(gameId)) {
      genresIds.push(gamesGenres[i].genreId)
    }
  }

  let genresArr = [];
  for(let id of genresIds) {
    genresArr.push(genres[id].name);
  }

  return genresArr;
};