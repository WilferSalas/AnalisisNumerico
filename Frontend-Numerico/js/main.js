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
    console.log(e);
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



function toggleMe1(a){
    let e = document.getElementById(a);
    console.log(e);
    if ((e.id === 'section-gauss')) {
        document.getElementById('section-gauss').style.display = 'block';
        document.getElementById('section-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-pivoteo-total').style.display = 'none';
        document.getElementById('section-lu-gauss').style.display = 'none';
        document.getElementById('section-lu-pivoteo-parcial').style.display = 'none';
        document.getElementById('section-Doolittle').style.display = 'none';
        document.getElementById('section-newton').style.display = 'none';
        document.getElementById('section-secant').style.display = 'none';
        document.getElementById('section-root').style.display = 'none';


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

    }
}


function toggleMe2(a){
    let e = document.getElementById(a);
    console.log(e);
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

