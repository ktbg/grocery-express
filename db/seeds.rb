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
@user1 = User.create!(name: 'Alexis Rose', email: 'alexis@arc.com', password: '654321')
@user1 = User.create!(name: 'Stevie Budd', email: 'stevie@rosebudmotelgroup.com', password: '676767')

puts "#{User.count} users created"

@produce = Category.create!(category: 'Produce')
@meat = Category.create!(category: 'Meat')
@seafood = Category.create!(category: 'Seafood')
@frozen = Category.create!(category: 'Frozen')
@grocery = Category.create!(category: 'Grocery')
@refigerated = Category.create!(category: 'Refrigerated')

puts "#{Category.count} categories created"

# produce items
Product.create!(name: 'Avocado', price: '1.99', size: '', uom: 'EA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Banana', price: '0.49', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Honeycrisp Apple', price: '3.49', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Cauliflower', price: '3.49', size: '', uom: 'EA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Red Onion', price: '0.99', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Tomato', price: '2.99', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Navel Orange', price: '4.49', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Broccoli', price: '2.49', size: '', uom: 'EA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Red Pepper', price: '2.99', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Asparagus', price: '3.49', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Green Grapes', price: '3.29', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Garlic', price: '3.99', size: '', uom: 'LB', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Cilantro', price: '1.39', size: '', uom: 'EA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Radish', price: '1.69', size: '', uom: 'EA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)
Product.create!(name: 'Lemon', price: '0.69', size: '', uom: 'EA', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', brand: '', category: @produce)

puts "#{Product.count} produce items created"
