const gestMetodosDirectos = {};
const math = require('mathjs')

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

  //Tipo 0: Simple,Tipo 1: Pivoteo parcial, Tipo 2: Pivoteo Total
gestMetodosDirectos.eliminacionGausseana= function(matrix){
    let aux = matrix.size();
    let data = {
      k: [],
      logEjecucionSistemas: [],
      xn: []
    };
    let ab = math.zeros(aux[0],aux[1]);
    let aux1 = [];  
    let multiplicador;

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

gestMetodosDirectos.eliminacionGausseanaConPivoteoParcial= function(matrix){
  let aux = matrix.size();
  let data = {
    k: [],
    logEjecucionSistemas: [],
    xn: []
  };
  let ab = math.zeros(aux[0],aux[1]);
  let aux1 = [];  
  let multiplicador;

  data.k.push(0);
  data.logEjecucionSistemas.push(matrix);
  console.log(matrix);

  for (let k = 0; k < aux[0] - 1 ; k++) {

    data.k.push(k+1);
    console.log(k+1);
    console.log("-------------------------------------------------------");
    let auxForPiv = [];
    for (let y = k; y < aux[0]; y++) {
      auxForPiv.push(math.abs(math.subset(matrix, math.index(y,k))));
    }
      if(math.abs(math.subset(matrix, math.index(k,k))) == Math.max.apply(Math, auxForPiv)){
        console.log(math.subset(matrix, math.index(k,k)));
      }else{
        for (let p = k; p < aux[0]; p++) {
          if(math.abs(math.subset(matrix, math.index(p,k))) == Math.max.apply(Math, auxForPiv)){
           matrix =  matrix.swapRows(k,p);
          }
        }
      }
    for (let i = k+1; i < aux[0]; i++) {

      multiplicador = math.divide(math.subset(matrix, math.index(i, k)),math.subset(matrix, math.index(k, k)));
      console.log("Multiplicador: " + i.toString() + " " + k.toString() + " " + multiplicador.toString());
      console.log(multiplicador);
      for (let j = k; j < aux[1]; j++) {
        
        let aux2 = math.multiply(multiplicador,math.subset(matrix,math.index(k,j)));
        let aux3 = math.subset(matrix, math.index(i,j));
        matrix = math.subset(matrix, math.index(i,j), math.subtract(aux3,aux2));
      }
      
    }
          data.logEjecucionSistemas.push(matrix);
          console.log(matrix);
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
  console.log(xn);
  return data;

}

gestMetodosDirectos.eliminacionGausseanaConPivoteoTotal= function(matrix){
  let aux = matrix.size();
  let data = {
    k: [],
    logEjecucionSistemas: [],
    xn: []
  };
  let ab = math.zeros(aux[0],aux[1]);
  let aux1 = [];  
  let multiplicador;

  data.k.push(0);
  data.logEjecucionSistemas.push(matrix);
  console.log(matrix);

  for (let k = 0; k < aux[0] - 1 ; k++) {

    data.k.push(k+1);
    console.log(k+1);
    console.log("-------------------------------------------------------");
    let mayor = 0;
    let filaMayor = k-1;
    let columnaMayor = k-1;
    let marcas = [aux[0]];
    for(let r = k-1; r< aux[0]; r++){
      for(let s = k-1; s< aux[0]; s++){
        if(math.abs(math.subset(matrix,math.index(r,s)))){
          filaMayor = r;
          columnaMayor = s;
        }
      }
    }
    if(mayor == 0){
      console.log("El sistema no tiene solucion unica");
    }else{
      if(filaMayor != k-1){
        for(let i = 0; i< matrix[0].length ; i++){
          let aux = math.subset(matrix, math.index(k-1, i));
          matrix = math.subset(matrix, math.index(k-1, i), math.subset(matrix, math.index(filaMayor,i)));
          matrix = math.subset(matrix, math.index(filaMayor, i), aux);
        }
        console.log(matrix);
      }
    }
    if(columnaMayor != k-1){
      for(let i = 0; i< matrix[0].length; i++){
        let aux = math.subset(matrix, math.index(i, k-1));
        matrix = math.subset(matrix, math.index(i, k-1), math.subset(matrix, math.index(i,columnaMayor)));
        matrix = math.subset(matrix, math.index(i, columnaMayor), aux);
      }
      let aux2 =  marcas[columnaMayor];
      marcas[columnaMayor] = marcas[k-1];
      marcas[k-1] = aux2;
      console.log(matrix);
    }
    for (let i = k+1; i < aux[0]; i++) {

      multiplicador = math.divide(math.subset(matrix, math.index(i, k)),math.subset(matrix, math.index(k, k)));
      console.log("Multiplicador: " + i.toString() + " " + k.toString() + " " + multiplicador.toString());
      console.log(multiplicador);
      for (let j = k; j < aux[1]; j++) {
        
        let aux2 = math.multiply(multiplicador,math.subset(matrix,math.index(k,j)));
        let aux3 = math.subset(matrix, math.index(i,j));
        matrix = math.subset(matrix, math.index(i,j), math.subtract(aux3,aux2));
      }
      
    }
          data.logEjecucionSistemas.push(matrix);
          console.log(matrix);
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
  console.log(xn);
  return data;

}

gestMetodosDirectos.factorizacionDoolittle = function(matrix, b){
  let aux = matrix.size();
  let l = math.zeros(aux[0],aux[1]);
  let u =  math.zeros(aux[0],aux[1]);

  let data = {
    k: [],
    logEjecucionSistemas: [],
    xn: []
  };

for(let i=0;i < aux[0];i++){
    for(let j=0;j<aux[0];j++){
        if(i < j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 0);
        }else if(i > j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 0);
        }else if(i == j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 1);
        }
    }
}
console.log("Matriz A:");
data.k.push(0);
console.log(matrix);
console.log("Matriz L:");
console.log(l);
console.log("Matriz U:");
console.log(u);
data.logEjecucionSistemas.push(matrix);
data.logEjecucionSistemas.push(l);
data.logEjecucionSistemas.push(u);

for(let k = 1; k < aux[0] + 1; k++){
  console.log("-------------------------------------------------");
  console.log("Etapa "+k.toString());
  console.log("Encontrar la columna "+ k.toString() +" de L y la fila "+ k.toString() +" de U.");
  console.log("Matriz A");
  console.log(matrix);
  data.k.push(k);
  data.logEjecucionSistemas.push(matrix);
  let suma = 0;
  for(let p = 0; p < k-1; p++){
      console.log(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, k-1))));
      suma = math.add(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, k-1))),suma);
  }

  u = math.subset(u, math.index(k-1, k-1), math.divide(math.subtract(math.subset(matrix, math.index(k-1, k-1)),suma),math.subset(l, math.index(k-1, k-1))));
  for(let j = k+1; j < aux[0]+1; j++){
      suma = 0;
      for(let p = 0; p < k-1; p++){
        suma = math.add(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, j-1))), suma);
      }
      u = math.subset(u, math.index(k-1, j-1), math.divide(math.subtract(math.subset(matrix, math.index(k-1, j-1)),suma),math.subset(l, math.index(k-1, k-1))));
  }
  console.log("Matriz L");
  console.log(l);
  data.logEjecucionSistemas.push(l);
  for(let i = k+1; i < aux[0] +1; i++){
      suma = 0;
      for(let p = 0; p < k-1; p++){
          suma = math.add(math.multiply(math.subset(l, math.index(i-1,p)),math.subset(u, math.index(p, k-1))), suma);
      }
      l = math.subset(l, math.index(i-1, k-1), math.divide(math.subtract(math.subset(matrix, math.index(i-1, k-1)),suma),math.subset(u, math.index(k-1, k-1))));
  } 
  console.log("Matriz U");
  console.log(u);
  data.logEjecucionSistemas.push(u);
}

