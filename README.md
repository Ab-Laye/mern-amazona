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
