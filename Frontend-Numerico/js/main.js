/** Menu */

let navbar = $(".navbar");

$(window).scroll(function () {
   let oTop = $(".section-2").offset().top-window.innerHeight;
   if($(window).scrollTop()>oTop){
       navbar.addClass("sticky")
   } else {
       navbar.removeClass("sticky")
   }
});

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var destino = $(this.hash);
        if (destino.length === 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length === 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 900);
        return false;
    });
});


function toggleMe(a){
    let e = document.getElementById(a);
    if ((e.id === 'section-incremental')) {
        document.getElementById('section-incremental').style.display = 'block';
        document.getElementById('section-bisection').style.display = 'none';
        document.getElementById('section-rule').style.display = 'none';
        document.getElementById('section-point').style.display = 'none';
        document.getElementById('section-newton').style.display = 'none';
        document.getElementById('section-secant').style.display = 'none';
        document.getElementById('section-root').style.display = 'none';

    }
    if ((e.id === 'section-bisection')) {
        document.getElementById('section-bisection').style.display = 'block';
        document.getElementById('section-incremental').style.display = 'none';
        document.getElementById('section-rule').style.display = 'none';
        document.getElementById('section-point').style.display = 'none';
        document.getElementById('section-newton').style.display = 'none';
        document.getElementById('section-secant').style.display = 'none';
        document.getElementById('section-root').style.display = 'none';
    }
    if ((e.id === 'section-rule')) {
        document.getElementById('section-rule').style.display = 'block';
        document.getElementById('section-incremental').style.display = 'none';
        document.getElementById('section-bisection').style.display = 'none';
        document.getElementById('section-point').style.display = 'none';
        document.getElementById('section-newton').style.display = 'none';
        document.getElementById('section-secant').style.display = 'none';
        document.getElementById('section-root').style.display = 'none';
    }
    if ((e.id === 'section-point')) {
        document.getElementById('section-point').style.display = 'block';
        document.getElementById('section-incremental').style.display = 'none';
        document.getElementById('section-bisection').style.display = 'none';
        document.getElementById('section-rule').style.display = 'none';
        document.getElementById('section-newton').style.display = 'none';
        document.getElementById('section-secant').style.display = 'none';
        document.getElementById('section-root').style.display = 'none';
    }
    if ((e.id === 'section-newton')) {
        document.getElementById('section-newton').style.display = 'block';
        document.getElementById('section-incremental').style.display = 'none';
        document.getElementById('section-bisection').style.display = 'none';
        document.getElementById('section-rule').style.display = 'none';
        document.getElementById('section-point').style.display = 'none';
        document.getElementById('section-secant').style.display = 'none';
        document.getElementById('section-root').style.display = 'none';
    }

    if ((e.id === 'section-secant')) {
        document.getElementById('section-secant').style.display = 'block';
        document.getElementById('section-incremental').style.display = 'none';
        document.getElementById('section-bisection').style.display = 'none';
        document.getElementById('section-rule').style.display = 'none';
        document.getElementById('section-point').style.display = 'none';
        document.getElementById('section-newton').style.display = 'none';
        document.getElementById('section-root').style.display = 'none';
    }

    if ((e.id === 'section-root')) {
        document.getElementById('section-root').style.display = 'block';
        document.getElementById('section-incremental').style.display = 'none';
        document.getElementById('section-bisection').style.display = 'none';
        document.getElementById('section-rule').style.display = 'none';
        document.getElementById('section-point').style.display = 'none';
        document.getElementById('section-newton').style.display = 'none';
        document.getElementById('section-secant').style.display = 'none';

    }
}


