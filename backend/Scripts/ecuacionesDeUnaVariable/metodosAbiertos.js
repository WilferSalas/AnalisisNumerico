const gestMetodosAbiertos = {};
const math = require('mathjs')

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

gestMetodosAbiertos.busquedasIncrementales = function(iter, x1, delta, funcUser){
    const parser = math.parser();
    parser.eval(funcUser);
    let data = {
        n: [],
        xm: [], 
        f1timesf2: []
    };
    console.log("Entra");
    let cont = 0;
    let itera = parseInt(iter);
    let eval1 = parser.eval('f(' + x1 + ')');
    cont = cont + 1;
    let xm = math.add(x1,delta);
    let eval = parser.eval('f(' + x1 + ')');
    let eval2 = math.multiply(eval1, eval);
    data.n.push(cont);
    data.xm.push(xm);
    data.f1timesf2.push(eval2);
    while(eval2 > 0 && cont <= itera){

        x1 = xm;
        eval1 = eval;
        xm = math.add(xm,delta);
        eval = parser.eval('f(' + xm + ')');
        eval2 = math.multiply(eval1, eval);
        cont = cont +1;
        data.n.push(cont);
        data.xm.push(xm);
        data.f1timesf2.push(eval2);
    } 
    if(eval2 < 0){
        console.log("Se encontro una raiz en intervalo [" + x1 +","+ xm + "]");
        return data;
    }else{
        console.log("Se llego al maximo de iteraciones");
        return data;
    }

}

gestMetodosAbiertos.puntoFijo = function(iter, tole, x1, funcUser, func2User){
    const parser = math.parser();
    parser.eval(funcUser);
    parser.eval(func2User);
    let data = {
        n: [],
        xm: [], 
        fxm: [], 
        errorAb: [],
        errorRel: [], 
        message : ""
    };

    let cont = 0;
    let itera = parseInt(iter);
    let toler = parseFloat(tole);
    let errorAbs = toler + 1;
    let eval1 = parser.eval('f(' + x1 + ')');

    if(eval1 != 0){
                let xm = parser.eval('g(' + x1 + ')');
                let fxm = parser.eval('f(' + xm + ')');
                cont = cont + 1;
                let errorRel = math.bignumber(math.divide(errorAbs, xm));

                data.n.push(cont);
                data.xm.push(xm);
                data.fxm.push(fxm);
                data.errorAb.push(errorAbs);
                data.errorRel.push(errorRel);

                while((parseFloat(fxm) != 0) && (cont <= itera) && (errorAbs > toler)){
                   let aux = xm;
                   xm = parser.eval('g(' + aux + ')');
                   fxm = parser.eval('f(' + xm + ')');
                   cont = cont + 1 ;
                   errorAbs = math.abs(math.subtract(math.bignumber(xm), math.bignumber(aux)));
                   errorRel = math.bignumber(math.divide(errorAbs, aux));
                   
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
            message : "Se encontro la raiz con x: " + x1 
        }
    }

    return data;

}
//Func2 es para la derivada de F
gestMetodosAbiertos.newton = function(iter, tole, x1, funcUser, func2User){
    const parser = math.parser();
    parser.eval(funcUser);
    parser.eval(func2User);
    let data = {
        n: [],
        xm: [], 
        fxm: [],
        fp: [], 
        errorAb: [],
        errorRel: [], 
        message : ""
    };

    let cont = 0;
    let itera = parseInt(iter);
    let toler = parseFloat(tole);
    let errorAbs = toler + 1;
    let eval1 = parser.eval('f(' + x1 + ')');

    if(eval1 != 0){

        if((parser.eval('fp(' + x1 + ')') != 0 )){
                let fp = parser.eval('fp(' + x1 + ')');
                let xm = math.subtract(x1, math.divide(eval1, fp));
                let fxm = parser.eval('f(' + xm + ')');
                cont = cont + 1;
                let errorRel = math.bignumber(math.divide(errorAbs, xm));

                data.n.push(cont);
                data.xm.push(xm);
                data.fxm.push(fxm);
                data.fp.push(fp);
                data.errorAb.push(errorAbs);
                data.errorRel.push(errorRel);
                console.log("pase1");
                while((parseFloat(fxm) != 0) && (cont <= itera) && (errorAbs > toler) && (fp != 0 )){
                    let aux = xm;
                   xm = math.subtract(xm, math.divide(fxm, fp));
                   fxm = parser.eval('f(' + xm + ')');
                   fp = parser.eval('fp(' + xm + ')');
                   cont = cont + 1 ;
                   errorAbs = math.abs(math.subtract(math.bignumber(xm), math.bignumber(aux)));
                   errorRel = math.bignumber(math.divide(errorAbs, aux));
                   console.log("pase3")
                   data.n.push(cont);
                   data.xm.push(xm);
                   data.fxm.push(fxm);
                   data.fp.push(fp);
                   data.errorAb.push(errorAbs);
                   data.errorRel.push(errorRel);
                   
                }

                if(parseFloat(fxm) == 0){
                    data.message = "Se encontro la raiz con xm: " +  xm;
                }else if(errorAbs < toler){

                    data.message = "Se encontro una raiz con xm: " + xm + " con un error de " + errorAbs;

                }else if(cont > itera){
                    data.message = "Se llegaron al maximo de iteraciones";
                }else if(fp == 0){
                    data.message = "Se salio por division por 0";
                }
                else{
                    data.message = "Hubo un error en la salida" ;
                }

            }else{
                data.message = "Hay una derivada por 0 y no se puede iniciar la ejecucion";
            }
    }else{
        daata.message = "Se encontro la raiz con x: " + x1;
    }

    return data;

}

