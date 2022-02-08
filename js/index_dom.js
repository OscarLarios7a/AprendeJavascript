import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalReloj, alarmReloj } from "./dom/reloj.js";
import { atajos, moverEsfera } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopBtn from "./dom/btn_scroll.js";
import darkTheme from "./dom/theme.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalReloj("#reloj", "#activar-reloj", "#desactivar-reloj"); // se utiliza el simbolo de gato (#) ya que es un id y no una clase (.)
    alarmReloj("../assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countDown("countDown", "Feb 05,2022 21:18:30", "Feliz Cumple Anciano Tarado");
    scrollTopBtn(".scrollBtnTop");
});


// se utilizaran keydown,keypress y keyup
d.addEventListener("keydown", (e) => {
    atajos(e);
    moverEsfera(e,".ball",".stage");
});

darkTheme(".themeDark", "darkMode"); //Clase 89 