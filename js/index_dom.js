import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalReloj, alarmReloj } from "./dom/reloj.js";
import { atajos, moverEsfera } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopBtn from "./dom/btn_scroll.js";
import darkTheme from "./dom/theme.js";
import responsiveMediaquery from "./dom/responsive.js";
import responsiveTest from "./dom/tester.js";
import userAgentDeviceInfo from "./dom/userAgent.js";
import cnxNetwork from "./dom/conectionRed.js";
import camaraWeb from "./dom/camara.js";
import getPosicionGeo from "./dom/geolocalizacion.js";
import busquedaFiltro from "./dom/busqueda.js";
import sorteoGanador from "./dom/sorteo.js";
import slider from "./dom/slider.js";

const movil = `<a class="responsive" href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank"> Ver Video </a>`;
const desktop = `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
const mapaMovil = `<a class="responsive" href="https://goo.gl/maps/H7S9W7Y9Jxb3ckES9" target="_blank"> Ver Mapa </a>`;
const mapaDesktop = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d566.980555404618!2d-96.71906276189539!3d17.064074313222854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c72239b3124f09%3A0xc56e0dc646056559!2sC.%20de%20Los%20Libres%20400C%2C%20RUTA%20INDEPENDENCIA%2C%20Centro%2C%2068000%20Oaxaca%20de%20Ju%C3%A1rez%2C%20Oax.!5e0!3m2!1ses!2smx!4v1644339672951!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalReloj("#reloj", "#activar-reloj", "#desactivar-reloj"); // se utiliza el simbolo de gato (#) ya que es un id y no una clase (.)
    alarmReloj("../assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countDown", "Feb 05,2022 21:18:30", "Feliz Cumple Anciano Tarado");
    scrollTopBtn(".scrollBtnTop");
    responsiveMediaquery("youtube", "(min-width:1024px)",movil,desktop);/**Clase 90**/
    responsiveMediaquery("mapa", "(min-width:1024px)", mapaMovil, mapaDesktop);/**Clase 90**/
    responsiveTest("responsive-tester"); //Clase 91 DOM: Ejercicios Prácticos | Responsive Tester
    userAgentDeviceInfo("userDevice"); //92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent 
    camaraWeb("webcam");//Clase 94
    getPosicionGeo("geolocation");
    busquedaFiltro(".card-filter", ".card"); //Clase 96
    sorteoGanador("#winnerBtn", ".player"); //97. DOM: Ejercicios Prácticos | Sorteo Digital
    slider();
});


// se utilizaran keydown,keypress y keyup
d.addEventListener("keydown", (e) => {
    atajos(e);
    moverEsfera(e,".ball",".stage");
});

darkTheme(".themeDark", "darkMode"); //Clase 89 
cnxNetwork(); //Clase 93
