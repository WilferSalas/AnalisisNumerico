const gestMetodosIterativos = {};
const math = require('mathjs')

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

  gestMetodosIterativos.jacobi = function(matrix, b, x0, iteraciones, tolerancia){
    let aux = matrix.size();
    let data = {
      n: [],
      xn: [], 
      error: []
    };
    let xn = [];
    b = JSON.parse(b);
    x0 = JSON.parse(x0);
    try {
    for(let omega = 0; omega < aux[0]; omega++){
      xn.push(0);
    }
    let contador = 1;
    let error = tolerancia + 1;
    data.n.push(0);
    data.xn.push(xn);
    data.error.push(error);
    console.log("HOL");
    while(error > tolerancia && contador < iteraciones){
        error = 0;
        for(let i = 1; i< aux[0] +1; i++){
            let suma = 0;
            for(let j=1; j < aux[0] +1 ; j++){
                if(i != j){
                    suma = math.add(math.multiply(math.subset(matrix, math.index(i-1, j-1)), parseFloat(x0[j-1])),suma);
                }
            }
            xn[i-1] = math.divide(math.subtract(parseFloat(b[i-1]), suma),math.subset(matrix,math.index(i-1, i-1)));
            console.log(xn[i-1]);
        }

        let mayor = 0;

        for(let i = 1; i< aux[0]; i++){
            if(math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1])) > mayor){
                mayor = math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1]));
            }
        }
        error = mayor;
        for(let i = 1; i< aux[0]+1 ; i++){
            x0[i-1] = parseFloat(xn[i-1]);
        }
        data.n.push(contador);
        data.xn.push(xn);
        data.error.push(error);
        contador = contador + 1;
        
    }

    if(error < tolerancia){
        console.log("Se logro una aproximacion con una tolerancia de" + error.toString())
    }else{
        console.log("Fracaso por iteraciones");
    }

    return data;
} catch (error) {
 console.log(error);       
}

}

gestMetodosIterativos.jacobiRelajado = function(matrix, b, x0, iteraciones, tolerancia, alpha){
    let aux = matrix.size();
    let data = {
      n: [],
      xn: [], 
      error: []
    };
    let xn = [];
    b = JSON.parse(b);
    x0 = JSON.parse(x0);
    try {
    for(let omega = 0; omega < aux[0]; omega++){
      xn.push(0);
    }
    let contador = 1;
    let error = tolerancia + 1;
    data.n.push(0);
    data.xn.push(xn);
    data.error.push(error);
    console.log("HOL");
    while(error > tolerancia && contador < iteraciones){
        error = 0;
        for(let i = 1; i< aux[0] +1; i++){
            let suma = 0;
            for(let j=1; j < aux[0] +1 ; j++){
                if(i != j){
                    suma = math.add(math.multiply(math.subset(matrix, math.index(i-1, j-1)), parseFloat(x0[j-1])),suma);
                }
            }
            xn[i-1] = math.divide(math.subtract(parseFloat(b[i-1]), suma),math.subset(matrix,math.index(i-1, i-1)));
            xn[i-1] = math.multiply(parseFloat(alpha),math.add(parseFloat(xn[i-1]),math.subtract(1,parseFloat(alpha))),parseFloat(x0[i-1]));
            console.log(xn[i-1]);
        }

        let mayor = 0;

        for(let i = 1; i< aux[0]; i++){
            if(math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1])) > mayor){
                mayor = math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1]));
            }
        }
        error = mayor;
        for(let i = 1; i< aux[0]+1 ; i++){
            x0[i-1] = parseFloat(xn[i-1]);
        }
        data.n.push(contador);
        data.xn.push(xn);
        data.error.push(error);
        contador = contador + 1;
        
    }

    if(error < tolerancia){
        console.log("Se logro una aproximacion con una tolerancia de" + error.toString())
    }else{
        console.log("Fracaso por iteraciones");
    }

    return data;
} catch (error) {
 console.log(error);       
}

}


