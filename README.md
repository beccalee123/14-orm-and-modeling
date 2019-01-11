![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## API Server

### Author: Becca Lee

### Links and Resources

![Build Status](https://www.travis-ci.com/beccalee123/14-orm-and-modeling.svg?branch=master)
* [repo](https://github.com/beccalee123/14-orm-and-modeling)
* [travis](https://www.travis-ci.com/beccalee123/14-orm-and-modeling)
* [heroku](https://api-server-bl.herokuapp.com/)

#### Documentation
* [swagger](https://app.swaggerhub.com/apis/beccalee123/productscategories/1.0.0#/default) - got stuck on an error here
* [jsdoc](http://xyz.com) - not yet completed

### Modules
- `src/models/categories.js` contains the category class
- `src/models/products.js` contains the products class
- `src/models/models.js` contains the models
- `src/models/products-schema.js` contains the product schema for mongo db
- `src/models/categories-schema.js` contains the product schema for mongo db
- `src/middleware/404.js` contains the 404 error
- `src/middleware/error.js` contains other errors
- `src/middleware/error.js` contains middleware that assigns a new parameter to the request object
- `src/api/categories.js` contains the categories routes and corresponding functions
- `src/api/products.js` contains the products routes and corresponding functions
- `src/app.js` contains all the app.use info
- `index.js` contains the core server functionality


### Setup
#### `.env` requirements
* `PORT`: `3000`
* `MONGODB_URI`: `MONGODB_URI=mongodb://localhost:27017/store`


#### Running the app
* install httpie, nodemon, and mongo db
* in a terminal window, run the server file with nodemon `nodemon index.js`
* in another terminal window, run the port with httpie `http :3000`
* Then, run mongodb
  * `start mongodb path path/to/database`
  * `start mongod in another window`
  * `show dbs`
  * `run: db.products.find().pretty(); to print all items in db`
* For the GET endpoint, you can either see all books/movies `/api/v1/categories` or `/api/v1/products` or request a specific id (ie `/api/v1/categories/<id>`). 
  * To view, enter `http GET :3000/api/v1/categories` or `http GET :8080/api/v1/categories/<id>`. Sub products for categories in the routes to see products db data
  * Returns a JSON object with all products/categories or a selected record in it.
* For the POST endpoint, you can add an item to categories (`/api/v1/categories`) or products(`/api/v1/products`). 
  * To add a category, enter `echo '{"name":"Category Name","description":"Category Description"}' |http POST :3000/api/v1/categories`
  * To add a product, enter `echo '{"name":"Product Name","description":"Product Description"}' |http POST :3000/api/v1/products`
  * Adds a JSON object to the products or categories db.
* For the PUT endpoint, you can update a record in products (`/api/v1/products`) or categories (`/api/v1/categories`). 
  * * To update a product, enter `echo 'echo '{"name":"Product Name","description":"Product Description"}' |http PUT :3000/api/v1/products`
  * To update a category, enter `echo '{"name":"Category Name","description":"Category Description"}' |http PUT :3000/api/v1/categories`
* For the DELETE endpoint, you can delete a specific record in categories (`categories`) or products (`products`).
  * To delete a record, enter `http DELETE :3000/api/v1/products/<id>`. For a categories record, sub posts for products. You can enter any existing record number to delete.
  
#### Tests
* How do you run tests?
Tests are run using jest and travis
* What assertions were made?
Each data model has been tested to ensure correct functionality. There server and routes have also been tested
