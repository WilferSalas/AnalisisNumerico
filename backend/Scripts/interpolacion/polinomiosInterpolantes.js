const gestPolinomiosInterpolantes = {};

const math = require('mathjs')

math.config({
    number: 'BigNumber', // Default type of number:
                         // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64        // Number of significant digits for BigNumbers
  })

gestPolinomiosInterpolantes.newton = function(x,y,val){
    try{
    x = JSON.parse(x);
    y = JSON.parse(y);
    let n = x.length;
    let matrix = math.ones(n,n);
    let acum = 0;
    let prod = 1;
    data = {
        logSistemas: [],
        acum: 0
    }

    for(let i = 0; i<n; i++){
        matrix = math.subset(matrix, math.index(i,0), y[i]);
        for(let j = 1; j <= i; j++){
            matrix = math.subset(matrix, math.index(i,j), math.divide(math.subtract(math.subset(matrix, math.index(i,j-1)),math.subset(matrix, math.index(i-1, j-1))),math.subtract(x[i],x[i-j])));
            console.log(matrix);
            data.logSistemas.push(matrix);
        }
        if(i>0){
            prod = math.multiply(math.subtract(val,x[i-1]),prod);
        }
        acum = math.add(math.multiply(math.subset(matrix, math.index(i,i)),prod), acum);
        data.acum = acum;
    }

    return data;

    }catch (error){
        console.log(error);
        return data;
    }
}

gestPolinomiosInterpolantes.lagrange = function(x,y,val){
    try{
    let data = {
        pol: "P(x): ",
        result: 0
    }
    x = JSON.parse(x);
    y = JSON.parse(y);
    let n = x.length;
    let prod = 1;
    let aux = [n];
    let acum = 0;
    let pol = "P(x): ";

    for(let i = 0; i < n; i++){

        prod= 1;
        let termino = "";
        for(let j = 0; j < n; j++){

            if(j != i){
                prod = math.multiply(math.divide(math.subtract(val,x[j]),math.subtract(x[i],x[j])),prod);
                termino = termino + ("[(x-"+x[j]+")/("+x[i]+"-"+x[j]+")]");
            }
        }
        aux[i] = prod;
        acum = math.add(math.multiply(aux[i],y[i]), acum);
        data.pol += (y[i]>0?"+":"")+y[i]+"*"+termino+"\n";
        console.log(pol);
    }
    console.log("ACUM-----------------")
    console.log(acum);
    data.result = acum;
    return data;
}catch (error){
    console.log(error);
    return data;
}
}

module.exports = gestPolinomiosInterpolantes;