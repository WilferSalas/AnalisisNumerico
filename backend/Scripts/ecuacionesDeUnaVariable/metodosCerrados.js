const gestMetodosC = {};
const math = require('mathjs')

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

gestMetodosC.biseccion = function(iter, tole, x1, x2, funcUser){
    const parser = math.parser();
    parser.eval(funcUser);
    let data = {
        n: [],
        xm: [], 
        fxm: [], 
        errorAb: [],
        errorRel: [], 
        message : ""
    };
    let xx1 = parseFloat(x1);
    let xx2 = parseFloat(x2);

    let cont = 0;
    let itera = parseInt(iter);
    let toler = parseFloat(tole);
    let errorAbs = toler + 1;
    let eval1 = parser.eval('f(' + x1 + ')');

    if(eval1 != 0){

        let eval2 = parser.eval('f(' + x2 + ')');
        if(eval2 != 0){
            if(!(math.multiply(eval1, eval2) > 0)){

                let xm = math.divide(math.add(math.bignumber(x1),math.bignumber(x2)),2 );
                let fxm = parser.eval('f(' + xm + ')');
                cont = cont + 1;
                let errorRel = math.bignumber(math.divide(errorAbs, xm));

                data.n.push(cont);
                data.xm.push(xm);
                data.fxm.push(fxm);
                data.errorAb.push(errorAbs);
                data.errorRel.push(errorRel);

                while((math.multiply(eval1, eval2) < 0) && (parseFloat(fxm) != 0) && (cont <= itera) && (errorAbs > toler)){
                    if((math.multiply(eval1, fxm) < 0)){
                       xx2 = xm;
                       eval2 = parser.eval('f(' + xx2 + ')');
                    } else{
                       xx1 = xm;
                       eval1 = parser.eval('f(' + xx1 + ')');
                   }
                   let aux = xm;
                   xm = math.divide(math.add(math.bignumber(xx1),math.bignumber(xx2)),2 );
                   fxm = parser.eval('f(' + xm + ')');
                   cont = cont + 1 ;
                   errorAbs = math.abs(math.subtract(math.bignumber(xm), math.bignumber(aux)));
                   errorRel = math.bignumber(math.divide(math.bignumber(errorAbs), aux));
                   
                   data.n.push(cont);
                   data.xm.push(xm);
                   data.fxm.push(fxm);
                   data.errorAb.push(errorAbs);
                   data.errorRel.push(errorRel);
                }

                if(parseFloat(fxm) == 0){
                    data.message = "Se encontro la raiz con xm: " +  xm;
                }else if(errorAbs < toler){

                    data.message = "Se encontro una raiz con xm: " + xm + " con un error de " + errorAbs;

                }else if(cont > itera){
                    data.message = "Se llegaron al maximo de iteraciones";
                }else{
                    data.message = "Hubo un error en la salida" ;
                }

            }else{
                data = {
                    message: "El intervalo no contiene una raiz"
                }
            }

        }else{
            data = {
                message : "Se encontro la raiz con x: " + x2 
            }
        }
    }else{
        data = {
            message : "Se encontro la raiz con x: " + x1 
        }
    }

    return data;

}

gestMetodosC.reglaFalsa = function(iter, tole, x1, x2, funcUser){
    const parser = math.parser();
    parser.eval(funcUser);
    let data = {
        n: [],
        xm: [], 
        fxm: [], 
        errorAb: [],
        errorRel: [], 
        message : ""
    };
    let xx1 = parseFloat(x1);
    let xx2 = parseFloat(x2);

    let cont = 0;
    let itera = parseInt(iter);
    let toler = parseFloat(tole);
    let errorAbs = toler + 1;
    let eval1 = parser.eval('f(' + x1 + ')');

    if(eval1 != 0){
        
        let eval2 = parser.eval('f(' + x2 + ')');
        if(eval2 != 0){
            if(!(math.multiply(eval1, eval2) > 0)){
                if((math.subtract(eval1,eval2) != 0)){
                let divide = math.subtract(eval1,eval2); 
                  
                    
                let xm = math.subtract(xx2,math.divide(math.multiply(eval2,math.subtract(xx1,xx2)),divide));
                
                console.log("Chek1");
                let fxm = parser.eval('f(' + xm + ')');
                cont = cont + 1;
                let errorRel = math.bignumber(math.divide(math.bignumber(errorAbs), xm));

                data.n.push(cont);
                data.xm.push(xm);
                data.fxm.push(fxm);
                data.errorAb.push(errorAbs);
                data.errorRel.push(errorRel);

                while((math.multiply(eval1, eval2) < 0) && (parseFloat(fxm) != 0) && (cont <= itera) && (errorAbs > toler) && (math.subtract(eval1,eval2) != 0)){
                    if((math.multiply(eval1, fxm) < 0)){
                       xx2 = xm;
                       eval2 = parser.eval('f(' + xx2 + ')');
                    } else{
                       xx1 = xm;
                       eval1 = parser.eval('f(' + xx1 + ')');
                   }
                   divide =  math.subtract(eval1,eval2);
                   let aux = xm; 
                   xm = math.subtract(xx2,math.divide(math.multiply(eval2,math.subtract(xx1,xx2)),divide));
                   fxm = parser.eval('f(' + xm + ')');
                   cont = cont + 1 ;
                   errorAbs = math.abs(math.subtract(math.bignumber(xm), math.bignumber(aux)));
                   errorRel = math.bignumber(math.divide(math.bignumber(errorAbs), aux));
                   
                   data.n.push(cont);
                   data.xm.push(xm);
                   data.fxm.push(fxm);
                   data.errorAb.push(errorAbs);
                   data.errorRel.push(errorRel);
                }

                if(parseFloat(fxm) == 0){
                    data.message = "Se encontro la raiz con xm: " +  xm;
                }else if(errorAbs < toler){

                    data.message = "Se encontro una raiz con xm: " + xm + " con un error de " + errorAbs;

                }else if(cont > itera){
                    data.message = "Se llegaron al maximo de iteraciones";
                }else if((math.substract(eval1,eval2) != 0)){
                    data.message = "Hubo una division por 0" ;
                }else{
                    data.message = "Hubo un problema en la salida del mensaje";
                }

            }else{
                data.message = "No se puede ejecutar por una division por 0"
            }

            }else{
                data = {
                    message: "El intervalo no contiene una raiz"
                }
            }

        }else{
            data = {
                message : "Se encontro la raiz con x: " + x2 
            }
        }
    }else{
        data = {
            message : "Se encontro la raiz con x: " + x1 
        }
    }

    return data;

}

module.exports = gestMetodosC;
