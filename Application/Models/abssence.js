const mongoose = require ('mongoose');

var abssenceSchema = new mongoose.Schema(
{
	cin            :{ type : Number },
	Date           :{ type : String },
	Nombredejours  :{ type : Number }
});

mongoose.model('abssence',abssenceSchema);
