var express = require('express');
var router = express.Router();
var USER  = require("../database/menu");

/* GET */
router.get('/menu',(req, res, next) => {
  USER.find({}, (err, docs) => {
    res.status(200).json(docs);
  });
});


//POST
 router.post("/menu", (req, res) => {
  var datos=req.body;

  var user={};
  user["nombre"]=datos.nombre;
  user["precio"]=datos.precio;
  user["descripcion"]=datos.descripcion;
  var guardando=new USER(user);  //-->variable para guardar en la base de datos
  guardando.save().then(() => {  //-->guardando
    res.status(200).json({"mns" : "Usuario Registrado"});
  });
 });

 //UPDATE  ---> falta   <---------------------
 
 //DELETE  --->falta    <--------------------- solo es ejmplo
 router.delete("/menu", (req, res) => {
  var datos=req.body;
  var name = datos.id;
  console.log(datos);
  console.log(name);
  res.status(200).json({
    mns:"DELETE"
  })
 });

module.exports = router;
