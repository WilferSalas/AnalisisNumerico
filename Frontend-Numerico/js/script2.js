let urlGaussSimple = 'http://localhost:8000/api/sisEcu/eliminGaussSimple';
let urlGaussSimplePivoteo = 'http://localhost:8000/api/sisEcu/eliminGaussPP';
let urlCrout = 'http://localhost:8000/api/sisEcu/luCrout';
let urlCholeski = 'http://localhost:8000/api/sisEcu/luCholesky';
let urlDoolittle = 'http://localhost:8000/api/sisEcu/luDoolittle';
let urlGaussSeidel = 'http://localhost:8000/api/sisEcu/gaussSeidel';
let urlJacobi = 'http://localhost:8000/api/sisEcu/jacobi';

const app = new Vue({
    el: '#app',
    data: {

        <!-- Eliminacion gaussiana simple -->

        messageGaussSimple: 'Eliminacion gaussiana simple',
        contentGaussSimple: 'Este método se aplica para resolver sistemas lineales de la forma: A*X = B. Consiste en escalonar la matriz aumentada del sistema aumentado ' +
            'para obtener un sistema equivalente:',

        <!-- Pivoteo parcial -->

        messagePivoteoParcial: 'Pivoteo parcial',
        contentePivoteoParcial: 'Todas las tecnicas de pivoteo pretenden reducir los efectos del error de\n' +
            'propagacion (redondeo) y tratan de evitar que se presenten divisiones por\n' +
            'cero. Para lograrlo buscan que sobre la diagonal de la matriz resultante de\n' +
            'la fase se ubiquen los elementos mayores posibles. Con ello se busca que en\n' +
            'la fase de eliminacion los multiplicadores sean lo menor posible y en la de\n' +
            'sustitucion los elementos que dividen sean lo mayor posible\n' +
            'La tecnica de pivoteo parcial no reduce tanto el error de propagacion pero\n' +
            'en tiempo de ejecucion es la mas rapida.',

        <!-- Pivoteo total -->

        messagePivoteoTotal: 'Pivoteo total',
        contentePivoteoTotal: 'La Eliminación Gaussiana con Pivoteo Total consiste en:\n' +
            '\n' +
            'Teniendo una matriz de coeficientes y un vector de términos independientes de un sistema\n' +
            'de ecuaciones lineales, crear una matriz aumentada y convertir de la matriz\n' +
            'de coeficientes en una matriz triangular superior dejando como pivote el\n' +
            'número más grande (en valor absoluto) de toda matriz de coeficientes para\n' +
            'cada etapa y luego realizar una sustitución regresiva para para la matriz\n' +
            'aumentada, para realizar una sustitución regresiva y así hallar el valor de\n' +
            'cada una de las variables. El tener como pivote el número más grande de\n' +
            'toda la matriz de coeficientes (en valor absoluto) hará que la solución tenga\n' +
            'un menor error.\n',

        <!-- LU Gauss simple -->

        messageLUGauss: 'LU con eliminación guassiana simple\n',
        contentLUGauss: 'La factorización LU de una matriz es una factorización que resume el\n' +
            'proceso de eliminación gaussiana aplicado a la matriz y que es conveniente\n' +
            'en términos del número total de operaciones de punto flotante cuando se\n' +
            'desea calcular la inversa de una matriz o cuando se resolverá una serie de\n' +
            'sistemas de ecuaciones con una misma matriz de coeficientes. En la lectura,\n' +
            'primeramente consideraremos la factorización LU sin intercambio basada en\n' +
            'matrices elementales y que es conocida como de Doolittle y posteriormente\n' +
            'veremos el algoritmo que da la factorización.\n' +
            'PA = LU\n',

        <!-- LU con pivoteo parcial -->

        messageLUPivoteoParcial: 'LU con pivoteo parcial\n',
        contentLUPivoteoParcial: 'Dada la ecuación matricial\n' +
            '\n' +
            'Ax=LUx=b\n' +
            '\n' +
            'Queremos la solución para un determinando A y b. Los pasos son los siguientes:\n' +
            '\n' +
            'Primero, resolvemos para Ly=b\n' +
            '\n' +
            'Segundo, resolvemos Ux= y para x.\n' +
            '\n' +
            'Nótese que ya tenemos las matrices L y U. La ventaja de este método es\n' +
            'que es computacionalmente eficiente, porque podemos elegir el vector b que\n' +
            'nos parezca y no tenemos que volver a hacer la eliminación de Gauss cada vez. Al utilizar ' +
            'la técnica de triangulación de Gauss para obtener la descomposición L-U de una matriz A ' +
            'podemos encontrarnos con el mismo problema de encontrar un coeficiente en la diagonal que sea 0 ' +
            'o un mal condicionamiento. Podemos entonces utilizar la misma técnica de pivotación: buscar el ' +
            'siguiente elemento en la columna que sea distinto de 0 o, mejor aún, el de mayor valor absoluto.\n' +
            '\n' +
            'Pero una vez obtenida la descomposićon L-U, si queremos aplicarla a resolver un sistema de ' +
            'ecuaciones, tendremos que tener en cuenta la “historia” o registro de los pivotes efectuadas para aplicar al ' +
            'vector de terminos independientes.\n' +
            '\n' +
            'Esto se realiza mediante la matriz de permutación P, que consiste en efectuar sobre la matriz ' +
            'identidad, las mismas permutaciones de filas que se vayan efectuando sobre la matriz que se está ' +
            'triangulando por Gauss. Al mismo tiempo se efectúan las mismas permutaciones sobre los elementos subdiagonal de ' +
            'la matriz L.\n',

        <!-- Crout -->

        messageCrout: 'Crout',
        contentCrout: 'En el Método de Crout la matriz A es factorizada como A=LU en donde la matriz L es una ' +
            'matriz triangular inferior y U una matriz triangular superior con diagonal unitaria. El método de ' +
            'Crout es un procedimiento el tipo recursivo, esto significa el desarrollo de un conjunto de pasos ' +
            'sucesivos en donde el trabajo a realizar en cada paso resulta similar o del mismo tipo pero basado ' +
            'en resultados obtenidos en pasos anteriores. Estos pasos consisten en la descomposición sucesiva ' +
            'de los menores principales de la matriz de coeficientes A.\n' +
            '\n' +
            'De manera similar al método de cholesky se hace la siguiente consideración para poder obtener los coeficientes de L y U:\n' +
            '\n' +
            'Uii=1\n',

        <!-- Cholesky -->

        messageCholesky: 'Cholesky',
        contentCholesky: 'Una matriz cuadrada A con pivotes diferentes de cero puede ser escrita\n' +
            'como el producto de una matriz triangular inferior L y una matriz triangular\n' +
            'superior U. Sin embargo, si A es sim ́etrica, se pueden escoger os factores tales ' +
            'que U es la transpuesta de L, y esto se llama la descomposición o Factorización ' +
            'de Cholesky. Tanto la descomposición LU como la descomposición de Cholesky son usadas ' +
            'para resolver sistemas de ecuaciones lineales. Cuando es aplicable. la descomposición ' +
            'de Cholesky es dos veces más eficiente que la descomposición LU. Cabe destacar que para ' +
            'plantear este método se debe hacer la siguiente consideración: Uii=Lii\n' +
            '\n\n' +
            'Bajo esta declaración es posible formar un sistema de ecuaciones que contenga\n' +
            'n ecuaciones y n incógnitas y que por ende tenga solución única, siempre y\n' +
            'cuando el determinante de la matriz de coeficientes sea diferente de 0.\n',

        <!-- Doolittle -->

        messageDoolittle: 'Doolittle',
        contentDoolittle: 'El Método de Doolittle es una variación de Crout que obtiene las matrices\n' +
            'de factorización LU fila a fila o columna a columna Resulta útil para matrices\n' +
            'de grandes dimensiones de las cuales solo se guardan fila a fila o columna a\n' +
            'columna los elementos distintos de cero. La diagonal en L está compuesta de\n' +
            'unos, luego Lii=1\n',

        <!-- Jacobi -->
        messageJacobi: 'Jacobi',
        contentJacobi: 'El Método de Jacobi es un método iterativo para resolver sistemas de ' +
            'ecuaciones lineales del tipo AX=b. Este método consiste en usar fórmulas como ' +
            'iteración de punto fijo.\n' +
            'La base del método consiste en construir una sucesión convergente definida ' +
            'iterativamente. El lımite de esta sucesi ́on es precisamente la solución del ' +
            'sistema. A efectos prácticos si el algoritmo se detiene después de un número ' +
            'finito de pasos se llega a una aproximación al valor de X de la solución del sistema.\n' +
            '\n' +
            'La sucesión se construye descomponiendo la matriz del sistema A en la forma\n' +
            'siguiente:\n' +
            '\n' +
            'A=D+R\n',

        messageGaussSeidel: 'Gauss Seidel',
        contentGaussSeidel: '\n' +
            'El método de Gauss Seidel es básicamente igual al método de Jacobi, la\n' +
            'principal diferencia es que cada valor calculado es Xk es usado para recalcular\n' +
            'el valor de Xk+1 por ende converge más rápido a la solución que el método\n' +
            'de Jacobi.\n' +
            '\n' +
            'Aunque este método puede aplicarse a cualquier sistema de ecuaciones lineales ' +
            'que produzca una matriz (cuadrada, naturalmente pues para que exista solución ' +
            'única, el sistema debe tener tantas ecuaciones como incógnitas) de coeficientes ' +
            'con los elementos de su diagonal no-nulos, la convergencia del método solo se ' +
            'garantiza si la matriz es diagonalmente dominante o si es simétrica y, a la vez, ' +
            'definida positiva.\n',

        contentFooterAbout:'',
        contentFooter: 'Proyecto desarrollado por: ',
        contentFooterName1: 'Wilfer Salas Gonzalez',
        contentFooterName2: 'Esteban Perez ',

        <!-- Tamanio de la matriz Eliminacion gaussiana -->

        <!-- Datos del metodo Eliminacion Gaussiana -->

        dataGaussSimple: [],
        messageApi1GaussSimple:[],
        kGaussSimple:[],
        resultsGaussSimple:[],
        xnGaussSimple:[],

        <!-- Datos del metodo Eliminacion Gaussiana con Pivoteo-->

        dataGaussSimplePivoteo: [],
        messageApi1GaussSimplePivoteo:[],
        kGaussSimplePivoteo:[],
        resultsGaussSimplePivoteo:[],
        xnGaussSimplePivoteo:[],

        <!-- Datos del metodo Eliminacion Gaussiana con Pivoteo-->

        dataCrout: [],
        messageApi1Crout:[],
        kCrout:[],
        resultsCrout:[],
        xnCrout:[],

        <!-- Datos del metodo Choleski -->

        dataCholeski: [],
        messageApi1Choleski:[],
        kCholeski:[],
        resultsCholeski:[],
        xnCholeski:[],

        <!-- Datos del metodo Doolittle -->

        dataDoolittle: [],
        messageApi1Doolittle:[],
        kDoolittle:[],
        resultsDoolittle:[],
        xnDoolittle:[],

        <!-- Datos del metodo Gauss Seidel -->
        messageApi1Seidel:[],
        iterSeidel:[],
        xnSeidel:[],
        errorSeidel:[],

        <!-- Datos del metodo Gauss Seidel -->
        messageApi1Jacobi:[],
        iterJacobi:[],
        xnJacobi:[],
        errorJacobi:[],

        
    },
    methods: {

        gaussSimple() {
            axios.post(urlGaussSimple, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                sistemaSend: '{"fila1":["8","3","5","8"], "fila2": ["-2","7","3","76"], "fila3": ["4","-5","18","110"]}'
            }).then(response => {
                this.messageApi1GaussSimple = response.data.message;
                this.kGaussSimple = response.data.results.k;
                this.resultsGaussSimple = response.data.results.logEjecucionSistemas;
                this.xnGaussSimple = response.data.results.xn;
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        gaussSimplePivoteo() {
            axios.post(urlGaussSimplePivoteo, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                numeroSistema: 2
            }).then(response => {
                this.messageApi1GaussSimplePivoteo = response.data.message;
                this.kGaussSimplePivoteo = response.data.results.k;
                this.resultsGaussSimplePivoteo = response.data.results.logEjecucionSistemas;
                this.xnGaussSimplePivoteo = response.data.results.xn;
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        crout() {
            axios.post(urlCrout, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                numeroSistema: 3,
                b: '["20","18","31","12"]'
            }).then(response => {
                this.messageApi1Crout = response.data.message;
                this.kCrout = response.data.results.k;
                this.resultsCrout = response.data.results.logEjecucionSistemas;
                this.xnCrout = response.data.results.xn;
            }).catch(error => {
                throw error;
            });
        },

        choleski() {
            axios.post(urlCholeski, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                numeroSistema: 5,
                b: '["20","18","31","12"]'
            }).then(response => {
                this.messageApi1Choleski = response.data.message;
                this.kCholeski = response.data.results.k;
                this.resultsCholeski = response.data.results.logEjecucionSistemas;
                this.xnCholeski = response.data.results.xn;
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        doolittle() {
            axios.post(urlDoolittle, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                numeroSistema: 3,
                b: '["20","18","31","12"]'
            }).then(response => {
                this.messageApi1Doolittle = response.data.message;
                this.kDoolittle = response.data.results.k;
                this.resultsDoolittle = response.data.results.logEjecucionSistemas;
                this.xnDoolittle = response.data.results.xn;
                console.log(response.data.results.logEjecucionSistemas)
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        seidel() {
            axios.post(urlGaussSeidel, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                numeroSistema: 6,
                b: '["20","18","31","12"]',
                x0: '["1","1","1"]',
                iter: 100,
                tole: 0.000005,
            }).then(response => {
                this.messageApi1Seidel = response.data.message;
                this.iterSeidel = response.data.results.n;
                this.xnSeidel = response.data.results.xn;
                this.errorSeidel = response.data.results.error;
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        jacobi() {
            axios.post(urlJacobi, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                numeroSistema: 6,
                b: '["21","7","42"]',
                x0: '["1","1","1"]',
                iter: 100,
                tole: 0.000005,
            }).then(response => {
                this.messageApi1Jacobi = response.data.message;
                this.iterJacobi = response.data.results.n;
                this.xnJacobi = response.data.results.xn;
                this.errorJacobi = response.data.results.error;
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

    }
});