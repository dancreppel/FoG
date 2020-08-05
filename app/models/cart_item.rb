# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :user_id, uniqueness: { scope: :game_id,
    message: "Cannot add the same game more than once to cart" }

    belongs_to :user
    belongs_to :game
end
