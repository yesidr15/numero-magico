function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var numero = random(1, 1000);
intentos = 0;

function mostrar_input() {
    valor = document.getElementById("numero").value;
    if (valor == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Campo vacio, ingrese un numero.',
        });
    } else {
        if (valor != numero && intentos != 10) {
            if (valor > numero) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Intenta con un numero menor.. ' + (10 - intentos - 1) + ' ❤ ',
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Intenta con un numero mayor.. ' + (10 - intentos - 1) + ' ❤ ',
                });
            }
            intentos++;
            //document.getElementById("numero").value = "";
        } else {
            Swal.fire({
                title: 'Bien hecho, lo lograste!!',
                width: 600,
                padding: '3em',
                background: '#fff url(assets/images/trees.png)',
                confirmButtonText: 'Volver a jugar',
                backdrop: `
              rgba(0,0,123,0.4)
              url("assets/images/victoria.gif")
              left top
              no-repeat
            `
            });
            numero = this.random(1, 1000);
            intentos = 0;
            document.getElementById("numero").value = null;
        }

        if (intentos == 10) {
            Swal.fire({
                icon: 'error',
                title: 'Fin del juego... 💔',
                text: 'El numero magico era ' + numero,
                confirmButtonText: 'Volver a jugar',
            });
            intentos = 0;
            numero = this.random(1, 1000);
            document.getElementById("numero").value = "";
        }
    }
}

console.log(this.numero);