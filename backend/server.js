const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const indexRoutes = require('./routes/user');
const { mongoose } = require('./database');
const dotenv = require('dotenv');

const ecuUnaVar = require('./routes/ecUnaVar');
const user = require('./routes/user');
const sisEcu = require('./routes/sistemasEcuaciones');
const inter = require('./routes/interpolacion');

dotenv.config();
  
//Configuraciones del Servidor
app.set('port', process.env.PORT);

//Middleware para servir archivos estaticos
app.use(cors());

//Middleware bodyparser y morgan
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: false}));

//Corsheaders
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

//Routes
app.use("/api/user", user);
app.use("/api/ecuUnaVar", ecuUnaVar);
app.use("/api/sisEcu", sisEcu);
app.use("/api/interpolacion", inter);

//Diciendole a la app el puerto donde va a escuchar.
app.listen(app.get('port'), () =>{

    console.log('Servidor en puerto', app.get('port'))

});