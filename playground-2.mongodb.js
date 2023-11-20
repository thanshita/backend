/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'test';
const collection = 'restaurantdetails';

// The current database to use.
use(database);

// Create a new collection.
db.createCollection(collection);

db.restaurantdetails.insertMany(
    [
        {
            "RestaurantName": "Aahar",
            "RestaurantLocation": "Kurnool",
            "OwnerName": "Krishna",
            "OwnerEmail": "Krishna@gmail.com",
            "OwnerPhone": "+91 9848626266",
            "OwnerPassword": "Aahar",
            "menuItems": {
            "Breakfast": [
                {"itemName": "Pesarattu", "itemPrice": 175, "itemImg": "https://www.sharmispassions.com/wp-content/uploads/2011/04/Pesarattu3.jpg"},
                {"itemName": "Set Dosa", "itemPrice": 135, "itemImg": "https://udupi-recipes.com/wp-content/uploads/2013/12/set-dosa-recipe.jpg"},
                {"itemName": "Rava Dosa", "itemPrice": 135, "itemImg": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rava-dosa-recipe.jpg"},
            ],
            "Thali": [
                {"itemName": "South Indian Thali", "itemPrice": 385, "itemImg": "https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/eazytrendz/2072/4.jpg"},
                {"itemName": "Mouryan spl Thali", "itemPrice": 400, "itemImg": "https://b.zmtcdn.com/data/reviews_photos/d38/1f1ac6c7eb91a6b26220fd1314095d38_1578309867.jpg"},
            ],

            "Soups": [
                {"itemName":"Hot&sour Soup", "itemPrice": 150, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Veg Corn", "itemPrice": 180, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Mushroom Soup", "itemPrice": 210, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
            ],
            "Starters": [
                {"itemName": "Paneer Chilli", "itemPrice": 355, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1-27.jpg"},
                {"itemName": "Gobi Manchuria", "itemPrice": 350, "itemImg": "https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg"},
                {"itemName": "BabyCorn chilli", "itemPrice": 370, "itemImg": "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Chilli_Baby_Corn_Schezwan_Style_Indian_Chinese_Recipe-2.jpg"},
                {"itemName": "Mushroom Fry", "itemPrice": 375, "itemImg": "https://static.toiimg.com/thumb/52449544.cms?imgsize=333893&width=800&height=800"},
                {"itemName": "Paneer 65", "itemPrice": 415, "itemImg": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65-recipe.jpg"},
            ],
            "Rice & Biryanis": [
                {"itemName": "Ghee Rice", "itemPrice": 350, "itemImg": "https://www.ticklingpalates.com/wp-content/uploads/2022/02/how-to-make-ghee-rice-recipe-500x500.jpg"},
                {"itemName": "Kaju fried rice", "itemPrice": 400, "itemImg": "https://www.ticklingpalates.com/wp-content/uploads/2022/02/how-to-make-ghee-rice-recipe-500x500.jpg"},
                {"itemName": "Biryani", "itemPrice": 320, "itemImg": "https://vegecravings.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg.webp"},
                {"itemName": "SweetCorn field", "itemPrice": 320, "itemImg": "https://static.toiimg.com/thumb/52449544.cms?imgsize=333893&width=800&height=800https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/sweet-corn-fried-rice-recipe-1.jpg"},
                {"itemName": "Mushroom fried rice", "itemPrice": 400, "itemImg": "https://shwetainthekitchen.com/wp-content/uploads/2020/12/Spicy-Mushroom-Fried-Rice.jpg"},
            ],
            "Drinks":[
                {"itemName":"Pepsi", "itemPrice": 50, "itemImg": "https://5.imimg.com/data5/XU/AE/HL/SELLER-82456434/pepsi-cold-drink.jpg"},
                {"itemName": "limca", "itemPrice": 50, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomr6_rDDXHz951QbHO8v_-Tu24hFSSuoi3A&usqp=CAU"},
                {"itemName": "Thumps up", "itemPrice": 50, "itemImg": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Thums_Up_logo.svg/640px-Thums_Up_logo.svg.png"},
            ]}
        },

        {
            "RestaurantName": "Froza",
            "RestaurantLocation": "Kurnool",
            "OwnerName": "Vikram",
            "OwnerEmail": "Vikram@gmail.com",
            "OwnerPhone": "+91 9023333633",
            "OwnerPassword": "Froza",
            "menuItems": {
            "Pasta": [
                {"itemName": "Veg Alfredo pasta", "itemPrice": 266, "itemImg": "https://www.wholesomelicious.com/wp-content/uploads/2021/02/Vegetable-Garden-Pasta-Picture4-500x375.jpg"},
                {"itemName": "Pesto Chiken Pasta", "itemPrice": 299, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ3ix7BWoxQ9kBFyE6DtpznBAf_bbmY7RTA&usqp=CAU"},
                {"itemName": "seafood Pasta", "itemPrice": 364, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsxRF3YALLEWH-eNNO7-_l57OFS7PUHx4wQ&usqp=CAU"}
            ],
            "Burger": [
                {"itemName": "Veg Burger", "itemPrice": 250, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRxEyjnsSJAnucLHmwo7VhnL919xLKP_IGA&usqp=CAU"},
                {"itemName": "Chiken Burger", "itemPrice": 280, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRxEyjnsSJAnucLHmwo7VhnL919xLKP_IGA&usqp=CAU"}
            ],

            "Fries": [
                {"itemName":"French Fries", "itemPrice": 126, "itemImg": "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800"},
                {"itemName": "Peri peri Fries", "itemPrice": 143, "itemImg": "https://static.toiimg.com/photo/79912939.cms"},
                {"itemName": "Peri peri wedges", "itemPrice": 146, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7d09m2YFIdl5ZGcMFvYavacVEjzIYHZ-qA&usqp=CAU"}
            ],
            "Cakes": [
                {"itemName": "Butterscotch Cake", "itemPrice": 550, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6n4uDTP1tkQgQsptBaiTFoiB7_J-G6aqBw&usqp=CAU"},
                {"itemName": "oreo cake", "itemPrice": 610, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUVGcm03P3eCvWv5Ti0xOJWWXTB2q6IHkgA&usqp=CAU"},
                {"itemName": "Blueberry Cake", "itemPrice": 610, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR-bafPCYqiKVhOMONrWxw5lqPlZ_QEftXw&usqp=CAU"},
                {"itemName": "trufle pastry", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf3JM9AJxbm4iyxPdC_15Qtb_14hMcu_IFQ&usqp=CAU"},
                {"itemName": "Fruit pastry ", "itemPrice": 100, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4ocRZ_r3y3-wMxJenWbXwo-2O2VTNZ7jFA&usqp=CAU"}
            ],
            "Pizza": [
                {"itemName": "Spiced paneer pizza", "itemPrice": 253, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6utBEK9UZQW9Rkk-ZbDiC7T6cyrL6rjoUIA&usqp=CAU"},
                {"itemName": "Old form Veggies Pizza", "itemPrice": 247, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WUwgKDsqyHEGLP9RZNdqcd-TkfglLsVzBw&usqp=CAU"},
                {"itemName": "Hawaiian pizza", "itemPrice": 247, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6utBEK9UZQW9Rkk-ZbDiC7T6cyrL6rjoUIA&usqp=CAU"},
                {"itemName": "Periperi Chiken pizza", "itemPrice": 320, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkawCmg2Yx7zxfjJ8ab5DHPOf7_JAWMfcWjQ&usqp=CAU"},
                {"itemName": "Texas BBQ chiken pizza", "itemPrice": 293, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkawCmg2Yx7zxfjJ8ab5DHPOf7_JAWMfcWjQ&usqp=CAU"}
            ],
            "Drinks":[
                {"itemName":"oreo shake", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qfNSeVfROOv5LBq6Km-6tT-5LoWaN7LVUQ&usqp=CAU"},
                {"itemName": "lime", "itemPrice": 80, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0K94ep2DRdiYLWj-VOYGMxeznBHz9uHY_A&usqp=CAU"},
                {"itemName": "nuts loaded shake", "itemPrice": 160, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8MIVbC9xgSj88_uEmkSWapT4swp8jdOtsQ&usqp=CAU"}
            ]}
        },
        {
            "RestaurantName": "Burma Burma ",
            "RestaurantLocation": "Hitech City, Hyderabad",
            "OwnerName": "Chirag Chhajer and Ankit Gupta",
            "OwnerEmail": "burmaburmapantry@gmail.com",
            "OwnerPhone": "+91 99302 22421",
            "OwnerPassword": "burmaburma",
            "menuItems": {
            "Salads": [
                {"itemName": "Tea Leaf Salad", "itemPrice": 520, "itemImg": "https://b.zmtcdn.com/data/dish_photos/e56/2ef289aea2b01098e9ee40fbd73e9e56.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Raw Mango Salad", "itemPrice": 490, "itemImg": "https://b.zmtcdn.com/data/dish_photos/0f8/22709ec813d1bba47f39edb53f11d0f8.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Lotus Root Salad", "itemPrice": 490, "itemImg": "https://b.zmtcdn.com/data/dish_photos/2ad/9cdb64e5ce03fbb1bfe47237a25ef2ad.jpg?fit=around|130:130&crop=130:130;*,*"},
            ],
            "Noodles": [
                {"itemName": "Mandalay Noodles Bowl", "itemPrice": 580, "itemImg": "https://b.zmtcdn.com/data/dish_photos/c97/b606143dab5bc8e0fc083ad376559c97.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Dry Khowsuey", "itemPrice": 520, "itemImg": "https://b.zmtcdn.com/data/dish_photos/0c0/32cd2f2497e230cd3d9df675094de0c0.jpg?fit=around|130:130&crop=130:130;*,*"},
            ],

            "Soups": [
                {"itemName":"Hot&sour Soup", "itemPrice": 150, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Veg Corn", "itemPrice": 180, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Mushroom Soup", "itemPrice": 210, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
            ],
            "Starters": [
                {"itemName": "Chilli Tangy Chickpea Tohu", "itemPrice": 480, "itemImg": "https://b.zmtcdn.com/data/dish_photos/f5d/e4ae45e38e14b7ab81539e5ac63fcf5d.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Tohu Mash With Paratha", "itemPrice": 510, "itemImg": "https://b.zmtcdn.com/data/dish_photos/72c/7b8e7e63ff501451a4811ef8bf01972c.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Grilled Mock Meat Skewers", "itemPrice": 580, "itemImg": "https://b.zmtcdn.com/data/dish_photos/7f2/f81ca203adda50ea1147f7d8437f87f2.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Mushroom Fry", "itemPrice": 375, "itemImg": "https://static.toiimg.com/thumb/52449544.cms?imgsize=333893&width=800&height=800"},
                {"itemName": "Paneer 65", "itemPrice": 415, "itemImg": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65-recipe.jpg"},
            ],
            "Rice": [
                {"itemName": "Steamed Rice Pockets", "itemPrice": 470, "itemImg": "https://b.zmtcdn.com/data/dish_photos/4e1/02f4b89f85e1ec8f7e15265b44ea04e1.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "BBQ Jackfruit Grilled Sticky Rice", "itemPrice": 520, "itemImg": "https://b.zmtcdn.com/data/dish_photos/236/7392f3974d29bebfcd8dad8e60ace236.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Stir Fried Vegetables Burmese Style Rice Bowl", "itemPrice": 560, "itemImg": "https://b.zmtcdn.com/data/dish_photos/5ac/9bd3fb53bc2ff8110ff6da290ac5e5ac.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Broccoli, Shiitake & Water Chestnut Rice Bowl", "itemPrice": 560, "itemImg": "https://b.zmtcdn.com/data/dish_photos/2bc/f126df4e006560bbac91c5f0ab4e42bc.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Stir Fried Tofu & Vegetables in Malar Sauce Rice Bowl", "itemPrice": 560, "itemImg": "https://b.zmtcdn.com/data/dish_photos/6cb/0491dc0b87e178dd94e7fee217ac76cb.jpg?fit=around|130:130&crop=130:130;*,*"},
            ],
            "Desserts & Ice Creams":[
                {"itemName":"Honeycomb and Sweet Corn Ice Cream", "itemPrice": 550, "itemImg": "https://b.zmtcdn.com/data/dish_photos/8c6/b109ebc338dc228e3754cc1708e878c6.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Dark Chocolate and Olive Oil Ice Cream ", "itemPrice": 600, "itemImg": "https://b.zmtcdn.com/data/dish_photos/4d8/0999c23338b8e829dafed6fb814264d8.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Durian Fruit Ice Cream", "itemPrice": 550, "itemImg": "https://b.zmtcdn.com/data/dish_photos/e0e/8f4ff66107e0e3dc8cf10bea0734ee0e.jpg?fit=around|130:130&crop=130:130;*,*"},
            ]}
        },

        {
            "RestaurantName": "Cream Stone",
            "RestaurantLocation": "Hyderabad",
            "OwnerName": "Arjun",
            "OwnerEmail": "Arjun@gmail.com",
            "OwnerPhone": "+91 9032332322",
            "OwnerPassword": "Cream",
            "menuItems": {
            "Thick Shakes": [
                {"itemName": "Creamy Oreo Thick Shake", "itemPrice": 185, "itemImg": "https://b.zmtcdn.com/data/dish_photos/3f8/da6765ebb257a6c742cc88071dfc53f8.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Fruit Bash Thick Shake", "itemPrice": 209, "itemImg": "https://b.zmtcdn.com/data/dish_photos/43a/fe2971c0e811327b657ee17f6229f43a.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Nutella Brownie Blast Thick Shake", "itemPrice": 209, "itemImg": "https://b.zmtcdn.com/data/dish_photos/544/97c912750fb93b9a3aa9e74a6bd61544.jpg?fit=around|130:130&crop=130:130;*,*"}
            ],
            "Brownie Buzz": [
                {"itemName": "Devils Brownie", "itemPrice": 175, "itemImg": "https://b.zmtcdn.com/data/dish_photos/acc/fb4dcd7bdceaa04e6bcef520230a6acc.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Nutella Brownie", "itemPrice": 195, "itemImg": "https://b.zmtcdn.com/data/dish_photos/5fe/8bafe38a2fe48605d0837206376355fe.jpg?fit=around|130:130&crop=130:130;*,*"}
            ],

            "Hot Sundaes": [
                {"itemName":"Hot Choco Fudge", "itemPrice": 150, "itemImg": "https://b.zmtcdn.com/data/dish_photos/3ae/8e339429197a075a9705f955dc2793ae.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Death By Chocolate", "itemPrice": 205, "itemImg": "https://b.zmtcdn.com/data/dish_photos/bc7/098c03bc22e5acc1917d08efd4ba7bc7.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Chocolava", "itemPrice": 210, "itemImg": "https://b.zmtcdn.com/data/dish_photos/5df/a86f2a38c2e2cc73da0b3a6e463555df.jpg?fit=around|130:130&crop=130:130;*,*"}
            ],
            "Cakes": [
                {"itemName": "Butterscotch Cake", "itemPrice": 550, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6n4uDTP1tkQgQsptBaiTFoiB7_J-G6aqBw&usqp=CAU"},
                {"itemName": "oreo cake", "itemPrice": 610, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUVGcm03P3eCvWv5Ti0xOJWWXTB2q6IHkgA&usqp=CAU"},
                {"itemName": "Blueberry Cake", "itemPrice": 610, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR-bafPCYqiKVhOMONrWxw5lqPlZ_QEftXw&usqp=CAU"},
                {"itemName": "trufle pastry", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf3JM9AJxbm4iyxPdC_15Qtb_14hMcu_IFQ&usqp=CAU"},
                {"itemName": "Fruit pastry ", "itemPrice": 100, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4ocRZ_r3y3-wMxJenWbXwo-2O2VTNZ7jFA&usqp=CAU"}
            ],
            "Jar": [
                {"itemName": "Nutella Crunch Jar", "itemPrice": 179, "itemImg": "https://b.zmtcdn.com/data/dish_photos/581/29f794daf8b5307369b170aab8a52581.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Berry Jar", "itemPrice": 200, "itemImg": "https://b.zmtcdn.com/data/dish_photos/33c/764c209b0247f0f01887f754d9c8133c.jpg?fit=around|130:130&crop=130:130;*,*"}
            ],
            "cakes":[
                {"itemName":"oreo cake", "itemPrice": 720, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpc7EdlsmGU4w6wUqSANl5_pT0lVNMDwh2Mg&usqp=CAU"},
                {"itemName": "Blue Berry Ice cream Cake", "itemPrice": 680, "itemImg": "https://b.zmtcdn.com/data/dish_photos/60e/c585346655cc74e5e24f7aa4f9cea60e.jpg?fit=around|130:130&crop=130:130;*,*"}
            ]}
        },
        {
            "RestaurantName": "Pizza Hut",
            "RestaurantLocation": "Hyderabad",
            "OwnerName": "SR",
            "OwnerEmail": "SR@gmail.com",
            "OwnerPhone": "+91 9848392366",
            "OwnerPassword": "Pizza",
            "menuItems": {
            "Appetizer": [
                {"itemName": "Fries", "itemPrice": 125, "itemImg": "https://b.zmtcdn.com/data/dish_photos/bc5/b035f09c3357d1e9a7869ef897163bc5.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Zesty Chicken Pocket", "itemPrice": 135, "itemImg": "https://b.zmtcdn.com/data/dish_photos/a62/81ed2a060e9306bf073b179ce6b6fa62.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Cheesy Dip", "itemPrice": 35, "itemImg": "https://b.zmtcdn.com/data/dish_photos/a9c/075d08a3e5d6212df3dd6d7ef221da9c.jpg?fit=around|130:130&crop=130:130;*,*"},
            ],
            "Veg": [
                {"itemName": "Schezwan Margherita", "itemPrice": 219, "itemImg": "https://b.zmtcdn.com/data/dish_photos/2ff/0e7df98b7cffdb0b88856464014ad2ff.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Mexican Fiesta", "itemPrice": 319, "itemImg": "https://b.zmtcdn.com/data/dish_photos/4f3/0c4c12819d98a35144e3f08451ae64f3.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Cheezy Mushroom Magic", "itemPrice": 370, "itemImg": "https://b.zmtcdn.com/data/dish_photos/883/c53ce130542adf692e861b4bf9756883.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Farmers Pick", "itemPrice": 375, "itemImg": "https://b.zmtcdn.com/data/dish_photos/856/fbc00c2fcfd18fbda824c27a069c6856.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Tandoori Paneer", "itemPrice": 115, "itemImg": "https://b.zmtcdn.com/data/dish_photos/910/2833374cbbd7125505afc349c64ff910.jpg?fit=around|130:130&crop=130:130;*,*"},
            ],
            "Non-Veg": [
                {"itemName": "Sausage & Sweet Corn", "itemPrice": 250, "itemImg": "https://b.zmtcdn.com/data/dish_photos/a73/190c84ffc8773254c38b3b993e31ba73.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Sizzling Schezwan Chicken", "itemPrice": 320, "itemImg": "https://b.zmtcdn.com/data/dish_photos/65c/4061af0525c00c89f0d1edbe7216765c.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Chicken Sausage", "itemPrice": 320, "itemImg": "https://b.zmtcdn.com/data/dish_photos/156/20c60d2820b1c7c41720216cb9b24156.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Chicken Supreme", "itemPrice": 420, "itemImg": "https://b.zmtcdn.com/data/dish_photos/e71/5ccbc406893cba1814b72787accade71.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Triple Chicken Feast", "itemPrice": 400, "itemImg": "https://b.zmtcdn.com/data/dish_photos/367/eecfccd3c9402a2de57618f023b3b367.jpg?fit=around|130:130&crop=130:130;*,*"},
            ],
            "Drinks":[
                {"itemName":"Pepsi", "itemPrice": 50, "itemImg": "https://5.imimg.com/data5/XU/AE/HL/SELLER-82456434/pepsi-cold-drink.jpg"},
                {"itemName": "limca", "itemPrice": 50, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomr6_rDDXHz951QbHO8v_-Tu24hFSSuoi3A&usqp=CAU"},
                {"itemName": "Thumps up", "itemPrice": 50, "itemImg": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Thums_Up_logo.svg/640px-Thums_Up_logo.svg.png"},
            ]}
        },

        {
            "RestaurantName": "Cinema Cafe",
            "RestaurantLocation": "Vijayawada",
            "OwnerName": "Ashok",
            "OwnerEmail": "Ashok@gmail.com",
            "OwnerPhone": "+91 9728263633",
            "OwnerPassword": "Magic",
            "menuItems": {
            "Pasta": [
                {"itemName": "Veg pasta", "itemPrice": 266, "itemImg": "https://www.wholesomelicious.com/wp-content/uploads/2021/02/Vegetable-Garden-Pasta-Picture4-500x375.jpg"},
                {"itemName": "Chiken Pasta", "itemPrice": 299, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQ3ix7BWoxQ9kBFyE6DtpznBAf_bbmY7RTA&usqp=CAU"}
            ],
            "Burger": [
                {"itemName": "Veg Burger", "itemPrice": 250, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRxEyjnsSJAnucLHmwo7VhnL919xLKP_IGA&usqp=CAU"},
                {"itemName": "Chiken Burger", "itemPrice": 280, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRxEyjnsSJAnucLHmwo7VhnL919xLKP_IGA&usqp=CAU"}
            ],

            "Fries": [
                {"itemName":"French Fries", "itemPrice": 126, "itemImg": "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800"},
                {"itemName": "Peri peri Fries", "itemPrice": 143, "itemImg": "https://static.toiimg.com/photo/79912939.cms"}
            ],
            "Cakes": [
                {"itemName": "Butterscotch Cake", "itemPrice": 450, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6n4uDTP1tkQgQsptBaiTFoiB7_J-G6aqBw&usqp=CAU"},
                {"itemName": "oreo cake", "itemPrice": 410, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUVGcm03P3eCvWv5Ti0xOJWWXTB2q6IHkgA&usqp=CAU"},
                {"itemName": "Blueberry Cake", "itemPrice": 510, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR-bafPCYqiKVhOMONrWxw5lqPlZ_QEftXw&usqp=CAU"},
                {"itemName": "trufle pastry", "itemPrice": 80, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf3JM9AJxbm4iyxPdC_15Qtb_14hMcu_IFQ&usqp=CAU"},
                {"itemName": "Fruit pastry ", "itemPrice": 80, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4ocRZ_r3y3-wMxJenWbXwo-2O2VTNZ7jFA&usqp=CAU"}
            ],
            "Pizza": [
                {"itemName": "paneer pizza", "itemPrice": 190, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6utBEK9UZQW9Rkk-ZbDiC7T6cyrL6rjoUIA&usqp=CAU"},
                {"itemName": "Veg Pizza", "itemPrice": 180, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WUwgKDsqyHEGLP9RZNdqcd-TkfglLsVzBw&usqp=CAU"},
                {"itemName": "Hawaiian pizza", "itemPrice": 220, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6utBEK9UZQW9Rkk-ZbDiC7T6cyrL6rjoUIA&usqp=CAU"},
                {"itemName": "Chiken pizza", "itemPrice": 220, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkawCmg2Yx7zxfjJ8ab5DHPOf7_JAWMfcWjQ&usqp=CAU"},
                {"itemName": "BBQ chiken pizza", "itemPrice": 240, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkawCmg2Yx7zxfjJ8ab5DHPOf7_JAWMfcWjQ&usqp=CAU"}
            ],
            "Drinks":[
                {"itemName":"oreo shake", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qfNSeVfROOv5LBq6Km-6tT-5LoWaN7LVUQ&usqp=CAU"},
                {"itemName": "lime", "itemPrice": 80, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0K94ep2DRdiYLWj-VOYGMxeznBHz9uHY_A&usqp=CAU"},
                {"itemName": "Chocloate shake", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8MIVbC9xgSj88_uEmkSWapT4swp8jdOtsQ&usqp=CAU"}
            ]}
        },
        {
            "RestaurantName": "Lotus",
            "RestaurantLocation": "Bangalore",
            "OwnerName": "Vishnu",
            "OwnerEmail": "Vishnu@gmail.com",
            "OwnerPhone": "+91 9841234566",
            "OwnerPassword": "lotus",
            "menuItems": {
            "Thali": [
                {"itemName": "Veg Thali", "itemPrice": 375, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqkIvPytdmLr3F_hLqeFRIzmJUmM8pC0a6w&usqp=CAU"},
                {"itemName": "Spl Non-veg Thali", "itemPrice": 435, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-PwlbFl4FAsm4JIc-iHbzfKx_mtg22ubjQ&usqp=CAU"},
                {"itemName": "Mutton Thali", "itemPrice": 450, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDP-CuMW6Ou8S6WQAqmw33FRjeloCVmqNgg&usqp=CAU"},
            ],
            "Soups": [
                {"itemName":"Hot&sour Soup", "itemPrice": 150, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Veg Corn", "itemPrice": 180, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Mushroom Soup", "itemPrice": 210, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
            ],
            "Main Course - veg": [
                {"itemName": "Paneer Tikka masala", "itemPrice": 200, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1-27.jpg"},
                {"itemName": "Dal fry", "itemPrice": 180, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBgQSLg3eY1YItYHyPh06eEy1oNtzj_0gIg&usqp=CAU"},
                {"itemName": "BabyCorn chilli", "itemPrice": 220, "itemImg": "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Chilli_Baby_Corn_Schezwan_Style_Indian_Chinese_Recipe-2.jpg"},
                {"itemName": "Mushroom gravy", "itemPrice": 220, "itemImg": "https://static.toiimg.com/thumb/52449544.cms?imgsize=333893&width=800&height=800"},
                {"itemName": "Paneer butter masala", "itemPrice": 200, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkgnPq1bCuuMzjZUQXvfjNqybb8oojKitoA&usqp=CAU"},
            ],
            "Main Course - Non-veg": [
                {"itemName": "Chiken tikka masala", "itemPrice": 250, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFBLrCZs8bTc2UMA1VGepLVVTC0O-iQa6Kw&usqp=CAU"},
                {"itemName": "Chiken Biriyani", "itemPrice": 300, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uOYISQ463TTTKLHSZPy7JuxvXy5TuxYx8Q&usqp=CAU"},
                {"itemName": "Mutton Biryani", "itemPrice": 320, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uOYISQ463TTTKLHSZPy7JuxvXy5TuxYx8Q&usqp=CAU"},
                {"itemName": "Fish curry", "itemPrice": 320, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSl5An24UqhnIiN6CPghWO2pPTKkeplYwLaQ&usqp=CAU"},
                {"itemName": "Fish masala", "itemPrice": 300, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSl5An24UqhnIiN6CPghWO2pPTKkeplYwLaQ&usqp=CAU"},
            ],
            "Drinks":[
                {"itemName":"Pepsi", "itemPrice": 50, "itemImg": "https://5.imimg.com/data5/XU/AE/HL/SELLER-82456434/pepsi-cold-drink.jpg"},
                {"itemName": "limca", "itemPrice": 50, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomr6_rDDXHz951QbHO8v_-Tu24hFSSuoi3A&usqp=CAU"},
                {"itemName": "Thumps up", "itemPrice": 50, "itemImg": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Thums_Up_logo.svg/640px-Thums_Up_logo.svg.png"},
            ]}
        },

        {
            "RestaurantName": "Saji'S Kitchen",
            "RestaurantLocation": "vijayawada",
            "OwnerName": "Vikram",
            "OwnerEmail": "Vikram@gmail.com",
            "OwnerPhone": "+91 9023333633",
            "OwnerPassword": "Froza",
            "menuItems": {
            "Starters": [
                {"itemName": "Aloo Gobi", "itemPrice": 90, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoB8sjeaNvLlW6G0iZ6A2iNtntW1x4AWqljA&usqp=CAU"}
            ],
            "Breads": [
                {"itemName": "Chapati", "itemPrice": 50, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ahcswlgMh9NS5IfgpypDRLAl1TPPzozRrg&usqp=CAU"},
                {"itemName": "Parota", "itemPrice": 50, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseZY0cy_nD31J_IX8_fP3_hty6r3tDG5ZVA&usqp=CAU"}
            ],
            "Fried Rice": [
                {"itemName": "Schezwan Fried Rice", "itemPrice": 550, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6n4uDTP1tkQgQsptBaiTFoiB7_J-G6aqBw&usqp=CAU"},
                {"itemName": "Veg Fried Rice", "itemPrice": 610, "itemImg": "https://www.sharmispassions.com/wp-content/uploads/2020/12/14418740439_4a9d73b47b_o-435x500.jpg"},
                {"itemName": "Paneer Fried Rice", "itemPrice": 610, "itemImg": "https://www.sharmispassions.com/wp-content/uploads/2020/12/14418740439_4a9d73b47b_o-435x500.jpg"},
                {"itemName": "Egg Fried Rice", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sYXV4BwcXqvJhWL9FXFQOTZbrNHDQ1PdWg&usqp=CAU"},
                {"itemName": "Chicken Fried Rice", "itemPrice": 100, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKpUz426jz_R7PMkzWMiClzWWpLG6MLQxJA&usqp=CAU"}
            ],
            "Chinese": [
                {"itemName": "Paneer Manchurian", "itemPrice": 253, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTan_lJ77n9j4aOxsiwEH6J6AlSHDpj2C7yjQ&usqp=CAU"},
                {"itemName": "Chilli Mushroom", "itemPrice": 247, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcdc-Woj9z5rFqR7kSXoQL1vfgdWlk4TQHg&usqp=CAU"},
                {"itemName": "Chicken 65", "itemPrice": 247, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiFnAhlfYXXW46w0Imb51lOo8HFF4HmjNZg&usqp=CAU"},
                {"itemName": "Pepper Chicken", "itemPrice": 320, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiFnAhlfYXXW46w0Imb51lOo8HFF4HmjNZg&usqp=CAU"},
                {"itemName": "Chicken Lollipop", "itemPrice": 293, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwC2GOBCTHxRDc1RORlyUcRmsKEfgGGUwy2Q&usqp=CAU"}
            ],
            "Drinks":[
                {"itemName":"oreo shake", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qfNSeVfROOv5LBq6Km-6tT-5LoWaN7LVUQ&usqp=CAU"},
                {"itemName": "lime", "itemPrice": 80, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0K94ep2DRdiYLWj-VOYGMxeznBHz9uHY_A&usqp=CAU"},
                {"itemName": "nuts loaded shake", "itemPrice": 160, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr8MIVbC9xgSj88_uEmkSWapT4swp8jdOtsQ&usqp=CAU"}
            ]}
        },
        {
            "RestaurantName": "Kabab Magic",
            "RestaurantLocation": "Banglore",
            "OwnerName": "karthik",
            "OwnerEmail": "karthik@gmail.com",
            "OwnerPhone": "+91 9837434266",
            "OwnerPassword": "Magicmagic",
            "menuItems": {
            "Burgers": [
                {"itemName": "chiken Burger", "itemPrice": 195, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRxEyjnsSJAnucLHmwo7VhnL919xLKP_IGA&usqp=CAU"},
                {"itemName": "veg Burger", "itemPrice": 155, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRxEyjnsSJAnucLHmwo7VhnL919xLKP_IGA&usqp=CAU"},
                {"itemName": "Cheese Burger", "itemPrice": 165, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRxEyjnsSJAnucLHmwo7VhnL919xLKP_IGA&usqp=CAU"},
            ],
            "Thali": [
                {"itemName": "South Indian Thali", "itemPrice": 445, "itemImg": "https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/eazytrendz/2072/4.jpg"},
                {"itemName": "Non veg thaliThali", "itemPrice": 520, "itemImg": "https://b.zmtcdn.com/data/reviews_photos/d38/1f1ac6c7eb91a6b26220fd1314095d38_1578309867.jpg"},
            ],
            "Starters": [
                {"itemName": "Paneer Chilli", "itemPrice": 355, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2014/09/1-27.jpg"},
                {"itemName": "Gobi Manchuria", "itemPrice": 350, "itemImg": "https://www.indianveggiedelight.com/wp-content/uploads/2017/06/gobi-manchurian-featured.jpg"},
                {"itemName": "BabyCorn chilli", "itemPrice": 370, "itemImg": "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Chilli_Baby_Corn_Schezwan_Style_Indian_Chinese_Recipe-2.jpg"},
                {"itemName": "Mushroom Fry", "itemPrice": 375, "itemImg": "https://static.toiimg.com/thumb/52449544.cms?imgsize=333893&width=800&height=800"},
                {"itemName": "Paneer 65", "itemPrice": 415, "itemImg": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65-recipe.jpg"},
            ],
            "Starters": [
                {"itemName": "Ghee Rice", "itemPrice": 350, "itemImg": "https://www.ticklingpalates.com/wp-content/uploads/2022/02/how-to-make-ghee-rice-recipe-500x500.jpg"},
                {"itemName": "Kaju fried rice", "itemPrice": 400, "itemImg": "https://www.ticklingpalates.com/wp-content/uploads/2022/02/how-to-make-ghee-rice-recipe-500x500.jpg"},
                {"itemName": "Biryani", "itemPrice": 320, "itemImg": "https://vegecravings.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg.webp"},
                {"itemName": "SweetCorn field", "itemPrice": 320, "itemImg": "https://static.toiimg.com/thumb/52449544.cms?imgsize=333893&width=800&height=800https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/sweet-corn-fried-rice-recipe-1.jpg"},
                {"itemName": "Mushroom fried rice", "itemPrice": 400, "itemImg": "https://shwetainthekitchen.com/wp-content/uploads/2020/12/Spicy-Mushroom-Fried-Rice.jpg"},
            ],
            "Drinks":[
                {"itemName":"Pepsi", "itemPrice": 50, "itemImg": "https://5.imimg.com/data5/XU/AE/HL/SELLER-82456434/pepsi-cold-drink.jpg"},
                {"itemName": "limca", "itemPrice": 50, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomr6_rDDXHz951QbHO8v_-Tu24hFSSuoi3A&usqp=CAU"},
                {"itemName": "Thumps up", "itemPrice": 50, "itemImg": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Thums_Up_logo.svg/640px-Thums_Up_logo.svg.png"},
            ],
            "Soups": [
                {"itemName":"Hot&sour Soup", "itemPrice": 150, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Veg Corn", "itemPrice": 180, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
                {"itemName": "Mushroom Soup", "itemPrice": 210, "itemImg": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1.jpg"},
            ]
        }
        },

        {
            "RestaurantName": "Polar",
            "RestaurantLocation": "Banglore",
            "OwnerName": "Shiva",
            "OwnerEmail": "Shiva@gmail.com",
            "OwnerPhone": "+91 9907345843",
            "OwnerPassword": "Polar",
            "menuItems": {
            "Cakes": [
                {"itemName": "Butterscotch Cake", "itemPrice": 550, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6n4uDTP1tkQgQsptBaiTFoiB7_J-G6aqBw&usqp=CAU"},
                {"itemName": "oreo cake", "itemPrice": 610, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUVGcm03P3eCvWv5Ti0xOJWWXTB2q6IHkgA&usqp=CAU"},
                {"itemName": "Blueberry Cake", "itemPrice": 610, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR-bafPCYqiKVhOMONrWxw5lqPlZ_QEftXw&usqp=CAU"},
            ],
            "Icecream Scoops": [
                {"itemName": "Butterscotch", "itemPrice": 115, "itemImg": "https://b.zmtcdn.com/data/dish_photos/28e/c9a44f55172a8787aed07b09fbc6a28e.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Vanilla ", "itemPrice": 90, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPBiDn1xA482d9ZP9nM4Dfedel9qQcKueNw&usqp=CAU"},
                {"itemName": "Pista ", "itemPrice": 110, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUk_qIEtdMXHm5qWGedJVIqb_J9m4lCGDXVA&usqp=CAU"},
                {"itemName": "Fruit Punch", "itemPrice": 120, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLY2y4b87TfOl9wiswbClYlwCF2sI7qZ7-Q&usqp=CAU"},
                {"itemName": "Kulfi  ", "itemPrice": 95, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8f0BAaDCuK-NyDwNOkdHuaG7DsHhXubhFQ&usqp=CAU"}
            ],
            "Pizza": [
                {"itemName": "Spiced paneer pizza", "itemPrice": 253, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6utBEK9UZQW9Rkk-ZbDiC7T6cyrL6rjoUIA&usqp=CAU"},
                {"itemName": "Old form Veggies Pizza", "itemPrice": 247, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WUwgKDsqyHEGLP9RZNdqcd-TkfglLsVzBw&usqp=CAU"},
                {"itemName": "Hawaiian pizza", "itemPrice": 247, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6utBEK9UZQW9Rkk-ZbDiC7T6cyrL6rjoUIA&usqp=CAU"},
                {"itemName": "Periperi Chiken pizza", "itemPrice": 320, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkawCmg2Yx7zxfjJ8ab5DHPOf7_JAWMfcWjQ&usqp=CAU"},
                {"itemName": "Texas BBQ chiken pizza", "itemPrice": 293, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkawCmg2Yx7zxfjJ8ab5DHPOf7_JAWMfcWjQ&usqp=CAU"}
            ],
            "Fries": [
                {"itemName":"French Fries", "itemPrice": 126, "itemImg": "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800"},
                {"itemName": "Peri peri Fries", "itemPrice": 143, "itemImg": "https://static.toiimg.com/photo/79912939.cms"},
                {"itemName": "Peri peri wedges", "itemPrice": 146, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7d09m2YFIdl5ZGcMFvYavacVEjzIYHZ-qA&usqp=CAU"}
            ],
            "Shakes":[
                {"itemName":"oreo shake", "itemPrice": 150, "itemImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qfNSeVfROOv5LBq6Km-6tT-5LoWaN7LVUQ&usqp=CAU"},
                {"itemName": "Cold Coffee Milkshake", "itemPrice": 160, "itemImg": "https://b.zmtcdn.com/data/dish_photos/2da/76fd6c228c4790cda56e1189072fb2da.jpg?fit=around|130:130&crop=130:130;*,*"},
                {"itemName": "Cookie Shake", "itemPrice": 140, "itemImg": "https://b.zmtcdn.com/data/dish_photos/3e5/d007c1d6ac0c7c913d7e5d7c983013e5.jpg?fit=around|130:130&crop=130:130;*,*"}
            ]}
        }
    ]
)


// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
