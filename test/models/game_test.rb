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
require 'test_helper'

class GameTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