gestMetodosAbiertos.secante = function(iter, tole, x1, x2, funcUser){
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
                if((math.subtract(eval2,eval1) != 0)){
                let divide = math.subtract(eval2,eval1); 
                  
                    
                let xm = math.subtract(xx2,math.divide(math.multiply(eval2,math.subtract(xx2,xx1)),divide));
                
                console.log("Chek1");
                let fxm = parser.eval('f(' + xm + ')');
                cont = cont + 1;
                let errorRel = math.bignumber(math.divide(errorAbs, xm));

                data.n.push(cont);
                data.xm.push(xm);
                data.fxm.push(fxm);
                data.errorAb.push(errorAbs);
                data.errorRel.push(errorRel);

                while((parseFloat(fxm) != 0) && (cont <= itera) && (errorAbs > toler) && (math.subtract(eval2,eval1) != 0)){
                    
                   xx1 = xx2;
                   xx2 = xm;
                   eval1 =  parser.eval('f(' + xx1 + ')');
                   eval2 =  parser.eval('f(' + xx2 + ')');
                   divide =  math.subtract(eval2,eval1);
                   let aux = xm; 
                   xm = math.subtract(xx2,math.divide(math.multiply(eval2,math.subtract(xx2,xx1)),divide));
                   fxm = parser.eval('f(' + xm + ')');
                   cont = cont + 1 ;
                   errorAbs = math.abs(math.subtract(math.bignumber(xm), math.bignumber(aux)));
                   errorRel = math.bignumber(math.divide(errorAbs, xm));
                   
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

//Func2 es para la derivada de F y func3 es para la segunda derivada.
gestMetodosAbiertos.raicesMultiples = function(iter, tole, x1, funcUser, func2User, func3User){
    const parser = math.parser();
    parser.eval(funcUser);
    parser.eval(func2User);
    parser.eval(func3User);
    let data = {
        n: [],
        xm: [], 
        fxm: [],
        fp: [], 
        errorAb: [],
        errorRel: [], 
        message : ""
    };

    let cont = 0;
    let itera = parseInt(iter);
    let toler = parseFloat(tole);
    let errorAbs = toler + 1;
    let eval1 = parser.eval('f(' + x1 + ')');
    let xx1 = parseFloat(x1);
 
    if(eval1 != 0){
        if((math.subtract(math.pow(parser.eval('fp('+x1+')'),2),math.multiply(eval1,parser.eval('fpp('+x1+')'))) != 0 )){
                let fp = parser.eval('fp(' + x1 + ')');
                let fpp = parser.eval('fpp(' + x1 + ')');
                let divide = math.subtract(math.pow(parser.eval('fp('+x1+')'),2),math.multiply(eval1,parser.eval('fpp('+x1+')')));
                let xm = math.subtract(x1, math.divide(math.multiply(eval1,fp),divide));
                let fxm = parser.eval('f(' + xm + ')');
                xx1 = xm;
                eval1 = parser.eval('f(' + xx1 + ')');
                cont = cont + 1;
                let errorRel = math.bignumber(math.divide(errorAbs, xm));
                data.n.push(cont);
                data.xm.push(xm);
                data.fxm.push(fxm);
                data.fp.push(fp);
                data.errorAb.push(errorAbs);
                data.errorRel.push(errorRel);
                while((parseFloat(fxm) != 0) && (cont <= itera) && (errorAbs > toler) && (fp != 0 )){
                   let aux = xm;
                   xm = math.subtract(xx1, math.divide(math.multiply(eval1,fp),divide));;
                   fxm = parser.eval('f(' + xm + ')');
                   fp = parser.eval('fp(' + xm + ')');
                   fpp = parser.eval('fpp(' + xm + ')');
                   xx1 = xm;
                   eval1 = parser.eval('f(' + xx1 + ')');
                   cont = cont + 1 ;
                   errorAbs = math.abs(math.subtract(math.bignumber(xm), math.bignumber(aux)));
                   errorRel = math.bignumber(math.divide(errorAbs, aux));
                   data.n.push(cont);
                   data.xm.push(xm);
                   data.fxm.push(fxm);
                   data.fp.push(fp);
                   data.errorAb.push(errorAbs);
                   data.errorRel.push(errorRel);
                   
                }

                if(parseFloat(fxm) == 0){
                    data.message = "Se encontro la raiz con xm: " +  xm;
                }else if(errorAbs < toler){

                    data.message = "Se encontro una raiz con xm: " + xm + " con un error de " + errorAbs;

                }else if(cont > itera){
                    data.message = "Se llegaron al maximo de iteraciones";
                }else if(fp == 0){
                    data.message = "Se salio por division por 0";
                }
                else{
                    data.message = "Hubo un error en la salida" ;
                }

            }else{
                data = {
                    message: "Hay una derivada por 0 y no se puede iniciar la ejecucion"
                }
            }
    }else{
        data = {
            message : "Se encontro la raiz con x: " + x1 
        }
    }

    return data;

}
module.exports = gestMetodosAbiertos;