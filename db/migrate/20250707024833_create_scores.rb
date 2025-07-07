class CreateScores < ActiveRecord::Migration[8.0]
  def change
    create_table :scores do |t|
      t.integer :seconds
      t.timestamps
    end
  end
end
