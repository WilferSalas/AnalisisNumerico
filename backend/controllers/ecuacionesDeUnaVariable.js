const User = require("../models/user");
const math = require('mathjs')
const gestMetodosCerrados = require("../Scripts/ecuacionesDeUnaVariable/metodosCerrados");
const gestMetodosAbiertos = require("../Scripts/ecuacionesDeUnaVariable/metodosAbiertos");

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })
  

exports.biseccion = (req, res, next) => {
    let fetchedUser;
    let funcion;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        //Se espera que se mande un request con el numero de la funcion, donde se pretende manterne el mismo orden siempre para las funciones
        if(!user.funciones[req.body.numeroFuncion]){
            res.status(404).json({
                message: "El usuario no tiene la funcion deseada"
            });
        }
        
        let result = gestMetodosCerrados.biseccion(req.body.iter, req.body.tole, req.body.x1, req.body.x2, user.funciones[req.body.numeroFuncion]);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar biseccion correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.reglaFalsa = (req, res, next) => {
    let fetchedUser;
    let funcion;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        //Se espera que se mande un request con el numero de la funcion, donde se pretende manterne el mismo orden siempre para las funciones
        if(!user.funciones[req.body.numeroFuncion]){
            res.status(404).json({
                message: "El usuario no tiene la funcion deseada"
            });
        }
        
        
        let result = gestMetodosCerrados.reglaFalsa(req.body.iter, req.body.tole, req.body.x1, req.body.x2, user.funciones[req.body.numeroFuncion]);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar Regla falsa correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.puntoFijo = (req, res, next) => {
    let fetchedUser;
    let funcion;
    let fetchedFunctions;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        //Se espera que se mande un request con el numero de la funcion, donde se pretende manterne el mismo orden siempre para las funciones
        if(!user.funciones[req.body.numeroFuncion1]){
            res.status(404).json({
                message: "El usuario no tiene la funcion fx deseada"
            });
        }
        if(!user.funciones[req.body.numeroFuncion2]){
            res.status(404).json({
                message: "El usuario no tiene la funcion gx deseada"
            });
        }
        
        fetchedFunctions = user.funciones;
        let result = gestMetodosAbiertos.puntoFijo(req.body.iter,req.body.tole, req.body.x1, fetchedFunctions[req.body.numeroFuncion1], fetchedFunctions[req.body.numeroFuncion2]);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar Punto fijo correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.newton = (req, res, next) => {
    let fetchedUser;
    let funcion;
    let fetchedFunctions;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        //Se espera que se mande un request con el numero de la funcion, donde se pretende manterne el mismo orden siempre para las funciones
        if(!user.funciones[req.body.numeroFuncion1]){
            res.status(404).json({
                message: "El usuario no tiene la funcion fx deseada"
            });
        }
        if(!user.funciones[req.body.numeroFuncion2]){
            res.status(404).json({
                message: "El usuario no tiene la funcion gx deseada"
            });
        }
        
        fetchedFunctions = user.funciones;
        let result = gestMetodosAbiertos.newton(req.body.iter,req.body.tole, req.body.x1, fetchedFunctions[req.body.numeroFuncion1], fetchedFunctions[req.body.numeroFuncion2]);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar Newton correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.secante = (req, res, next) => {
    let fetchedUser;
    let funcion;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        //Se espera que se mande un request con el numero de la funcion, donde se pretende manterne el mismo orden siempre para las funciones
        if(!user.funciones[req.body.numeroFuncion]){
            res.status(404).json({
                message: "El usuario no tiene la funcion deseada"
            });
        }
        
        
        let result = gestMetodosAbiertos.secante(req.body.iter, req.body.tole, req.body.x1, req.body.x2, user.funciones[req.body.numeroFuncion]);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar Regla falsa correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.raicesMultiples = (req, res, next) => {
    let fetchedUser;
    let funcion;
    let fetchedFunctions;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        //Se espera que se mande un request con el numero de la funcion, donde se pretende manterne el mismo orden siempre para las funciones
        if(!user.funciones[req.body.numeroFuncion1]){
            res.status(404).json({
                message: "El usuario no tiene la funcion fx deseada"
            });
        }
        if(!user.funciones[req.body.numeroFuncion2]){
            res.status(404).json({
                message: "El usuario no tiene la funcion gx deseada"
            });
        }
        
        fetchedFunctions = user.funciones;
        let result = gestMetodosAbiertos.raicesMultiples(req.body.iter,
            req.body.tole, 
            req.body.x1, 
            fetchedFunctions[req.body.numeroFuncion1], 
            fetchedFunctions[req.body.numeroFuncion2],
            fetchedFunctions[req.body.numeroFuncion3]);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar Newton correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}