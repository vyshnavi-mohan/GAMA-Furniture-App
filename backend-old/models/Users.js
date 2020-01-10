const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Users = new Schema({
   firstname: {
      type: String
   },
   lastname: {
    type: String
     },
     username: {
        type: String
     },
   email: {
      type: String
   },
   mobile: {
      type: Number
   },
   password: {
    type: String
 }
}, {
   collection: 'users'
})

module.exports = mongoose.model('Users', Users)