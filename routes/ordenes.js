var express = require('express');
var router = express.Router();
var USER  = require("../database/ordenes");

/* GET */
router.get('/ordenes',(req, res, next) => {
  USER.find({}, (err, docs) => {
    res.status(200).json(docs);
  });
});


//POST
 router.post("/ordenes", (req, res) => {
  var datos=req.body;

  var user={};
  user["cantidad"]=datos.cantidad;
  user["lugardeenvio"]=datos.lugardeenvio;
  var guardando=new USER(user);  //-->variable para guardar en la base de datos
  guardando.save().then(() => {  //-->guardando
    res.status(200).json({"mns" : "Usuario Registrado"});
  });
 });

 //UPDATE  ---> falta   <-------


 //DELETE  --->falta     <-------solo es un ejemplo
 router.delete("/ordenes", (req, res) => {
  var datos=req.body;
  var name = datos.id;
  console.log(datos);
  console.log(name);
  res.status(200).json({
    mns:"DELETE"
  });
 });

 module.exports = router;
