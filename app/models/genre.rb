# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
  validates :name, presence: true;

  has_many :games_genres, dependent: :destroy

  has_many :games, through: :games_genres
end
