const express = require("express");
const bodyParser = require("body-parser");
const router = express();

const interpolacion = require("../controllers/interpolacion.controller");

router.post("/interpolacion", interpolacion.newton);

module.exports = router;