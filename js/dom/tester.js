//Clase 91 DOM: Ejercicios Prácticos | Responsive Tester

const d = document;
const w = window;
export default function responsiveTest(form) {
    const $formulario = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e)=> {
       if (e.target === $formulario) {
           e.preventDefault();
           tester=w.open($formulario.direccion.value,"tester",`innerWidth=${$formulario.width.value},innerHeight=${$formulario.height.value}`);
       } 
    });

    d.addEventListener("click", (e) => {
        if (e.target === $formulario.cerrar) {
            tester.close();
        }
    });
}