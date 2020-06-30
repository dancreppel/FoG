class Genre < ApplicationRecord
  validates :name, presence: true;

  has_many :games_genres, dependent: :destroy

  has_many :games, through: :games_genres
end
