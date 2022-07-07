class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :quantity
      t.string :description
      t.string :image
      t.integer :author_id
      t.integer :store_id
      t.timestamps
    end
  end
end