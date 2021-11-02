class Product < ApplicationRecord
  belongs_to :category
  has_many :star_ratings
end
