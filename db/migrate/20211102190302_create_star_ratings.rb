class CreateStarRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :star_ratings do |t|
      t.integer :rating
      t.references :user, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
