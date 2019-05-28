const math = require('mathjs')

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

module.exports = (req, res, next) => {

    try{

        const parser = math.parser();
        parser.eval(req.body.funcion);

        const nombreFuncion = req.body.funcion.split("(")[0];
        const a = parser.eval(nombreFuncion + '(' + '1' + ')')
        console.log("La funcion que se quiere añadir es: " + req.body.funcion);
        next()

    }catch(error){

        res.status(401).json({
            message: "No se pudo verificar la funcion", 
            err: error
        });

    }

}
