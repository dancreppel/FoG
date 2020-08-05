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
require 'test_helper'

class GamesGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
