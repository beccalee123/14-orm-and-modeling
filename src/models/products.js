'use strict';

const productsSchema = require('./products-schema.js');
const dataModel = require('./model.js');

class Products extends dataModel { }

module.exports = new Products(productsSchema);
