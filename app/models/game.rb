class Game < ApplicationRecord
  validates :description, :developer, :publisher, :release_date, :price, presence: true
  validates :title, presence: true, uniqueness: true;

  has_many_attached :photos
end
