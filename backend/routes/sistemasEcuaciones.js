const express = require("express");
const bodyParser = require("body-parser");
const router = express();
const sistemasEcuaciones = require("../controllers/sistemasEcuaciones");

router.post("/eliminGaussSimple", sistemasEcuaciones.eliminacionGausseana);
router.post("/eliminGaussPP", sistemasEcuaciones.eliminacionGausseanaConPivoteoParcial);
router.post("/luDoolittle", sistemasEcuaciones.doolittle);
router.post("/luCrout", sistemasEcuaciones.crout);
router.post("/luCholesky", sistemasEcuaciones.cholesky);

module.exports = router