console.log("\nSustitución Progresiva Lz=b");
let n = aux[0];
let z = [];
b = JSON.parse(b);

for(let omega = 0; omega < aux[0]; omega++){
  z.push(0);
}
for(let i = 1; i < aux[0] + 1; i++){
  let suma2 = 0;
  for(let p = i-1; p > 0; p--){
  let a = math.subset(l, math.index(i-2, p));
  let c  = z[p-1];
  suma2 = math.add(math.multiply(math.subset(l, math.index(i-1, p-1)),z[p-1]), suma2);
  }
z[i-1] = math.divide(math.subtract(parseFloat(b[i-1]), parseFloat(suma2)),math.subset(l, math.index(i-1, i-1)));
}
console.log(z);

console.log("\nSustitución Regresiva Ux=z");
let m = aux[0];
let xn = [];
for(let omega = 0; omega < aux[0]; omega++){
  xn.push(0);
}

for(let i = m-1; i >= 0; i--){
    let suma = 0;
    for(let j = i+1; j < m; j++){
        suma = math.add(math.multiply(math.subset(u, math.index(i,j)),parseFloat(xn[j])), suma);
    }
    xn[i] = math.divide(math.subtract(z[i],suma),math.subset(u, math.index(i,i)));
    data.xn.push(xn[i]);
}
console.log(xn);


