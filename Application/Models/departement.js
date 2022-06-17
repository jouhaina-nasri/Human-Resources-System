const mongoose = require ('mongoose');

var departementSchema = new mongoose.Schema(
{
	cin            :{ type : Number },
	nomDepartement :{ type : String }
});

mongoose.model('departement',departementSchema);
