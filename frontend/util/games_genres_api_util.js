export default getGamesGenres = () =>
  $.ajax({
    url: "/api/games_genres",
  });
