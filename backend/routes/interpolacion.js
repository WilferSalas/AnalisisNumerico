const express = require("express");
const bodyParser = require("body-parser");
const router = express();

const interpolacion = require("../controllers/interpolacion.controller");

router.post("/newton", interpolacion.newton);
router.post("/lagrange", interpolacion.lagrange);

module.exports = router;