return data;
}

gestMetodosDirectos.factorizacionCrout = function(matrix, b){
  let aux = matrix.size();
  let l = math.zeros(aux[0],aux[1]);
  let u =  math.zeros(aux[0],aux[1]);

  let data = {
    k: [],
    logEjecucionSistemas: [],
    xn: []
  };

for(let i=0;i < aux[0];i++){
    for(let j=0;j<aux[0];j++){
        if(i < j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 0);
        }else if(i > j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 0);
        }else if(i == j){
          u = math.subset(u, math.index(i,j), 1);
          l = math.subset(l, math.index(i,j), 0);
        }
    }
}
console.log("Matriz A:");
data.k.push(0);
console.log(matrix);
console.log("Matriz L:");
console.log(l);
console.log("Matriz U:");
console.log(u);
data.logEjecucionSistemas.push(matrix);
data.logEjecucionSistemas.push(l);
data.logEjecucionSistemas.push(u);

for(let k = 1; k < aux[0] + 1; k++){
  console.log("-------------------------------------------------");
  console.log("Etapa "+k.toString());
  console.log("Encontrar la columna "+ k.toString() +" de L y la fila "+ k.toString() +" de U.");
  console.log("Matriz A");
  console.log(matrix);
  data.k.push(k);
  data.logEjecucionSistemas.push(matrix);
  let suma = 0;
  for(let p = 0; p < k-1; p++){
      console.log(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, k-1))));
      suma = math.add(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, k-1))),suma);
  }

  l = math.subset(l, math.index(k-1, k-1), math.subtract(math.subset(matrix, math.index(k-1, k-1)),suma));
  for(let i = k+1; i < aux[0]+1; i++){
      suma = 0;
      for(let p = 0; p < k-1; p++){
        suma = math.add(math.multiply(math.subset(l, math.index(i-1,p)),math.subset(u, math.index(p, k-1))), suma);
      }
      l = math.subset(l, math.index(i-1, k-1), math.divide(math.subtract(math.subset(matrix, math.index(i-1, k-1)),suma),math.subset(u, math.index(k-1, k-1))));
  }
  console.log("Matriz L");
  console.log(l);
  data.logEjecucionSistemas.push(l);
  for(let j = k+1; j < aux[0] +1; j++){
      suma = 0;
      for(let p = 0; p < k-1; p++){
          suma = math.add(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, j-1))), suma);
      }
      u = math.subset(u, math.index(k-1, j-1), math.divide(math.subtract(math.subset(matrix, math.index(k-1, j-1)),suma),math.subset(l, math.index(k-1, k-1))));
  } 
  console.log("Matriz U");
  console.log(u);
  data.logEjecucionSistemas.push(u);
}

console.log("\nSustitución Progresiva Lz=b");
let n = aux[0];
let z = [];
b = JSON.parse(b);

for(let omega = 0; omega < aux[0]; omega++){
  z.push(0);
}
for(let i = 1; i < aux[0] + 1; i++){
  let suma2 = 0;
  for(let p = i-1; p > 0; p--){
  let a = math.subset(l, math.index(i-2, p));
  let c  = z[p-1];
  suma2 = math.add(math.multiply(math.subset(l, math.index(i-1, p-1)),z[p-1]), suma2);
  }
z[i-1] = math.divide(math.subtract(parseFloat(b[i-1]), parseFloat(suma2)),math.subset(l, math.index(i-1, i-1)));
}
console.log(z);

console.log("\nSustitución Regresiva Ux=z");
let m = aux[0];
let xn = [];
for(let omega = 0; omega < aux[0]; omega++){
  xn.push(0);
}

for(let i = m-1; i >= 0; i--){
    let suma = 0;
    for(let j = i+1; j < m; j++){
        suma = math.add(math.multiply(math.subset(u, math.index(i,j)),parseFloat(xn[j])), suma);
    }
    xn[i] = math.divide(math.subtract(z[i],suma),math.subset(u, math.index(i,i)));
    data.xn.push(xn[i]);
}
console.log(xn);


