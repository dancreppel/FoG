export const getGames = () => (
  $.ajax({
    url: 'api/games'
  })
)

export const getGame = gameId => (
  $.ajax({
    url:` api/games/${gameId}`
  })
)