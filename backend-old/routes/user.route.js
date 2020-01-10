const express = require('express');
const app = express();
const userRoute = express.Router();

// Users model
let Users = require('../models/Users');

// Add Employee
userRoute.route('/create').post((req, res, next) => {
    Users.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Users
userRoute.route('/').get((req, res) => {
    Users.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single User
userRoute.route('/read/:id').get((req, res) => {
    Users.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Users
userRoute.route('/update/:id').put((req, res, next) => {
    Users.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete user
userRoute.route('/delete/:id').delete((req, res, next) => {
    Users.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;