const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//const BaseDatos = "mongodb://localhost:27017/PerseoMuestra";

mongoose.connect("mongodb+srv://" 
    + process.env.API_MONGOATLAS_USER
    +":" 
    + process.env.API_MONGOATLAS_KEY
    + "@clustervillainnovadora-ttwgu.mongodb.net/metodos",{ useNewUrlParser: true })
    .then(() => {
        console.log('Conectado a Base de Datos')
        //myFunc();
    })
    .catch(() => {
        console.log('Error al conectarse a Base de Datos')
    });
module.exports = mongoose; 