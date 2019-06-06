const math = require('mathjs');
const gestPolInt = require('../Scripts/interpolacion/polinomiosInterpolantes');

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

exports.newton = (req, res, next) => {
try{
let aux = gestPolInt.newton(req.body.x, req.body.y,req.body.valor);
res.status(200).json({
    result: aux 
})
}catch{
res.send("error");
}
}

exports.lagrange = (req, res, next) => {
    try{
    let aux = gestPolInt.lagrange(req.body.x, req.body.y,req.body.valor);
    res.status(200).json({
        result: aux
    })
    }catch{
    res.send("hou");
    }
    }