return data;
}

gestMetodosDirectos.factorizacionCholesky = function(matrix, b){
  let aux = matrix.size();
  let l = math.zeros(aux[0],aux[1]);
  let u =  math.zeros(aux[0],aux[1]);

  let data = {
    k: [],
    logEjecucionSistemas: [],
    xn: []
  };

for(let i=0;i < aux[0];i++){
    for(let j=0;j<aux[0];j++){
        if(i < j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 0);
        }else if(i > j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 0);
        }else if(i == j){
          u = math.subset(u, math.index(i,j), 0);
          l = math.subset(l, math.index(i,j), 0);
        }
    }
}
console.log("Matriz A:");
data.k.push(0);
console.log(matrix);
console.log("Matriz L:");
console.log(l);
console.log("Matriz U:");
console.log(u);
data.logEjecucionSistemas.push(matrix);
data.logEjecucionSistemas.push(l);
data.logEjecucionSistemas.push(u);

for(let k = 1; k < aux[0] + 1; k++){
  console.log("-------------------------------------------------");
  console.log("Etapa "+k.toString());
  console.log("Encontrar la columna "+ k.toString() +" de L y la fila "+ k.toString() +" de U.");
  console.log("Matriz A");
  console.log(matrix);
  data.k.push(k);
  data.logEjecucionSistemas.push(matrix);
  let suma = 0;
  for(let p = 0; p < k-1; p++){
      console.log(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, k-1))));
      suma = math.add(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, k-1))),suma);
  }

  u = math.subset(u, math.index(k-1, k-1), math.sqrt(math.subtract(math.subset(matrix, math.index(k-1, k-1)),suma)));
  l = math.subset(u, math.index(k-1, k-1), math.subset(u, math.index(k-1, k-1)));


  for(let j = k+1; j < aux[0]+1; j++){
      suma = 0;
      for(let p = 0; p < k-1; p++){
        suma = math.add(math.multiply(math.subset(l, math.index(j-1,p)),math.subset(u, math.index(p, k-1))), suma);
      }
      l = math.subset(l, math.index(j-1, k-1), math.divide(math.subtract(math.subset(matrix, math.index(j-1, k-1)),suma),math.subset(l, math.index(k-1, k-1))));
  }
  console.log("Matriz L");
  console.log(l);
  data.logEjecucionSistemas.push(l);
  for(let i = k+1; i < aux[0] +1; i++){
      suma = 0;
      for(let p = 0; p < k-1; p++){
          suma = math.add(math.multiply(math.subset(l, math.index(k-1,p)),math.subset(u, math.index(p, i-1))), suma);
      }
      u = math.subset(u, math.index(k-1, i-1), math.divide(math.subtract(math.subset(matrix, math.index(k-1, i-1)),suma),math.subset(l, math.index(k-1, k-1))));
  } 
  console.log("Matriz U");
  console.log(u);
  data.logEjecucionSistemas.push(u);
}

console.log("\nSustitución Progresiva Lz=b");
let n = aux[0];
let z = [];
b = JSON.parse(b);

for(let omega = 0; omega < aux[0]; omega++){
  z.push(0);
}
for(let i = 1; i < aux[0] + 1; i++){
  let suma2 = 0;
  for(let p = i-1; p > 0; p--){
  let a = math.subset(l, math.index(i-2, p));
  let c  = z[p-1];
  suma2 = math.add(math.multiply(math.subset(l, math.index(i-1, p-1)),z[p-1]), suma2);
  }
z[i-1] = math.divide(math.subtract(parseFloat(b[i-1]), parseFloat(suma2)),math.subset(l, math.index(i-1, i-1)));
}
console.log(z);

console.log("\nSustitución Regresiva Ux=z");
let m = aux[0];
let xn = [];
for(let omega = 0; omega < aux[0]; omega++){
  xn.push(0);
}

for(let i = m-1; i >= 0; i--){
    let suma = 0;
    for(let j = i+1; j < m; j++){
        suma = math.add(math.multiply(math.subset(u, math.index(i,j)),parseFloat(xn[j])), suma);
    }
    xn[i] = math.divide(math.subtract(z[i],suma),math.subset(u, math.index(i,i)));
    data.xn.push(xn[i]);
}
console.log(xn);


return data;
}

module.exports = gestMetodosDirectos;
