class Game < ApplicationRecord
  validates :description, :developer, :publisher, :release_date, presence: true
  validates :title, presence: true, uniqueness: true;

  has_one_attached :cover
  has_many_attached :photos
end
