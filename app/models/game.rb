# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  developer    :string           not null
#  publisher    :string           not null
#  release_date :date             not null
#  price        :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  discount     :float            default(0.0)
#
class Game < ApplicationRecord
  validates :description, :developer, :publisher, :release_date, :price, presence: true
  validates :title, presence: true, uniqueness: true;

  has_many_attached :photos

  has_many :games_genres, dependent: :destroy

  has_many :genres, through: :games_genres
end
