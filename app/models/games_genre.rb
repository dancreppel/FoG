class GamesGenre < ApplicationRecord
  validates :game_id, uniqueness: { scope: [:genre_id]}

  belongs_to :game
  belongs_to :genre
end
