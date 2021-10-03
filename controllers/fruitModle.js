'use strict';


const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({

    strDrink: String,
    strDrinkThumb: String,
    idDrink: Number
});

const userModle = mongoose.model('usercollection', fruitSchema)

module.exports = { userModle };