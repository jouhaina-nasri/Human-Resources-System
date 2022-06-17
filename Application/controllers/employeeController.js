const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('employee');
const Conges = mongoose.model('conges');
const Abssence = mongoose.model('abssence');
const Departement = mongoose.model('departement');


/********* Affichage ************/

/* Affichage des employes */
router.get('/getall', (req, res) => {
    Employee.find({},(err,data) => {
        if(!err)
        {
            res.send(data);
        } else
        {
            console.log(err);
        }
    });
});
/*****************************/

/* Affichage des abssences */
router.get('/getall/abs', (req, res) => {
    Abssence.find({},(err,data) => {
        if(!err)
        {
            res.send(data);
        } else
        {
            console.log(err);
        }
    });
});
/*****************************/

/* Affichage des conges */
router.get('/getall/conges', (req, res) => {
    Conges.find({},(err,data) => {
        if(!err)
        {
            res.send(data);
        } else
        {
            console.log(err);
        }
    });
});
/*****************************/

/* Affichage des departements */
router.get('/getall/dep', (req, res) => {
    Departement.find({},(err,data) => {
        if(!err)
        {
            res.send(data);
        } else
        {
            console.log(err);
        }
    });
});
/*****************************/
/* Affichage des actifs */
router.get('/getall/actif', (req, res) => {
    Employee.find({actif : 1},(err,data) => {
        if(!err)
        {
            res.send(data);
        } else
        {
            console.log(err);
        }
    });
});
/* Affichage des actifs */
router.get('/getall/des', (req, res) => {
    Employee.find({actif : 0},(err,data) => {
        if(!err)
        {
            res.send(data);
        } else
        {
            console.log(err);
        }
    });
});

/*******************************************************/



/********* Ajouter ************/

