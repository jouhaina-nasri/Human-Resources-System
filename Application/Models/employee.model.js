const mongoose = require ('mongoose');

var employeeSchema = new mongoose.Schema(
{
	cin     :{ type : Number },
	fname   :{ type : String },
	lname   :{ type : String }, 
	email   :{ type : String },
	mobile  :{ type : String },
	salaire :{ type : Number },
	nbrheure:{ type : Number },
	numbanc :{ type : String },
	poste   :{ type : String },
	adresse :{ type : String },
	actif   :{ type : Number}
});

mongoose.model('employee',employeeSchema);
