// Clase 93. DOM: Ejercicios Prácticos | Detección del estado de la red 
const d = document;
const w = window;
const nav = navigator;

export default function cnxNetwork() {
    const isOnLine = () => {
        const $div = d.createElement("div");
        if (nav.onLine) {
            $div.textContent = "Conexion Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => d.body.removeChild($div), 2000);
    };
    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());
}