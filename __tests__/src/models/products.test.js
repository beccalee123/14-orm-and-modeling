'use strict';

const rootDir = process.cwd();
const product = require(`${rootDir}/src/models/products.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products Model', () => {
  it('can post() a new product', () => {
    let obj = { name: 'Computer', description: 'The thing you code on', category: 'Electronics' };
    return product.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = { name: 'Computer', description: 'The thing you code on', category: 'Electronics' };
    return product.post(obj)
      .then(record => {
        return product.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can put() a product', () => {
    let obj = { name: 'Computer', description: 'The thing you code on', category: 'Electronics' };
    return product.post(obj)
      .then(record => {
        record._id = 4;
        product.put(4, obj);
        return product.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() a product', () => {
    let obj = { name: 'Computer', description: 'The thing you code on', category: 'Electronics' };
    return product.post(obj)
      .then(record => {
        record._id = 4;
        product.delete(4);
        return product.get(record._id)
          .then(product => {
            expect(product).toBeNull;
          });
      });
  });

});