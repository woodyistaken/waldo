class CreateCharacters < ActiveRecord::Migration[8.0]
  def change
    create_table :characters do |t|
      t.text :name
      t.integer :top
      t.integer :left
      t.belongs_to :puzzle
      t.timestamps
    end
  end
end
