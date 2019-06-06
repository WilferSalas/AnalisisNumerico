const math = require('mathjs');
const gestPolInt = require('../Scripts/interpolacion/polinomiosInterpolantes');

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

exports.newton = (req, res, next) => {
try{
gestPolInt.newton(req.body.x, req.body.y,req.body.valor);
res.send("hey");
}catch{
res.send("hou");
}
}