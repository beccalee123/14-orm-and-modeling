'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  /**
   *
   *
   * @param {*} _id
   * @returns
   * @memberof DataModel
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }
  
  /**
   *
   *
   * @param {*} record
   * @returns
   * @memberof DataModel
   */
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  /**
   *
   *
   * @param {*} _id
   * @param {*} record
   * @returns
   * @memberof DataModel
   */
  put(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new:true});
  }

  /**
   *
   *
   * @param {*} _id
   * @returns
   * @memberof DataModel
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = DataModel;
