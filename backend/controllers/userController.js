const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.createUser = (req, res , next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        
        const user = new User({
          nombre: req.body.nombre,  
          email: req.body.email,
          password: hash
        });
        user
          .save()
          .then(result => {
            res.status(201).json({
              message: "User created!",
              result: result
            });
          })
          .catch(err => {
            res.status(500).json({
              message: "Invalid authentication credentials!"
            });
          });
      });
}

exports.addFunction = (req, res, next) => {
  let fetchedUserFunctions;
    User.findOne({ email: req.body.email })
      .then(user => {

        fetchedUserFunctions = user.funciones;
        fetchedUserFunctions.push(req.body.funcion);
        user.funciones = fetchedUserFunctions;
        user.save().then(resutl => {
          res.status(200).json({
            message: "Se logro añadir la funcion"
          });
        }).catch(err => {
          res.status(404).json({
            message: "Hubo un problema al añadir la funcion", 
            error: err
          });
        });

      }).catch(err => {
        res.status(404).json({
          message: "Hubo un error al encontrar al usuario", 
          error: err
        });
      });
}

exports.addSistem = (req, res, next) => {
  let fetchedUserSistems;
    User.findOne({ email: req.body.email })
      .then(user => {

        fetchedUserSistems = user.sistemas;
        let auxSistem = req.body.sistema;
        fetchedUserSistems.push(auxSistem);
        user.sistemas = fetchedUserSistems;
        user.save().then(result => {
          res.status(200).json({
            message: "Se logro añadir la el sistema de ecuaciones", 
            res: result
          });
        }).catch(err => {
          res.status(404).json({
            message: "Hubo un problema al añadir el sistema de ecuaciones", 
            error: err
          });
        });

      }).catch(err => {
        res.status(404).json({
          message: "Hubo un error al encontrar al usuario", 
          error: err
        });
      });
}

exports.getFunctions = (req, res, next) => {
User.findOne({email: req.body.email})
.then(user => {
  res.status(200).json({
    funciones: user.funciones
  });
})
.catch(err => {
  res.status(404).json({
    message:"Hubo un problema al encontrar el usuario"
  });
});
}

exports.userLogin = (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        res.status(200).json({
          userId: fetchedUser._id,
          userNombre: fetchedUser.nombre,
          userAsData: fetchedUser
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: "Invalid authentication credentials!"
        });
      });
  }