function toggleMe1(a) {
    let e = document.getElementById(a);
    if ((e.id === 'section-gauss')) {
        document.getElementById('section-gauss').style.display = 'block';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';
        document.getElementById('section-Jacobi').style.display = 'none';

    }
    if ((e.id === 'section-pivoteo-parcial')) {
        document.getElementById('section-pivoteo-parcial').style.display = 'block';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';

    }
    if ((e.id === 'section-pivoteo-total')) {
        document.getElementById('section-pivoteo-total').style.display = 'block';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';

    }
    if ((e.id === 'section-lu-gauss')) {
        document.getElementById('section-lu-gauss').style.display = 'block';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';

    }
    if ((e.id === 'section-lu-pivoteo-parcial')) {
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'block';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';

    }

    if ((e.id === 'section-Crout')) {
        document.getElementById('section-Crout').style.display = 'block';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';

    }

    if ((e.id === 'section-Cholesky')) {
        document.getElementById('section-Cholesky').style.display = 'block';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';

    }
    if ((e.id === 'section-Doolittle')) {
        document.getElementById('section-Doolittle').style.display = 'block';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';

    }
    if ((e.id === 'section-Jacobi')) {
        document.getElementById('section-Jacobi').style.display = 'block';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Gauss-Seidel').style.display = 'none';


    }
    if ((e.id === 'section-Gauss-Seidel')) {
        document.getElementById('section-Gauss-Seidel').style.display = 'block';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-Crout').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-gauss').style.display = 'none';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-Cholesky').style.display = 'none';
        document.getElementById('section-Jacobi').style.display = 'none';
    }
}


function toggleMe2(a){
    let e = document.getElementById(a);
    if ((e.id === 'section-newton2')) {
        document.getElementById('section-newton2').style.display = 'block';
        document.getElementById('section-lagrange').style.display = 'none';
        document.getElementById('section-trazadores').style.display = 'none';
    }
    if ((e.id === 'section-lagrange')) {
        document.getElementById('section-lagrange').style.display = 'block';
        document.getElementById('section-newton2').style.display = 'none';
        document.getElementById('section-trazadores').style.display = 'none';
    }
    if ((e.id === 'section-trazadores')) {
        document.getElementById('section-trazadores').style.display = 'block';
        document.getElementById('section-newton2').style.display = 'none';
        document.getElementById('section-lagrange').style.display = 'none';
    }
}

function toggleMeError(a){
    let e = document.getElementById(a);
    if ((e.id === 'errorAbsoluto')) {
        document.getElementById('errorAbsoluto').style.display = 'block';
        document.getElementById('errorRelativo').style.display = 'none';
    }
    if ((e.id === 'errorRelativo')) {
        document.getElementById('errorRelativo').style.display = 'block';
        document.getElementById('errorAbsoluto').style.display = 'none';
    }

    if ((e.id === 'errorAbsolutoRule')) {
        document.getElementById('errorAbsolutoRule').style.display = 'block';
        document.getElementById('errorRelativoRule').style.display = 'none';
    }
    if ((e.id === 'errorRelativoRule')) {
        document.getElementById('errorRelativoRule').style.display = 'block';
        document.getElementById('errorAbsolutoRule').style.display = 'none';
    }

    if ((e.id === 'errorAbsolutoPoint')) {
        document.getElementById('errorAbsolutoPoint').style.display = 'block';
        document.getElementById('errorRelativoPoint').style.display = 'none';
    }
    if ((e.id === 'errorRelativoPoint')) {
        document.getElementById('errorRelativoPoint').style.display = 'block';
        document.getElementById('errorAbsolutoPoint').style.display = 'none';
    }

    if ((e.id === 'errorAbsolutoNewton')) {
        document.getElementById('errorAbsolutoNewton').style.display = 'block';
        document.getElementById('errorRelativoNewton').style.display = 'none';
    }
    if ((e.id === 'errorRelativoNewton')) {
        document.getElementById('errorRelativoNewton').style.display = 'block';
        document.getElementById('errorAbsolutoNewton').style.display = 'none';
    }

    if ((e.id === 'errorAbsolutoSecant')) {
        document.getElementById('errorAbsolutoSecant').style.display = 'block';
        document.getElementById('errorRelativoSecant').style.display = 'none';
    }
    if ((e.id === 'errorRelativoSecant')) {
        document.getElementById('errorRelativoSecant').style.display = 'block';
        document.getElementById('errorAbsolutoSecant').style.display = 'none';
    }

    if ((e.id === 'errorAbsolutoRoots')) {
        document.getElementById('errorAbsolutoRoots').style.display = 'block';
        document.getElementById('errorRelativoRoots').style.display = 'none';
    }
    if ((e.id === 'errorRelativoRoots')) {
        document.getElementById('errorRelativoRoots').style.display = 'block';
        document.getElementById('errorAbsolutoRoots').style.display = 'none';
    }
}

