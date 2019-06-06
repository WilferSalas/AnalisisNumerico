const User = require("../models/user");
const math = require('mathjs')
const gestMetodosDirectos = require("../Scripts/sistemasDeEcuaciones/metodosDirectos");
const gestMetodosIterativos = require("../Scripts/sistemasDeEcuaciones/metodosIterativos");

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

exports.eliminacionGausseana = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        let result = gestMetodosDirectos.eliminacionGausseana(matrix);

        res.status(200).json({
            message: "Se logro ejecutar Eliminacion Gausseana correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.eliminacionGausseanaConPivoteoParcial = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        let result = gestMetodosDirectos.eliminacionGausseanaConPivoteoParcial(matrix);

        res.status(200).json({
            message: "Se logro ejecutar Eliminacion Gausseana con pivoteo parcial correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.eliminacionGausseanaConPivoteoTotal = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        let result = gestMetodosDirectos.eliminacionGausseanaConPivoteoTotal(matrix);

        res.status(200).json({
            message: "Se logro ejecutar Eliminacion Gausseana con pivoteo total correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.doolittle = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        let result = gestMetodosDirectos.factorizacionDoolittle(matrix, req.body.b);

        res.status(200).json({
            message: "Se logro ejecutar LU Doolittle correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.crout = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        let result = gestMetodosDirectos.factorizacionCrout(matrix, req.body.b);

        res.status(200).json({
            message: "Se logro ejecutar LU Crout correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.cholesky = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        let result = gestMetodosDirectos.factorizacionCholesky(matrix, req.body.b);

        res.status(200).json({
            message: "Se logro ejecutar LU Cholesky correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.jacobi = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        console.log(matrix);
        let result = gestMetodosIterativos.jacobi(matrix, req.body.b, req.body.x0, req.body.iter, req.body.tole);

        res.status(200).json({
            message: "Se logro ejecutar Jacobi correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.gauss = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        console.log(matrix);
        let result = gestMetodosIterativos.gaussSeidel(matrix, req.body.b, req.body.x0, req.body.iter, req.body.tole);

        res.status(200).json({
            message: "Se logro ejecutar Gauss-seidel correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.jacobiRelajado = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        console.log(matrix);
        let result = gestMetodosIterativos.jacobiRelajado(matrix, req.body.b, req.body.x0, req.body.iter, req.body.tole, req.body.alpha);

        res.status(200).json({
            message: "Se logro ejecutar Jacobi relajado correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}

exports.gaussRelajado = (req, res, next) => {
    let fetchedUser;

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            res.status(404).json({
                message: "Fallo la authentificacion"
            });
        }
        fetchedUser = user;
        let sistemas = req.body.sistemaSend;
        let auxSistema = [];
        sistemas = JSON.parse(sistemas);
        for(var index in sistemas){
            auxSistema.push(sistemas[index]);
        }
        auxSistema.forEach(e => {
            for (let index = 0; index < e.length; index++) {
                e[index] = parseFloat(e[index]);
                
            }
        });

        const matrix = math.matrix(auxSistema);
        console.log(matrix);
        let result = gestMetodosIterativos.gaussSeidelRelajado(matrix, req.body.b, req.body.x0, req.body.iter, req.body.tole, req.body.alpha);

        res.status(200).json({
            message: "Se logro ejecutar Gauss-seidel relajado correctamente", 
            results: result
        });

    }).catch(err => {
        res.status(404).json({
            err: err
        });
    });
}