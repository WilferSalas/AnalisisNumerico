const express = require("express");
const bodyParser = require("body-parser");
const router = express();
const ecUnaVarController = require("../controllers/ecuacionesDeUnaVariable");

router.post("/biseccion", ecUnaVarController.biseccion);
router.post("/reglaFalsa", ecUnaVarController.reglaFalsa);
router.post("/puntoFijo", ecUnaVarController.puntoFijo);
router.post("/newton", ecUnaVarController.newton);
router.post("/secante", ecUnaVarController.secante);
router.post("/raicesMultiples", ecUnaVarController.raicesMultiples);
router.post("/busquedas", ecUnaVarController.busquedas);

module.exports = router