class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :game_id, null: false
      t.boolean :recommended, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :reviews, [:author_id, :game_id], unique: true
  end
end
