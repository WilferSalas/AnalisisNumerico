const User = require("../models/user");
const math = require('mathjs');
const gestMetodosCerrados = require("../Scripts/ecuacionesDeUnaVariable/metodosCerrados");
const gestMetodosAbiertos = require("../Scripts/ecuacionesDeUnaVariable/metodosAbiertos");

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })
  

exports.busquedas = (req, res, next) => {
    let fetchedUser;
    let funcion;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        
        let result = gestMetodosAbiertos.busquedasIncrementales(req.body.iter, req.body.x1, req.body.delta, req.body.ffuncion);

        res.status(200).json({
            message: "Se logro ejecutar Busquedas incrementales correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(501).json({
            err: err
        });
    });
}

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
        
        let result = gestMetodosCerrados.biseccion(req.body.iter, req.body.tole, req.body.x1, req.body.x2, req.body.ffuncion);

        res.status(200).json({
            message: "Se logro ejecutar biseccion correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(501).json({
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
        
        
        let result = gestMetodosCerrados.reglaFalsa(req.body.iter, req.body.tole, req.body.x1, req.body.x2, req.body.ffuncion);
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
        
        fetchedFunctions = user.funciones;
        let result = gestMetodosAbiertos.puntoFijo(req.body.iter,req.body.tole, req.body.x1, req.body.ffuncion, req.body.gfuncion);
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
        
        fetchedFunctions = user.funciones;
        let result = gestMetodosAbiertos.newton(req.body.iter,req.body.tole, req.body.x1, req.body.ffuncion, req.body.fpfuncion);
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
        
        let result = gestMetodosAbiertos.secante(req.body.iter, req.body.tole, req.body.x1, req.body.x2, req.body.ffuncion);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar secante correctamente", 
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
        fetchedFunctions = user.funciones;
        let result = gestMetodosAbiertos.raicesMultiples(req.body.iter,
            req.body.tole, 
            req.body.x1, 
            req.body.ffuncion, 
            req.body.fpfuncion,
            req.body.fppfuncion);
        console.log(result);

        res.status(200).json({
            message: "Se logro ejecutar Raices multiples correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}