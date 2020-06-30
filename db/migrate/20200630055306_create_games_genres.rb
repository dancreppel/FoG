class CreateGamesGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :games_genres do |t|
      t.integer :game_id, null: false
      t.integer :genre_id, null: false
      t.timestamps
    end

    add_index :games_genres, [:game_id, :genre_id], unique: true
  end
end