/* Ajouter des employes */
router.post('/add', (req, res) => {
    if (!req.body.fname || !req.body.email || !req.body.cin ) 
    {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    else
    {
        var employee      = new Employee();
        employee.cin      = req.body.cin;
        employee.fname    = req.body.fname;
        employee.lname    = req.body.lname;
        employee.email    = req.body.email;
        employee.mobile   = req.body.mobile;
        employee.salaire  = req.body.salaire;
        employee.nbrheure = req.body.nbrheure;
        employee.numbanc  = req.body.numbanc;
        employee.poste    = req.body.poste;
        employee.adresse  = req.body.adresse;
        employee.actif     = req.body.actif;
        employee.save();
        res.send("save effectué avec succés");
    }
});
/*****************************/

/* Ajouter des conges */
router.post('/add/conges', (req, res) => {
    if (!req.body.cin ) 
    {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    else
    {
        var conges         = new Conges();
        conges.cin         = req.body.cin;
        conges.DateDepart  = req.body.DateDepart;
        conges.DateReprise = req.body.DateReprise;
        conges.NatConges   = req.body.NatConges;
        conges.save();
        res.send("save effectué avec succés");
    }
});
/*****************************/

/* Ajouter des abssences */
router.post('/add/abs', (req, res) => {
    if (!req.body.cin ) 
    {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    else
    {
        var abs           = new Abssence();
        abs.cin           = req.body.cin;
        abs.Date          = req.body.Date;
        abs.Nombredejours = req.body.Nombredejours;
        abs.save();
        res.send("save effectué avec succés");
    }
});
/*****************************/

/* Ajouter des departements */
router.post('/add/dep', (req, res) => {
    if (!req.body.cin ) 
    {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    else
    {
        var dep           = new Departement();
        dep.cin           = req.body.cin;
        dep.nomDepartement= req.body.nomDepartement;
        dep.save();
        res.send("save effectué avec succés");
    }
});
/*****************************/


/*******************************************************/



/********* Modifier ************/

/* Modifier des conges */
router.put('/edit/conges/:id', (req, res) => {
    const conges = {
        cin         : req.body.cin,
        DateDepart  : req.body.DateDepart,
        DateReprise : req.body.DateReprise,
        NatConges   : req.body.NatConges};
    Conges.findOneAndUpdate({cin : req.params.id}, {$set: conges}, {new:true}, (err,data) => {
        if(!err)
        {
            res.status(200).json({ code:200, message: 'Conges modifié avec succés',updateConges:data })
        }
        else
        {
            console.log(err);
        }
    });

});
/*****************************/

/* Modifier des abssences */
router.put('/edit/abs/:id', (req, res) => {
    const abs = {
        cin           : req.body.cin,
        Date          : req.body.Date,
        Nombredejours : req.body.Nombredejours};
    Abssence.findOneAndUpdate({cin : req.params.id}, {$set: abs}, {new:true}, (err,data) => {
        if(!err)
        {
            res.status(200).json({ code:200, message: 'Abssence modifié avec succés',updateAbssence:data })
        }
        else
        {
            console.log(err);
        }
    });

});
/*****************************/

/* Modifier des departements */
router.put('/edit/dep/:id', (req, res) => {
    const dep = {
        nomDepartement: req.body.nomDepartement};
    Departement.findOneAndUpdate({cin : req.params.id}, {$set: dep}, {new:true}, (err,data) => {
        if(!err)
        {
            res.status(200).json({ code:200, message: 'Departement modifié avec succés',updateDepartement:data })
        }
        else
        {
            console.log(err);
        }
    });

});
/*****************************/

/* Modifier des employes */
router.put('/edit/:id', (req, res) => {
    const employee = {
        email   : req.body.email,
        mobile  : req.body.mobile,
        salaire : req.body.salaire,
        nbrheure: req.body.nbrheure,
        poste   : req.body.poste,
        adresse : req.body.adresse,
        actif   : req.body.actif};
    Employee.findOneAndUpdate({cin : req.params.id}, {$set: employee}, {new:true}, (err,data) => {
        if(!err)
        {

            res.status(200).json({ code:200, message: 'Employee modifié avec succés',updateEmployee:data })
        }
        else
        {
            console.log(err);
        }
    });
});
/*****************************/

/*******************************************************/



/********* Affichage by id ************/

/* Afficher un employe */
router.get('/getbyid/:id', (req, res) => {
    Employee.findOne({cin : req.params.id},(err,data) => {
        if(!err)
        {
            res.send(data);
        } 
        else
        {
            console.log(err);
        }
    });
});
/*****************************/

/* Afficher un departement */
router.get('/getbyid/dep/:id', (req, res) => {
    Departement.findOne({nomDepartement : req.params.id},(err,data) => {
        if(!err)
        {
            res.send(data);
        } 
        else
        {
            console.log(err);
        }
    });
});
/*****************************/


/*******************************************************/



/********* Supprimer ************/

/* Supprimer un conges */
router.delete('/delete/:id', (req, res) => {
    Conges.findOneAndDelete({cin : req.params.id}, (err,data) => {
        if(!err)
        {
            res.status(200).json({ code:200, message: 'Conges supprimé avec succés',deleteConges:data })
        }
        else
        {
            console.log(err);
        }
});

});
/*****************************/
/* Supprimer un abs */
router.delete('/delete/:id', (req, res) => {
    Abssence.findOneAndDelete({cin : req.params.id}, (err,data) => {
        if(!err)
        {
            res.status(200).json({ code:200, message: 'Abssence supprimé avec succés',deleteAbssence:data })
        }
        else
        {
            console.log(err);
        }
});

});
/*****************************/
/* Supprimer un dep */
router.delete('/delete/:id', (req, res) => {
    Departement.findOneAndDelete({cin : req.params.id}, (err,data) => {
        if(!err)
        {
            res.status(200).json({ code:200, message: 'Departement supprimé avec succés',deleteDepartement:data })
        }
        else
        {
            console.log(err);
        }
});

});
/*****************************/

module.exports = router;