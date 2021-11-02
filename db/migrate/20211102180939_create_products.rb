class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :price
      t.string :size
      t.string :uom
      t.string :image
      t.string :brand
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
