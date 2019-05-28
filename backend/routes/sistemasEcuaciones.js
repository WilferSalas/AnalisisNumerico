const express = require("express");
const bodyParser = require("body-parser");
const router = express();
const sistemasEcuaciones = require("../controllers/sistemasEcuaciones");

router.post("/eliminGaussSimple", sistemasEcuaciones.eliminacionGausseana);
router.post("/eliminGaussPP", sistemasEcuaciones.eliminacionGausseanaConPivoteoParcial);
router.post("/luDoolittle", sistemasEcuaciones.doolittle);

module.exports = router