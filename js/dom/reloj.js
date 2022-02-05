const d = document;
//pasare 3 parametros para la funcionalidad de cada uno de los eventos

/*ejercicios de la Clase 82*/
export function digitalReloj(clock, iniciarReloj, detenerReloj) {
    let tempHora; // se inicia vacia para que mas adelante se le asigne el valor del setInverval
    d.addEventListener("click", (e) => {
        if (e.target.matches(iniciarReloj)) {
           tempHora=setInterval(() => {
                let clockHora = new Date().toLocaleTimeString();
               d.querySelector(clock).innerHTML = `<h3>${clockHora}</h3>`;
               console.log(clockHora);
            }, 1000);
            e.target.disabled = true; 
        }
        if (e.target.matches(detenerReloj)) {
            clearInterval(tempHora);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(iniciarReloj).disabled = false; 
        }    
    });
}

/*ejercicios de la Clase 83*/
export function alarmReloj(sound, iniciarAlarma, detenerAlarma) {
    let tempAlarma;
    const $alarm = d.createElement("audio"); // se crea un elemento
    $alarm.src = sound;
    d.addEventListener("click", (e) => {
        if (e.target.matches(iniciarAlarma)) {   
            tempAlarma = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true; 
        }

        if (e.target.matches(detenerAlarma)) {
            clearTimeout(tempAlarma);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(iniciarAlarma).disabled = false; 
        }    

    });

}