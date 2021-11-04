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
@produce1 = Product.create!(name: 'Avocado', price: '$1.99', size: '', uom: 'EA', image: 'Produce/avocado.png', brand: '', category: @produce)
@produce2 = Product.create!(name: 'Honeycrisp Apple', price: '$3.49', size: '', uom: 'LB', image: '../../assets/product_images/Produce/honeycrisp_apple.png', brand: '', category: @produce)
@produce3 = Product.create!(name: 'Banana', price: '$0.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/banana.png', brand: '', category: @produce)
@produce4 = Product.create!(name: 'Cauliflower', price: '$3.49', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/cauliflower.png', brand: '', category: @produce)
@produce5 = Product.create!(name: 'Red Onion', price: '$0.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/red_onion.png', brand: '', category: @produce)
@produce6 = Product.create!(name: 'Tomato', price: '$2.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/tomato.png', brand: '', category: @produce)
@produce7 = Product.create!(name: 'Navel Orange', price: '$4.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/navel.png', brand: '', category: @produce)
@produce8 = Product.create!(name: 'Broccoli', price: '$2.49', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/broccoli.png', brand: '', category: @produce)
@produce9 = Product.create!(name: 'Red Pepper', price: '$2.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/red_pepper.png', brand: '', category: @produce)
@produce10 = Product.create!(name: 'Asparagus', price: '$3.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/asparagus.png', brand: '', category: @produce)
@produce11 = Product.create!(name: 'Green Grapes', price: '$3.29', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/green_grapes.png', brand: '', category: @produce)
@produce12 = Product.create!(name: 'Garlic', price: '$3.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Produce/garlic.png', brand: '', category: @produce)
@produce13 = Product.create!(name: 'Cilantro', price: '$1.39', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/cilantro.png', brand: '', category: @produce)
@produce14 = Product.create!(name: 'Radish', price: '$1.69', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/radish.png', brand: '', category: @produce)
@produce15 = Product.create!(name: 'Lemon', price: '$0.69', size: '', uom: 'EA', image: '../client/src/assets/product_images/Produce/lemon.png', brand: '', category: @produce)

# meat items
@meat1 = Product.create!(name: 'Ground Beef', price: '$6.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/ground_beef.png', brand: '', category: @meat)
@meat2 = Product.create!(name: 'Hot Dogs', price: '$6.99', size: '16', uom: 'OZ', image: '../client/src/assets/product_images/Meat/hot_dogs.png', brand: 'Wellshire', category: @meat)
@meat3 = Product.create!(name: 'Black Forest Bacon', price: '$8.99', size: '16', uom: 'OZ', image: '../client/src/assets/product_images/Meat/black_forest_bacon.png', brand: 'Wellshire', category: @meat)
@meat4 = Product.create!(name: 'Maple Bourbon Bacon', price: '$7.49', size: '12', uom: 'OZ', image: '../client/src/assets/product_images/Meat/maple_bourbon_bacon.png', brand: 'Wellshire', category: @meat)
@meat5 = Product.create!(name: 'Bone-In Chicken Thighs', price: '$2.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/bone_in_chicken_thigh.png', brand: '', category: @meat)
@meat6 = Product.create!(name: 'New York Strip Steak', price: '$21.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/ny_strip.png', brand: '', category: @meat)
@meat7 = Product.create!(name: 'Buffalo Chicken Wings', price: '$7.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/buffalo_chicken_wings.png', brand: '', category: @meat)
@meat8 = Product.create!(name: 'Bone-In Pork Loin Chop', price: '$5.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/pork_loin_chop.png', brand: '', category: @meat)
@meat9 = Product.create!(name: 'Pork Baby Back Ribs', price: '$8.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/baby_back_ribs.png', brand: '', category: @meat)
@meat10 = Product.create!(name: 'Beef Chuck Stew Meat', price: '$6.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/beef_chuck_stew_meat.png', brand: '', category: @meat)
@meat11 = Product.create!(name: 'Black Forest Sliced ham', price: '$8.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/black_forest_sliced_ham.png', brand: '', category: @meat)
@meat12 = Product.create!(name: 'Chicken Apple Sausage', price: '$7.99', size: '12', uom: 'OZ', image: '../client/src/assets/product_images/Meat/chicken_apple_sausage.png', brand: 'Applegate', category: @meat)
@meat13 = Product.create!(name: 'Grilled Chicken Breast', price: '$10.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/grilled_chicken_breast.png', brand: '', category: @meat)
@meat14 = Product.create!(name: 'Beef Skirt Steak', price: '$10.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/skirt_steak.png', brand: '', category: @meat)
@meat15 = Product.create!(name: 'Beef Tenderloin', price: '$29.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Meat/tenderloin.png', brand: '', category: @meat)

# seafood items
@seafood1 = Product.create!(name: 'Salmon', price: '$9.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/salmon.png', brand: '', category: @seafood)
@seafood2 = Product.create!(name: 'Scallops', price: '$26.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/scallops.png', brand: '', category: @seafood)
@seafood3 = Product.create!(name: 'Atlantic Cod', price: '$12.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/cod.png', brand: '', category: @seafood)
@seafood4 = Product.create!(name: 'Cooked Shrimp', price: '$11.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/shrimp.png', brand: '', category: @seafood)
@seafood5 = Product.create!(name: 'Chilean Sea Bass', price: '$25.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/chilean_sea_bass.png', brand: '', category: @seafood)
@seafood6 = Product.create!(name: 'Whole Red Snapper', price: '$10.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/whole_red_snapper.png', brand: '', category: @seafood)
@seafood7 = Product.create!(name: 'Swordfish Steak', price: '$15.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/swordfish_steak.png', brand: '', category: @seafood)
@seafood8 = Product.create!(name: 'Yellowfin Tuna Steak', price: '$22.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/yellowfin_tuna.png', brand: '', category: @seafood)
@seafood9 = Product.create!(name: 'Halibut', price: '$24.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/halibut.png', brand: '', category: @seafood)
@seafood10 = Product.create!(name: 'Arctic Char', price: '$12.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/arctic_char.png', brand: '', category: @seafood)
@seafood11 = Product.create!(name: 'Scottish Smoked Salmon', price: '$7.99', size: '0.25', uom: 'LB', image: '../client/src/assets/product_images/Seafood/scottish_smoked_salmon.png', brand: 'Spence & Co. LTD', category: @seafood)
@seafood12 = Product.create!(name: 'Smoked Wild Salmon', price: '$8.99', size: '4', uom: 'OZ', image: '../client/src/assets/product_images/Seafood/wild_smoked_salmon.png', brand: 'Ducktrap', category: @seafood)
@seafood13 = Product.create!(name: 'Raw Shrimp', price: '$9.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/raw_shrimp.png', brand: '', category: @seafood)
@seafood14 = Product.create!(name: 'Squid Tube and Tentacle', price: '$7.49', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/squid.png', brand: '', category: @seafood)
@seafood15 = Product.create!(name: 'Branzini', price: '$13.99', size: '', uom: 'LB', image: '../client/src/assets/product_images/Seafood/branzini.png', brand: '', category: @seafood)

# refrigerated
@refigerated1 = Product.create!(name: 'Whole Milk', price: '$3.99', size: '64', uom: 'FL OZ', image: '../client/src/assets/product_images/Refrigerated/whole_milk.png', brand: 'Organic Valley', category: @refigerated)
@refigerated2 = Product.create!(name: 'Half and Half', price: '$4.99', size: '32', uom: 'FL OZ', image: '../client/src/assets/product_images/Refrigerated/half_and_half.png', brand: 'Organic Valley', category: @refigerated)
@refigerated3 = Product.create!(name: 'Strawberry Greek Yogurt', price: '$1.99', size: '5.3', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/greek_yogurt_strawberry.png', brand: 'Fage', category: @refigerated)
@refigerated4 = Product.create!(name: 'Unsweetened Keto Creamer', price: '$4.49', size: '25', uom: 'FL OZ', image: '../client/src/assets/product_images/Refrigerated/keto_creamer.png', brand: 'PicNik', category: @refigerated)
@refigerated5 = Product.create!(name: 'Whipped Cream', price: '$2.49', size: '7', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/whipped_cream.png', brand: 'Cabot', category: @refigerated)
@refigerated6 = Product.create!(name: 'Cherry Greek Yogurt', price: '$1.99', size: '5.3', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/cherry_greek_yogurt.png', brand: 'Fage', category: @refigerated)
@refigerated7 = Product.create!(name: 'Peach Greek Yogurt', price: '$1.99', size: '5.3', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/peach_greek_yogurt.png', brand: 'Fage', category: @refigerated)
@refigerated8 = Product.create!(name: 'Blueberry Greek Yogurt', price: '$1.99', size: '5.3', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/greek_yogurt_blueberry.png', brand: 'Fage', category: @refigerated)
@refigerated9 = Product.create!(name: 'Irish Butter', price: '$3.49', size: '8', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/irish_butter.png', brand: 'Kerrygold', category: @refigerated)
@refigerated10 = Product.create!(name: 'Unsalted Butter', price: '$7.99', size: '16', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/unsalted_butter.png', brand: 'Horizon Organic', category: @refigerated)
@refigerated11 = Product.create!(name: 'Sharp Cheddar Cheese', price: '$8.99', size: '32', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/sharp_cheddar.png', brand: 'Cabot', category: @refigerated)
@refigerated12 = Product.create!(name: 'American Cheese Singles', price: '$4.49', size: '8', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/american_cheese.png', brand: 'Horizon Organic', category: @refigerated)
@refigerated13 = Product.create!(name: 'Cream Cheese', price: '$2.99', size: '8', uom: 'OZ', image: '../client/src/assets/product_images/Refrigerated/cream_cheese.png', brand: 'Organic Valley', category: @refigerated)
@refigerated13 = Product.create!(name: 'Large Eggs', price: '$6.99', size: '18', uom: 'CT', image: '../client/src/assets/product_images/Refrigerated/eggs.png', brand: 'Pete & Gerry\'s', category: @refigerated)
@refigerated13 = Product.create!(name: 'Large Brown Eggs', price: '$5.99', size: '18', uom: 'CT', image: '../client/src/assets/product_images/Refrigerated/brown_eggs.png', brand: 'Organic Valley', category: @refigerated)

# grocery
@grocery1 = Product.create!(name: 'Chickpea Penne Pasta', price: '$2.99', size: '8', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/penne.png', brand: 'Banza', category: @grocery)
@grocery2 = Product.create!(name: 'Backyard Barbeque Chips', price: '$4.99', size: '13', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/bbq_chips.png', brand: 'Kettle Chips', category: @grocery)
@grocery3 = Product.create!(name: 'Reduced Fat Kettle Cooked Chips', price: '$5.49', size: '14', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/cape_cod.png', brand: 'Cape Cod Chips', category: @grocery)
@grocery4 = Product.create!(name: 'Vodka Pasta Sauce', price: '$2.99', size: '24', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/vodka_sauce.png', brand: "Newman's Own", category: @grocery)
@grocery5 = Product.create!(name: 'Rigatoni Pasta', price: '$1.99', size: '16', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/rigatoni.png', brand: 'De Cecco', category: @grocery)
@grocery6 = Product.create!(name: 'Honey Nut Cheerios', price: '$3.49', size: '15.4', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/honey_nut_cheerios.png', brand: 'General Mills', category: @grocery)
@grocery7 = Product.create!(name: 'Classic Oatmeal', price: '$2.69', size: '1.8', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/oatmeal.png', brand: "Bob's Red Mill", category: @grocery)
@grocery8 = Product.create!(name: 'Star Pasta Chicken Soup', price: '$3.49', size: '14', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/star_pasta_chicken_soup.png', brand: "Annie's Homegrown", category: @grocery)
@grocery9 = Product.create!(name: 'Lentil Vegetable', price: '$2.99', size: '14.5', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/lentil_vegetable_soup.png', brand: "Amy's Organic", category: @grocery)
@grocery10 = Product.create!(name: 'All-Purpose Flour', price: '$3.99', size: '32', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/flour.png', brand: 'King Arthur Flour', category: @grocery)
@grocery11 = Product.create!(name: 'Brown Sugar', price: '$1.29', size: '1', uom: 'LB', image:'../client/src/assets/product_images/Grocery/brown_sugar.png', brand: 'Domino', category: @grocery)
@grocery12 = Product.create!(name: 'Chocolate Chip Cookies', price: '$4.49', size: '7', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/choc_chip_cookies.png', brand: "Tate's Bake Shop", category: @grocery)
@grocery13 = Product.create!(name: 'Balsamic Vinaigrette', price: '$3.99', size: '16', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/balsamic_vinaigrette.png', brand: "Newman's Own", category: @grocery)
@grocery14 = Product.create!(name: 'Extra Virgin Olive Oil', price: '$11.99', size: '25.4', uom: 'FL OZ', image:'../client/src/assets/product_images/Grocery/olive_oil.png', brand: 'California Olive Ranch', category: @grocery)
@grocery15 = Product.create!(name: 'Refried Beans', price: '$2.99', size: '15.4', uom: 'OZ', image:'../client/src/assets/product_images/Grocery/refried_beans.png', brand: "Amy's Organic", category: @grocery)

# frozen
@frozen1 = Product.create!(name: 'Cauliflower Pizza Crust', price: '10.99', size: '2', uom: 'CT', image: '../client/src/assets/product_images/Frozen/cauliflower_crust.png', brand: "Cauli'flour", category: @frozen)
@frozen2 = Product.create!(name: 'Italian Beef Meatballs', price: '6.99', size: '16', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/meatballs.png', brand: 'Pineland Farms', category: @frozen)
@frozen3 = Product.create!(name: 'Protein Toaster Waffles', price: '4.49', size: '6', uom: 'CT', image: '../client/src/assets/product_images/Frozen/waffles.png', brand: 'Birch Benders', category: @frozen)
@frozen4 = Product.create!(name: 'Seasoned Potato Puffs', price: '3.99', size: '19', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/potato_puffs.png', brand: 'Alexia', category: @frozen)
@frozen5 = Product.create!(name: 'Macroni and Cheese', price: '3.49', size: '9', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/macaroni_cheese.png', brand: "Amy's Organic", category: @frozen)
@frozen6 = Product.create!(name: 'California Veggie Burgers', price: '4.49', size: '2.5', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/veggie_burger.png', brand: "Dr. Praeger's", category: @frozen)
@frozen7 = Product.create!(name: 'Italian Sausage Pizza with Roasted Red Peppers', price: '8.99 ', size: '12', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/sausage_pizza.png', brand: "Cappello's", category: @frozen)
@frozen8 = Product.create!(name: 'Wild Blueberries', price: '11.99 ', size: '48', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/frozen_blueberries.png', brand: 'Wymans of Maine', category: @frozen)
@frozen9 = Product.create!(name: 'Madagascar Vanilla Bean Gelato', price: '4.99 ', size: '16', uom: 'FL OZ', image: '../client/src/assets/product_images/Frozen/vanilla_gelato.png', brand: 'Talenti', category: @frozen)
@frozen10 = Product.create!(name: 'Cherry Garcia', price: '4.99 ', size: '16', uom: 'FL OZ', image: '../client/src/assets/product_images/Frozen/cherry_garcia.png', brand: "Ben & Jerry's", category: @frozen)
@frozen11 = Product.create!(name: 'Watermelon Agave Frozen Pops', price: '5.99 ', size: '4', uom: 'CT', image: '../client/src/assets/product_images/Frozen/goodpop.png', brand: 'GoodPop', category: @frozen)
@frozen12 = Product.create!(name: 'Coconut Milk Vanilla Dessert Sandwiches', price: '4.99 ', size: '8', uom: 'CT', image: '../client/src/assets/product_images/Frozen/vanilla_bean_sandwiches.png', brand: 'So Delicious', category: @frozen)
@frozen13 = Product.create!(name: '7 Grain San Juan Bread', price: '5.99 ', size: '18', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/seven_grain_bread.png', brand: 'Canyon Ranch Bakehouse', category: @frozen)
@frozen14 = Product.create!(name: 'Key Lime Cups', price: '1.99 ', size: '1.52', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/key_lime_cups.png', brand: 'Hail Merry', category: @frozen)
@frozen15 = Product.create!(name: 'Shrimp Spring Rolls', price: '5.49 ', size: '10', uom: 'OZ', image: '../client/src/assets/product_images/Frozen/spring_rolls.png', brand: 'Royal Asia', category: @frozen)

puts "#{Product.count} produce items created"

StarRating.create!(rating: 3, user: @user1, product: @produce1)
StarRating.create!(rating: 5, user: @user1, product: @produce1)
StarRating.create!(rating: 1, user: @user3, product: @produce1)
StarRating.create!(rating: 2, user: @user3, product: @produce10)
StarRating.create!(rating: 4, user: @user2, product: @produce6)
StarRating.create!(rating: 0, user: @user1, product: @produce7)

StarRating.create!(rating: 3, user: @user1, product: @seafood1)
StarRating.create!(rating: 5, user: @user1, product: @seafood4)
StarRating.create!(rating: 1, user: @user3, product: @seafood7)
StarRating.create!(rating: 2, user: @user3, product: @seafood1)
StarRating.create!(rating: 4, user: @user2, product: @seafood14)
StarRating.create!(rating: 0, user: @user1, product: @seafood5)

StarRating.create!(rating: 3, user: @user1, product: @meat1)
StarRating.create!(rating: 5, user: @user1, product: @meat5)
StarRating.create!(rating: 1, user: @user3, product: @meat8)
StarRating.create!(rating: 2, user: @user3, product: @meat9)
StarRating.create!(rating: 4, user: @user2, product: @meat9)
StarRating.create!(rating: 0, user: @user1, product: @meat9)

StarRating.create!(rating: 3, user: @user1, product: @refigerated10)
StarRating.create!(rating: 5, user: @user1, product: @refigerated12)
StarRating.create!(rating: 1, user: @user3, product: @refigerated12)
StarRating.create!(rating: 2, user: @user3, product: @refigerated4)
StarRating.create!(rating: 4, user: @user2, product: @refigerated6)
StarRating.create!(rating: 0, user: @user1, product: @refigerated1)

StarRating.create!(rating: 3, user: @user1, product: @grocery10)
StarRating.create!(rating: 5, user: @user1, product: @grocery12)
StarRating.create!(rating: 1, user: @user3, product: @grocery12)
StarRating.create!(rating: 2, user: @user3, product: @grocery4)
StarRating.create!(rating: 4, user: @user2, product: @grocery6)
StarRating.create!(rating: 0, user: @user1, product: @grocery1)

StarRating.create!(rating: 3, user: @user1, product: @frozen10)
StarRating.create!(rating: 5, user: @user1, product: @frozen12)
StarRating.create!(rating: 1, user: @user3, product: @frozen12)
StarRating.create!(rating: 2, user: @user3, product: @frozen4)
StarRating.create!(rating: 4, user: @user2, product: @frozen6)
StarRating.create!(rating: 0, user: @user1, product: @frozen1)

puts "#{StarRating.count} star ratings created"