class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false, index: [ unique: true ]
      t.text :description, null: false
      t.string :developer, null: false
      t.string :publisher, null: false
      t.date :release_date, null: false
      t.timestamps
    end
  end
end
