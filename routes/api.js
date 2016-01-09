// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Disaster = require('../models/disaster')

// Routes
Disaster.methods(['get', 'put', 'post', 'delete']);
Disaster.register(router, '/disasters');

// Return router
module.exports = router;

