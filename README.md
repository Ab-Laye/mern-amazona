# MERN AMAZONA

# Etapes

1. installer les outils
2. Create react app
3. create Git repository
4. Liste des produits
5. Ajouter un page de route
   1. npm i create-router-dom
   2. create route for home screen
   3. create route for product screen
6. Create Node.js server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. pm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
7. Fetch Products From backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
8. Manage State By Reducer Hook
   1. definie reducer
   2. upate fetch data
   3. get state from usReducer
9. Add bootstrap UI Framework
   1. npm install react-bootstrap bootstrap
   2. update App.js
10. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component
11. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
12. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. craete message component
    4. create utils.js to define getError fuction
13. Create React Context For Add Item To Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
14. Complete Add To Cart
    1. check exist item in the cart
    2. check count in stock in backend
15. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
16. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
17. 1. create sign in form
    2. add email and password
    3. add signin button
18. Connect To MongoDB Database
    1. create atlas monogodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
19. Seed Sample Products
    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product
20. Seed Sample Users

    1. create user model
    2. seed sample users

21. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
22. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
23. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
24. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
25. Create Place Order Screen
    1. show cart items, payment and address
    2. handle place order action
    3. create order create api
26. Implement Place Order Action
    1. handle place order action
    2. create order create api
