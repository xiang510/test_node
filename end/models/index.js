const shortid = require('shortid');
const low = require('lowdb');
const FileSyns = require('lowdb/adapters/FileSync');
const adapter  = new FileSyns('db/db.json', {
  // serialize: (data) => encrypt(JSON.stringify(data)),
  // deserialize: (data) => JSON.parse(decrypt(data))
});
const db = low(adapter);

//初始化DB
const init = function (obj) {
  // Set some defaults]
  db.defaults(obj)
    .write();
}

const add = function (key,val) {
  // Add a post
  var id = {
    id:shortid.generate()
  }
  var newVal = Object.assign(id, val);

  db.get(key)
  .push(newVal)
  .write()
}

const get = function (key,val) {
  // Set a user using Lodash shorthand syntax
  db.get(key)
  .find(val)
  .value()
}

const remove = function (key, val) {
  db.get(key)
  .remove(val)
  .write()
}

const update = function (key, oldval, newval) {
  db.get(key)
  .find(oldval)
  .assign(newval)
  .write()
}

module.exports =  {
  init,
  add,
  get,
  remove,
  update
}


