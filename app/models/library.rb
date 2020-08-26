class Library < ApplicationRecord
  validates :user_id, uniqueness: { 
    scope: :game_id,
    message: "Cannot have the same game more than once in the library"
  }
  validates :owned, presence: :true

  belongs_to :user
  belongs_to :game
end
