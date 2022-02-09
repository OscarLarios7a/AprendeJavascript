//95. DOM: Ejercicios Prácticos | Detección de la Geolocalización
const d = document;
const nav = navigator;

export default function getPosicionGeo(id) {
    const $id = d.getElementById(id);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximunAge:0
    };
    const success = (position) => { 
        $id.innerHTML = `<p><mark>La Latitud es: <b>${position.coords.latitude} </b><br> La Longitud es : <b> ${position.coords.longitude} </b> <br> La Precisión es: <b>${position.coords.accuracy}</b>  metros </mark></p>`;
        $id.innerHTML+=`<br> <a href="https://www.google.com.mx/maps/@${position.coords.latitude},${position.coords.longitude},19z" target="_blank" rel="noopener">Ver Ubicacion Google Maps</a>`
        console.log(position);
        
    };
    const error = (err) => { 
        $id.innerHTML=`<p><mark>${err.code}:${err.message}</mark></p>`;
        console.log(err);
    };

    nav.geolocation.getCurrentPosition(success, error, options);
    //$id.innerHTML("beforebegin",`<p><mark>${nav.geolocation.watchPosition}</mark></p>`);
}