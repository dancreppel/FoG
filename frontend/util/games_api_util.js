export const getGames = () => (
  $.ajax({
    url: 'api/games'
  })
)

export const getGame = gameId => (
  $.ajax({
    url:`api/games/${gameId}`
  })
)

export const patchDiscount = (gameId, discount) => (
  $.ajax({
    url: `api/games/${gameId}`,
    method: 'patch',
    data: { game: { discount } }
  })
)