class CreateLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.boolean :owned, null: false
      t.timestamps
    end

    add_index :libraries, [ :user_id, :game_id ], unique: true
  end
end
