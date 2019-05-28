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
      k: [],
      logEjecucionSistemas: [],
      xn: []
    };
    console.log("Imprimir marcas");
    console.log(aux[0]);

    data.k.push(0);
    data.logEjecucionSistemas.push(matrix);

    for (let k = 0; k < aux[0] - 1 ; k++) {

      data.k.push(k+1);
      console.log(k+1);
      for (let i = k+1; i < aux[0]; i++) {
        
        multiplicador = math.divide(math.subset(matrix, math.index(i, k)),math.subset(matrix, math.index(k, k)));

        for (let j = k; j < aux[1]; j++) {
          
          let aux2 = math.multiply(multiplicador,math.subset(matrix,math.index(k,j)));
          let aux3 = math.subset(matrix, math.index(i,j));
          matrix = math.subset(matrix, math.index(i,j), math.subtract(aux3,aux2));
        }

      }
            data.logEjecucionSistemas.push(matrix);

    }
    let auxn = math.divide(math.subset(matrix, math.index(aux[0]-1,aux[0])),math.subset(matrix, math.index(aux[0]-1, aux[0]-1)));
    let xn = [];
    for(let omega = 0; omega < aux[0]; omega++){
      xn.push(0);
    }
    xn[aux[0]-1] = auxn;
    for (let i = aux[0]; i > 0; i--) {
      let sumatoria = 0;
      for (let p = i+1; p <= aux[0]; p++) {
        sumatoria = math.add(sumatoria, math.multiply(math.subset(matrix, math.index(i-1,p-1)),xn[p-1]));
        xn[i-1] = math.divide(math.subtract(math.subset(matrix, math.index(i-1,aux[0])),sumatoria),math.subset(matrix, math.index(i-1,i-1)));
      }
      
    }
    data.xn = xn;

    return data;

}

module.exports = gestMetodosIterativos;