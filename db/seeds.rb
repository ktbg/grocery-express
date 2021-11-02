# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
Category.destroy_all
User.destroy_all

@user1 = User.create!(name: 'David Rose', email: 'david@roseapothecary.com', password: '123456')
@user2 = User.create!(name: 'Alexis Rose', email: 'alexis@arc.com', password: '654321')
@user3 = User.create!(name: 'Stevie Budd', email: 'stevie@rosebudmotelgroup.com', password: '676767')

puts "#{User.count} users created"

@produce = Category.create!(category: 'Produce')
@meat = Category.create!(category: 'Meat')
@seafood = Category.create!(category: 'Seafood')
@frozen = Category.create!(category: 'Frozen')
@grocery = Category.create!(category: 'Grocery')
@refigerated = Category.create!(category: 'Refrigerated')

puts "#{Category.count} categories created"

# produce items
@produce1 = Product.create!(name: 'Avocado', price: '1.99', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/avocado.png', brand: '', category: @produce)
@produce2 = Product.create!(name: 'Honeycrisp Apple', price: '3.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/honeycrisp_apple.png', brand: '', category: @produce)
@produce3 = Product.create!(name: 'Banana', price: '0.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/banana.png', brand: '', category: @produce)
@produce4 = Product.create!(name: 'Cauliflower', price: '3.49', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/cauliflower.png', brand: '', category: @produce)
@produce5 = Product.create!(name: 'Red Onion', price: '0.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/red_onion.png', brand: '', category: @produce)
@produce6 = Product.create!(name: 'Tomato', price: '2.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/tomato.png', brand: '', category: @produce)
@produce7 = Product.create!(name: 'Navel Orange', price: '4.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/navel.png', brand: '', category: @produce)
@produce8 = Product.create!(name: 'Broccoli', price: '2.49', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/broccoli.png', brand: '', category: @produce)
@produce9 = Product.create!(name: 'Red Pepper', price: '2.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/red_pepper.png', brand: '', category: @produce)
@produce10 = Product.create!(name: 'Asparagus', price: '3.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/asparagus.png', brand: '', category: @produce)
@produce11 = Product.create!(name: 'Green Grapes', price: '3.29', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/green_grapes.png', brand: '', category: @produce)
@produce12 = Product.create!(name: 'Garlic', price: '3.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/garlic.png', brand: '', category: @produce)
@produce13 = Product.create!(name: 'Cilantro', price: '1.39', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/cilantro.png', brand: '', category: @produce)
@produce14 = Product.create!(name: 'Radish', price: '1.69', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/radish.png', brand: '', category: @produce)
@produce15 = Product.create!(name: 'Lemon', price: '0.69', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/lemon.png', brand: '', category: @produce)

puts "#{Product.count} produce items created"

# meat items
# Product.create!(name: 'Lemon', price: '0.69', size: '', uom: 'EA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)

StarRating.create!(rating: 3, user: @user1, product: @produce1)
StarRating.create!(rating: 5, user: @user1, product: @produce1)
StarRating.create!(rating: 1, user: @user3, product: @produce1)
StarRating.create!(rating: 2, user: @user3, product: @produce10)
StarRating.create!(rating: 4, user: @user2, product: @produce6)
StarRating.create!(rating: 0, user: @user1, product: @produce7)

puts "#{StarRating.count} star ratings created"