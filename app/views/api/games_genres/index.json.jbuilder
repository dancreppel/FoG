@games_genres.each do |games_genre|
  json.set! games_genre.id do
    json.extract! games_genre, :id, :game_id, :genre_id
  end
end