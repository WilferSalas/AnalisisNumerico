let urlBisection = 'http://localhost:8000/api/ecuUnaVar/biseccion';
let urlFalseRule = 'http://localhost:8000/api/ecuUnaVar/reglaFalsa';
let urlFixedPoint = 'http://localhost:8000/api/ecuUnaVar/puntoFijo';
let urlNewton = 'http://localhost:8000/api/ecuUnaVar/newton';
let urlSecant = 'http://localhost:8000/api/ecuUnaVar/secante';
let urlRoots = 'http://localhost:8000/api/ecuUnaVar/raicesMultiples';
let urlEcuations = 'http://localhost:8000/api/user/getFunctions';

const app = new Vue({
    el: '#app',
    data: {

        <!-- Contenido del index -->

        messageMain: 'Analisis Numerico',
        contentMain: 'Proyecto para la materia de Analisis Numerico con los metodos numericos desarrollados durante todo el semestre',
        contentNumerical: 'El Análisis Numérico es una rama de las matemáticas que, mediante el uso de algoritmos iterativos,\n' +
            'obtiene soluciones numéricas a problemas en los cuales la matemática simbólica (o analı́tica)\n' +
            'resulta poco eficiente y en consecuencia no puede ofrecer una solución. En particular, a estos algo-\n' +
            'rtimos se les denomina métodos numéricos.\n' +
            'Por lo general los métodos numéricos se componen de un número de pasos finitos que se ejecutan\n' +
            'de manera lógica, mejorando aproximaciones iniciales a cierta cantidad, tal como la raı́z de una\n' +
            'ecuación, hasta que se cumple con cierta cota de error. A esta operación cı́clica de mejora del valor\n' +
            'se le conoce como iteración.',
        messageMethods: 'Metodos Numericos',
        contentMethodsEcuations: 'Una ecuación es una igualdad matemática entre dos expresiones algebraicas. Una ecuación lineal ' +
            'de una variable involucra solamente sumas y restas de una variable.',
        contentMethodsSistems: 'Un sistema de ecuaciones lineales es un conjunto de ecuaciones que tienen más de una incógnita. ' +
            'Las incógnitas aparecen en varias de las ecuaciones, pero no necesariamente en todas.',
        contentMethodsInterpolation: 'En el subcampo matemático del análisis numérico, se denomina interpolación a la obtención de nuevos ' +
            'puntos partiendo del conocimiento de un conjunto discreto de puntos.',
        contentFooterAbout:'',
        contentFooter: 'Proyecto desarrollado por: ',
        contentFooterName1: 'Wilfer Salas Gonzalez',
        contentFooterName2: 'Esteban Perez ',

        <!-- Contenido de ecuaciones -->

        messageIncremental: 'Busquedas Incrementales',
        contentIncremental: 'El metodo de Busquedas Incrementales se utiliza para halla un intervalo\n' +
            'en el cual se encuentra al menos una raiz. Se debe garantizar que la funcion\n' +
            'es continua en el intervalo. Este metodo no es totalmente seguro y confiable\n' +
            'porque depende del tamano del intervalo escogido ya que puede pasar por\n' +
            'encima de una raız o varias y no percibirla.',
        messageBisection: 'Metodo Biseccion',
        contentBisection: 'El Metodo de la Biseccion se caracteriza por ser un metodo cerrado o por\n' +
            'intervalos porque para su ejecucion se requiere que en el intervalo la funcion\n' +
            'cambie de signo en los extremos y que sea continua, es decir, que se garantice\n' +
            'la existencia de un intervalo que contenga al menos una raiz.',
        messageFalseRule: 'Regla falsa',
        contentFalseRule: 'El Metodo de la Regla Falsa se clasifica como un metodo por intervalos\n' +
            'porque parte de un intervalo que cumple las condiciones de cambio de signo\n' +
            'y continuidad. Ademas, se utiliza para encontrar una aproximacion a una\n' +
            'ráız de una ecuaćoon determinada, mediante la estrategia de reducir dicho\n' +
            'intervalo en cada iteracion. Para ello utiliza un punto intermedio en cada\n' +
            'etapa, que a su vez es la aproximacion a la raiz. Tambienn, es posible usar el\n' +
            'ḿetodo para reducir el tamano de un intervalo en el que existe un araiz',
        messageFixedPoint: 'Punto fijo',
        contentFixedPoint: 'El Metodo del Punto Fijo reformula la ecuacion f(x)=0 y genera una\n' +
            '\n' +
            'ecuacion de la forma x=g(x) que permite encontrar un valor de x que al reemplazarlo en g su ' +
            'resultado sea el mismo, es decir que x sea invariable para\n' +
            '\n' +
            'g, y adicionalmente que la f(x) converja a cero.\n' +
            'Desde el punto de vista geometrico el objetivo del metodo es: Dada la\n' +
            '\n' +
            'ecuacion f(x)=0 y la respectiva ecuacion x=g(x) se busca el punto de interseccion o corte de la curva y=g(x) con la recta y=x.',
        messageNewton: 'Metodo Newton',
        contentNewton: 'El Metodo de Newton es uno de los mas rapidos, este puede considerarse\n' +
            'como un tipo de metodo de punto fijo',
        messageSecant: 'Metodo de la Secante',
        contentSecant: 'El Metodo de la Secante no siempre converje. Es recomendable buscar\n' +
            'un par de buenos valores iniciales, y en lo posible, que definan un intervalo\n' +
            'que contenga una raiz. Es un metodo abierto porque parte de dos valores ini-\n' +
            'ciales, es decir, el metodo calcula valores mediante los dos  ultimos y desecha\n' +
            'siempre el mas viejo de todos.\n' +
            '\n' +
            'El metodo de la secante se puede ver como una variante del metodo de\n' +
            'punto fijo, en la cual la funcion g depende de dos valores. Tambien se puede\n' +
            'ver como una variante del metodo de Newton en el sentido en que la derivada\n' +
            'se aproxima mediante la pendiente de la recta secante que une los puntos de\n' +
            'la funcion asociados con los valores que se van a utilizar para calcular el valor\n' +
            'actual. ',
        messageMultipleRoots: 'Raices multiples',
        contentMultipleRoots: 'El termino de multiplicidad se usa para referirse al nemero de veces que\n' +
            'cierto polinomio tiene raiz en un punto determinado.\n' +
            '\n' +
            'El Metodo de Raıces Multiples facilita la solucion de problemas en donde\n' +
            'una misma raiz  Xn puede repetirse en la ecuacion, ya que para los metodos\n' +
            'de Newton y secante puede darse el caso de una convergencia lineal si hay\n' +
            'presencia de raıces multiples por lo que el metodo fallaria y no se resolveria la\n' +
            'ecuacion, es ahı donde es importante implementar un proceso diferente. En\n' +
            'los codigos desarrollados se consideran dos situaciones, la primera es donde\n' +
            'la multiplicidad de las raıces se conoce y la segunda en donde esta es un\n' +
            'valor desconocido. Para desarrollar una ecuacion iterativa que converja ante\n' +
            'la presencia de raıces multiples es importante desarrollar una expresion en\n' +
            'donde exista un factor (\'m\') que represente la multiplicidad de la raız',

        <!-- Informacion de las ayudas -->
        messageFunctions: 'En esta campo va la funcion. Esta se debe escribir como si fuese en excel: x^2 o 2*x etc...',
        messageExtremoInferior: 'En este campo va el intervalo izquierdo',
        messageExtremoSuperior: 'En este campo va el intervalo derecho',
        messageIteraciones: 'En este campo va el numero de veces que el metodo se ejecutara',
        messageTolerancia:'En este campo va la tolerancia que se desea respecto al error',
        messageError: 'En este campo se podra escoger el tipo de error deseado',
        messageFunctionsG:'En esta campo va la funcion g(x). Esta se debe escribir como si fuese en excel: x^2 o 2*x etc...',
        MessageDerivative: 'En esta campo va la primera derivada de la funcion. Esta se debe escribir como si fuese en excel: x^2 o 2*x etc...\'',
        MessageDerivative2: 'En esta campo va la segunda derivada de la funcion. Esta se debe escribir como si fuese en excel: x^2 o 2*x etc...\'',

        <!-- Datos del metodo Busquedas Incrementales -->

        <!-- Datos del metodo Biseccion -->

        emailBisection: 'admin@admin.com',
        functionBisection: '',
        lowerBisection: '',
        upperBisection: '',
        iterationsBisection: '',
        toleranceBisection: '',
        dataBisection: [],
        iterBisection:[],
        xmBisection:[],
        fxmBisection:[],
        messageBisectionApi1:[],
        messageBisectionApi2:[],
        errorAbsBisection:[],
        errorRelBisection:[],

        <!-- Datos del metodo Regla falsa -->

        emailFalseRule: 'admin@admin.com',
        functionFalseRule: '',
        lowerFalseRule: '',
        upperFalseRule: '',
        iterationsFalseRule: '',
        toleranceFalseRule: '',
        dataFalseRule: [],
        iterFalseRule:[],
        xmFalseRule:[],
        fxmFalseRule:[],
        messageFalseRuleApi1:[],
        messageFalseRuleApi2:[],
        errorAbsFalseRule:[],
        errorRelFalseRule:[],

        <!-- Datos del metodo Punto fijo -->

        emailFixedPoint: 'admin@admin.com',
        functionFixedPoint: '',
        functionGFixedPoint: '',
        lowerFixedPoint: '',
        iterationsFixedPoint: '',
        toleranceFixedPoint: '',
        dataFixedPoint: [],
        iterFixedPoint:[],
        xmFixedPoint:[],
        fxmFixedPoint:[],
        messageFixedPointApi1:[],
        messageFixedPointApi2:[],
        errorAbsFixedPoint:[],
        errorRelFixedPoint:[],

        <!-- Datos del metodo Newton -->

        emailNewton: 'admin@admin.com',
        functionFNewton: '',
        functionDerivadaNewton: '',
        lowerNewton: '',
        iterationsNewton: '',
        toleranceNewton: '',
        dataNewton: [],
        iterNewton:[],
        xmNewton:[],
        fxmNewton:[],
        messageNewtonApi1:[],
        messageNewtonApi2:[],
        errorAbsNewton:[],
        errorRelNewton:[],

        <!-- Datos del metodo Secante -->

        emailSecant: 'admin@admin.com',
        functionSecant: '',
        upperSecant: '',
        lowerSecant: '',
        iterationsSecant: '',
        toleranceSecant: '',
        dataSecant: [],
        iterSecant:[],
        xmSecant:[],
        fxmSecant:[],
        messageSecantApi1:[],
        messageSecantApi2:[],
        errorAbsSecant:[],
        errorRelSecant:[],

        <!-- Datos del metodo Raices multiples -->

        emailRoots: 'admin@admin.com',
        functionFRoots: '',
        functionDerivada1Roots: '',
        functionDerivada2Roots: '',
        lowerRoots: '',
        iterationsRoots: '',
        toleranceRoots: '',
        dataRoots: [],
        iterRoots:[],
        xmRoots:[],
        fxmRoots:[],
        messageRootsApi1:[],
        messageRootsApi2:[],
        errorAbsRoots:[],
        errorRelRoots:[],

    },
    methods: {
        bisection() {
            axios.post(urlBisection, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                ffuncion: 'f(x) = ' + this.functionBisection,
                x1: this.lowerBisection,
                x2: this.upperBisection,
                iter: this.iterationsBisection,
                tole: this.toleranceBisection
            }).then(response => {
                this.dataBisection = response.data.results;
                this.iterBisection = response.data.results.n;
                this.xmBisection = response.data.results.xm;
                this.fxmBisection = response.data.results.fxm;
                this.errorAbsBisection = (response.data.results.errorAb);
                this.errorRelBisection = response.data.results.errorRel;
                this.messageBisectionApi1 = response.data.message;
                this.messageBisectionApi2 = response.data.results.message;
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        falseRule() {
            axios.post(urlFalseRule, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                ffuncion: 'f(x) =' + this.functionFalseRule,
                x1: this.lowerFalseRule,
                x2: this.upperFalseRule,
                iter: this.iterationsFalseRule,
                tole: this.toleranceFalseRule
            }).then(response => {
                this.dataFalseRule = response.data.results;
                this.iterFalseRule = response.data.results.n;
                this.xmFalseRule = response.data.results.xm;
                this.fxmFalseRule = response.data.results.fxm;
                this.errorAbsFalseRule = (response.data.results.errorAb);
                this.errorRelFalseRule = response.data.results.errorRel;
                this.messageFalseRuleApi1 = response.data.message;
                this.messageFalseRuleApi2 = response.data.results.message;
                console.log(response.data.message)
            }).catch(error => {
                console.log(this.lowerFalseRule);
                throw error;
            });
        },

        fixedPoint() {
            axios.post(urlFixedPoint, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                ffuncion: 'f(x) = ' + this.functionFixedPoint,
                gfuncion: 'g(x) = ' + this.functionGFixedPoint,
                x1: this.lowerFixedPoint,
                iter: this.iterationsFixedPoint,
                tole: this.toleranceFixedPoint
            }).then(response => {
                this.dataFixedPoint = response.data.results;
                this.iterFixedPoint = response.data.results.n;
                this.xmFixedPoint = response.data.results.xm;
                this.fxmFixedPoint = response.data.results.fxm;
                this.errorAbsFixedPoint = (response.data.results.errorAb);
                this.errorRelFixedPoint = response.data.results.errorRel;
                this.messageFixedPointApi1 = response.data.message;
                this.messageFixedPointApi2 = response.data.results.message;
                console.log(response.data.message)
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        newton() {
            axios.post(urlNewton, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                ffuncion: 'f(x) = ' + this.functionFNewton,
                fpfuncion: 'fp(x) = ' + this.functionDerivadaNewton,
                x1: this.lowerNewton,
                iter: this.iterationsNewton,
                tole: this.toleranceNewton
            }).then(response => {
                this.dataNewton = response.data.results;
                this.iterNewton = response.data.results.n;
                this.xmNewton = response.data.results.xm;
                this.fxmNewton = response.data.results.fxm;
                this.errorAbsNewton = (response.data.results.errorAb);
                this.errorRelNewton = response.data.results.errorRel;
                this.messageNewtonApi1 = response.data.message;
                this.messageNewtonApi2 = response.data.results.message;
                console.log(response.data.message)
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        secant() {
            axios.post(urlSecant, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                ffuncion: 'f(x) =' + this.functionSecant,
                x1: this.lowerSecant,
                x2: this.upperSecant,
                iter: this.iterationsSecant,
                tole: this.toleranceSecant
            }).then(response => {
                this.dataSecant = response.data.results;
                this.iterSecant = response.data.results.n;
                this.xmSecant = response.data.results.xm;
                this.fxmSecant = response.data.results.fxm;
                this.errorAbsSecant = (response.data.results.errorAb);
                this.errorRelSecant = response.data.results.errorRel;
                this.messageSecantApi1 = response.data.message;
                this.messageSecantApi2 = response.data.results.message;
                console.log(response.data.message)
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },

        roots() {
            axios.post(urlRoots, {headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                email: 'admin@admin.com',
                ffuncion: 'f(x) = ' + this.functionFRoots,
                fpfuncion: 'fp(x) = ' + this.functionDerivada1Roots,
                fppfuncion: 'fpp(x) = ' + this.functionDerivada2Roots,
                x1: this.lowerRoots,
                iter: this.iterationsRoots,
                tole: this.toleranceRoots
            }).then(response => {
                this.dataRoots = response.data.results;
                this.iterRoots = response.data.results.n;
                this.xmRoots = response.data.results.xm;
                this.fxmRoots = response.data.results.fxm;
                this.errorAbsRoots = (response.data.results.errorAb);
                this.errorRelRoots = response.data.results.errorRel;
                this.messageRootsApi1 = response.data.message;
                this.messageRootsApi2 = response.data.results.message;
                console.log(response.data.message)
            }).catch(error => {
                console.log(error);
                throw error;
            });
        },
    }
});