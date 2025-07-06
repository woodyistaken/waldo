class CreatePuzzles < ActiveRecord::Migration[8.0]
  def change
    create_table :puzzles do |t|
      t.text :name
      t.text :imageUrl
      t.timestamps
    end
  end
end
