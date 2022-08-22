// Step 3 - this is the code for ./models.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
	name: String,
	
	img:
	{
		data: Buffer,
		contentType: String,
	}
});

//Image is a model which has a schema imageSchema

// module.exports = new mongoose.model('Image', imageSchema);
// exports.module = imageSchema= mongoose.model('Image', imageSchema);

var imageSchema = mongoose.model('imageSchema', imageSchema);

module.exports = imageSchema;