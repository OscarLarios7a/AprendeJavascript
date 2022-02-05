const d = document;
let x = 0, y = 0;
export function moverEsfera(e,ball,stage) {
    const $ballEvent = d.querySelector(ball);
    const $stageEvent = d.querySelector(stage);
    const $limiteBall = $ballEvent.getBoundingClientRect(); //investigar para que sirve esta propiedad de getBoundingClientRect
    const $limiteStage = $stageEvent.getBoundingClientRect();


    console.log(e.keyCode);
    console.log(e.key);

    console.log($limiteBall, $limiteStage);
    switch (e.keyCode) {
        case 37: //Movimiento a la Izquierda
            if ($limiteBall.left > $limiteStage.left) {
                e.preventDefault();
                x--;
            }
            break;
        case 38: //Movimiento hacia Arriba
            if ($limiteBall.top > $limiteStage.top) {
                e.preventDefault();
                y--;
            }
            break;
        case 39: //Movimiento a la Derecha
            if ($limiteBall.right < $limiteStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40: //Movimiento hacia Abajo
            if ($limiteBall.bottom < $limiteStage.bottom) {
            e.preventDefault();
            y++;
            }
            break;
        default: break;
    }
    $ballEvent.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}






export function atajos(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e);

    if (e.key === "a" && e.altKey) {
        alert("JHaz lanzado una alerta con el teclado");
    }

     if (e.key === "c" && e.altKey) {
     confirm("JHaz lanzado una Confirmacion con el teclado");
    }

     if (e.key === "p" && e.altKey) {
     prompt("JHaz lanzado una Aviso con el teclado");
    }
}