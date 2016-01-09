// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var disasterSchema = new mongoose.Schema({
	lat: Number,
	lng: Number,
	disaster: Number
});

// Return model
module.exports = restful.model('Disaster', disasterSchema);