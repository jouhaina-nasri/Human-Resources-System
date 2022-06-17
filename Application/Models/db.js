const mongoose  = require('mongoose'); //connexion avec db

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser: true},(err) =>
	{
		if (!err) {console.log('Connexion à MongoDB avec succees.')}
		else{console.log('Erreur dans la connexion du base de donnees :'+err)}
	}
	);

require('./employee.model');
require('./conges');
require('./abssence');
require('./departement');

