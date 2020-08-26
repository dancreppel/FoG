json.games do
  @library_games.each do |game|
    json.set! game.id do 
      json.partial! 'api/games/game', game: game
    end
  end
end

json.library_items do
  @library_items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :game_id, :owned
    end
  end
end