gestMetodosIterativos.gaussSeidel = function(matrix, b, x0, iteraciones, tolerancia){
    let aux = matrix.size();
    let data = {
      n: [],
      xn: [], 
      error: []
    };
    let xn = [];
    b = JSON.parse(b);
    x0 = JSON.parse(x0);
    try {
    for(let omega = 0; omega < aux[0]; omega++){
      xn.push(0);
    }
    let contador = 1;
    let error = tolerancia + 1;
    data.n.push(0);
    data.xn.push(xn);
    data.error.push(error);
    console.log("HOL");
    while(error > tolerancia && contador < iteraciones){
        error = 0;
        
        for(let i = 1; i<aux[0] +1 ; i++){
            xn[i-1] = parseFloat(x0[i-1]);
        }

        for(let i = 1; i< aux[0] +1; i++){
            let suma = 0;
            for(let j=1; j < aux[0] +1 ; j++){
                if(i != j){
                    suma = math.add(math.multiply(math.subset(matrix, math.index(i-1, j-1)), parseFloat(xn[j-1])),suma);
                }
            }
            xn[i-1] = math.divide(math.subtract(parseFloat(b[i-1]), suma),math.subset(matrix,math.index(i-1, i-1)));
            console.log(xn[i-1]);
        }

        let mayor = 0;

        for(let i = 1; i< aux[0]; i++){
            if(math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1])) > mayor){
                mayor = math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1]));
            }
        }
        error = mayor;
        for(let i = 1; i< aux[0]+1 ; i++){
            x0[i-1] = parseFloat(xn[i-1]);
        }
        data.n.push(contador);
        data.xn.push(xn);
        data.error.push(error);
        contador = contador + 1;
        
    }

    if(error < tolerancia){
        console.log("Se logro una aproximacion con una tolerancia de" + error.toString())
    }else{
        console.log("Fracaso por iteraciones");
    }

    return data;
} catch (error) {
 console.log(error);       
}

}

gestMetodosIterativos.gaussSeidelRelajado = function(matrix, b, x0, iteraciones, tolerancia, alpha){
    let aux = matrix.size();
    let data = {
      n: [],
      xn: [], 
      error: []
    };
    let xn = [];
    b = JSON.parse(b);
    x0 = JSON.parse(x0);
    try {
    for(let omega = 0; omega < aux[0]; omega++){
      xn.push(0);
    }
    let contador = 1;
    let error = tolerancia + 1;
    data.n.push(0);
    data.xn.push(xn);
    data.error.push(error);
    console.log("HOL");
    while(error > tolerancia && contador < iteraciones){
        error = 0;
        
        for(let i = 1; i<aux[0] +1 ; i++){
            xn[i-1] = parseFloat(x0[i-1]);
        }

        for(let i = 1; i< aux[0] +1; i++){
            let suma = 0;
            for(let j=1; j < aux[0] +1 ; j++){
                if(i != j){
                    suma = math.add(math.multiply(math.subset(matrix, math.index(i-1, j-1)), parseFloat(xn[j-1])),suma);
                }
            }
            xn[i-1] = math.divide(math.subtract(parseFloat(b[i-1]), suma),math.subset(matrix,math.index(i-1, i-1)));
            xn[i-1] = math.multiply(parseFloat(alpha),math.add(parseFloat(xn[i-1]),math.subtract(1,parseFloat(alpha))),parseFloat(x0[i-1]));
            console.log(xn[i-1]);
        }

        let mayor = 0;

        for(let i = 1; i< aux[0]; i++){
            if(math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1])) > mayor){
                mayor = math.abs(parseFloat(xn[i-1])- parseFloat(x0[i-1]));
            }
        }
        error = mayor;
        for(let i = 1; i< aux[0]+1 ; i++){
            x0[i-1] = parseFloat(xn[i-1]);
        }
        data.n.push(contador);
        data.xn.push(xn);
        data.error.push(error);
        contador = contador + 1;
        
    }

    if(error < tolerancia){
        console.log("Se logro una aproximacion con una tolerancia de" + error.toString())
    }else{
        console.log("Fracaso por iteraciones");
    }

    return data;
} catch (error) {
 console.log(error);       
}

}

module.exports = gestMetodosIterativos;