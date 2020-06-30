export const getGamesGenres = () =>
  $.ajax({
    url: "/api/games_genres",
  });
