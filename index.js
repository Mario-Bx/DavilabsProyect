import express from 'express';
import bodPrJson from 'body-parser';
import firebase from './firebase.js';

var app = express();
app.use(bodPrJson.urlencoded({ extended: false }));
app.use(bodPrJson.json());

var respuesta = {
    description: "aqui va la descripcion",
    codigo: "0"
}

function operacion1(numeroA, numerob, tipoOperacion){
    if (tipoOperacion == "suma" || tipoOperacion == "Suma") {
        return (numeroA+numerob)
    }else if ( tipoOperacion == "resta" || tipoOperacion == "Resta"   ){
        return (numeroA-numerob)
    }else {
        return "operacion invalida"
    }
}

function registro (nombre, apellido, fechaNacimiento, correo, contraseña){
    if (nombre !== '' && apellido !== '' && fechaNacimiento !== '' && correo !== '' && contraseña !== '') {
        return ("Reguistro exitoso");
    }else{
        return ("Faltan datos")
    }
}

var nombreR = 'Vanessa';
var apellidosR = 'Perez';

function iniciarSesion (nombre, apellido){
    if (nombre === nombreR && apellido === apellidosR) {
        return ("inicio exitoso");
    } else {
        return ("paramitros invalidos");
    }
}

app.post('/', function (req, res) {
    if(typeof req.body.numeroA == "number" && typeof req.body.numeroB == "number" ){
        var resultado = operacion1(req.body.numeroA, req.body.numeroB, req.body.tipoOperacion);
        respuesta = {
            codigo: "200",
            description: "operacio nexitosa",
            valor: resultado
        }
    } else {
        respuesta ={
            codigo: "406",
            description: "datos invalidos"
        }
    }
    res.send(respuesta);
})

app.post('/ejer1', function (req, res) {
    if(typeof req.body.nombre == "string" && typeof req.body.apellido == "string" && typeof req.body.fechaN == "string" && typeof req.body.correo == "string" && typeof req.body.contraseña == "string"){
        var resultado = registro(req.body.nombre, req.body.apellido, req.body.fechaN, req.body.correo, req.body.contraseña);
        respuesta = {
            codigo: "200",
            description: "registro exitosa",
            valor: resultado
        }
    } else {
        respuesta ={
            codigo: "406",
            description: "datos invalidos"
        }
    }
    res.send(respuesta);
})

/// validacion usuario
app.post('/ejer2', function (req, res) {
    if(req.body.codigo != '' && req.body.contraseña != '' ){
        firebase.auth().signInWithEmailAndPassword(req.body.usuario, req.body.contraseña).then((answer) => {
            res.status(200).send(answer)
        })
        .catch((error=>{
            res.status(406).send(error);
            console.log(error)
        }));

    } else {
        respuesta ={
            codigo: "406",
            description: "datos invalidos"
        }
        res.send(respuesta);
    }

})

app.listen(3000, function(){
    console.log("api correidno por puerto 3000")
})