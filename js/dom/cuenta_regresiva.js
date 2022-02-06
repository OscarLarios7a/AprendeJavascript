const d = document;
export default function countDown(id, limitDate, finalMsn) {
    const $countDown = d.getElementById(id);//
    const $countDate = new Date(limitDate).getTime();
    let tempCountTime = setInterval(() => {
        let nowTime = new Date().getTime();
        let timeLimit = $countDate - nowTime,
            days=Math.floor(timeLimit/(1000*60*60*24)),
            hours=("0"+Math.floor((timeLimit%(1000*60*60*24))/(1000*60*60))).slice(-2),
            minutes=("0"+Math.floor((timeLimit%(1000*60*60))/(1000*60))).slice(-2),
            seconds=("0"+Math.floor((timeLimit%(1000*60))/(1000))).slice(-2);
        $countDown.innerHTML =`<h3>Faltan: ${days} Dias, ${hours} Horas , ${minutes} Minutos , ${seconds} Segundos </h3>`;
        
        if (timeLimit<0) {
            clearInterval(tempCountTime);
            $countDown.innerHTML =`<h3> ${finalMsn} </h3>`;
        }
    }, 1000);
}