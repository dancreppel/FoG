class AddDiscountToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :discount, :float, default: 0
  end
end
