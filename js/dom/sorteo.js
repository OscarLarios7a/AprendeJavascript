//* Clase 97. DOM: Ejercicios Prácticos | Sorteo Digital
//!
//
const d = document;
export default function sorteoGanador(btn, select) {
    /* esta funcion nos servira para seleccionar de nuestros elementos li el ganador */
    const getGanador = (select) => {
        const $players = d.querySelectorAll(select);
        const ramdom = Math.floor(Math.random() * $players.length);
        const ganador = $players[ramdom];

        console.log($players, ramdom, ganador);
        return `El Ganador es: ${ganador.textContent}`;
    };
    /*  */
    d.addEventListener("click", (e) => {
       /*Validamos que valor trae nuestro boton */ 
        if (e.target.matches(btn)) {
            let rs = getGanador(select);
            alert(rs);
            console.log(rs);
        }
        
    });
}
/*Para un ganador aleatorio a traves de una red social */
/*
const getGanador = (select) => {
    const $players = document.querySelectorAll(select);
    const ramdom = Math.floor(Math.random() * $players.length);
    const ganador = $players[ramdom];
    //console.log($players, ramdom, ganador);
    return `El Ganador es: ${ganador.textContent}`;
};

getGanador("Aqui va el selector de la red social o el selector de la pagina que tomaremos como referencia");*/