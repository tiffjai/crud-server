const express = require('express');
const fruitRouter = express.Router();
const fruits = require('../controllers/fruits')

// app.get('/fruits', controller function)

//app.get('/fruits/:name', controller function)

//create - POST - create
fruitRouter.post('/',fruits.create)
//Update - PATCH - update
fruitRouter.patch('/:name',fruits.update)
//Delete - Delete - destroy
fruitRouter.delete('/:name',fruits.destroy)
fruitRouter.get('/', fruits.index)

fruitRouter.get('/:name', fruits.show)

module.exports = fruitRouter
 