class Game < ApplicationRecord
  validates :description, :developer, :publisher, :release_date, :price, presence: true
  validates :title, presence: true, uniqueness: true;

  has_many_attached :photos

  has_many :games_genres, dependent: :destroy

  has_many :genres, through: :games_genres
end
