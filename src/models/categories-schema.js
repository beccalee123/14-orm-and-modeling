'use strict';

const products = require('./products-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: { type:String, required:true },
  description: { type:String, required:true },

}, {toObject:{virtuals:true}, toJSON:{virtuals:true}});

categories.virtual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

categories.pre('find', function(){
  try {
    this.populate('products');
  }
  catch(e) {console.log('Find Error', e);}
});

categories.pre('save', function(next) {
  if (this.name === 'cats'){
    this.name = 'meowmers';
  }
  if(this.name === 'dogs'){
    this.name = 'good boys';
  }
  next();
});

module.exports = mongoose.model('categories', categories);
