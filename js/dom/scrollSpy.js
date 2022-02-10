// Clase 99. DOM: Ejercicios Prácticos | ScrollSpy con Intersection Observer 
const d = document;
export default function scrollSpia() {
    const $sections = d.querySelectorAll("section[data-scrollspy]");
    const callBack = (entries) => {
        //?console.log("entries", entries);
        entries.forEach((entry) => {
            //?console.log("Entradas", entry);
        
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scrollspy][href="#${entry.target.getAttribute("id")}"]`).classList.add("active");
            } else {
                d.querySelector(`a[data-scrollspy][href="#${entry.target.getAttribute("id")}"]`).classList.remove("active");
            }
        });
    };
    const observador = new IntersectionObserver(callBack, {
        //root:
        //rootMargin: "-250px",
        threshold: [0.5,0.75]
    });
    //?console.log("Observador",observador);
    $sections.forEach(el => observador.observe(el));
}