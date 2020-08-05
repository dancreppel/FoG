# == Schema Information
#
# Table name: games_genres
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class GamesGenre < ApplicationRecord
  validates :game_id, uniqueness: { scope: [:genre_id]}

  belongs_to :game
  belongs_to :genre
end
