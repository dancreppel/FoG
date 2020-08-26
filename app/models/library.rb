class Library < ApplicationRecord
  validates :user_id, uniquness: { 
    scope: :game_id,
    message: "Cannot have the same game more than once in the library"
  }

  belongs_to :user
  belongs_to :game
end
