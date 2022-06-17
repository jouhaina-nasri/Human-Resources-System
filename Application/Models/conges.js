const mongoose = require ('mongoose');

var congesSchema = new mongoose.Schema(
{
	cin          :{ type : Number },
	DateDepart   :{ type : String },
	DateReprise  :{ type : String }, 
	NatConges    :{ type : String },

});

mongoose.model('conges',congesSchema);
