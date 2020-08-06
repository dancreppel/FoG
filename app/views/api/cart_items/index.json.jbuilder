json.games do
  @cart_games.each do |game|
    json.set! game.id do 
      json.partial! 'api/games/game', game: game
    end
  end
end

json.cart_items do
  @cart_items.each do |cart_item|
    json.set! cart_item.id do
      json.extract! cart_item, :id, :game_id
    end
  end
end