export default function ownedGames (owned, games, library) {
  let gameIds = [];
  let gamesArr = [];

  Object.values(library).forEach(item => {
    if (item.owned === owned) gameIds.push(item.gameId);
  });

  Object.values(games).forEach(game => {
    if (gameIds.includes(game.id)) gamesArr.push(game);
  })

  return gamesArr;
}