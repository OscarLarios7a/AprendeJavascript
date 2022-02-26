//? Clase 127. Ejercicios AJAX - APIs: Envío Formulario con Fetch y FormSubmit
const d = document;

function contactoFormulario() {
    const $formulario = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");
    const $urlmail = "https://formsubmit.co/ajax/javier.atoaxaca@gmail.com";

    $inputs.forEach((input) => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });
    d.addEventListener("keyup",(e) => {
        if(e.target.matches(".contact-form [required]")){ 
            let $input = e.target;
            let pattern = $input.pattern || $input.dataset.pattern;  //operador de corto circuito

            if (pattern && $input.value!=="") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
        }
        if (!pattern) {
            return $input.value === "" ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
            
            }
    }
    });

    d.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Enviando Formularios");

        const $loader = d.querySelector(".formLoader");
        const $respuesta = d.querySelector(".contactFormResponse");
        $loader.classList.remove("none");


        fetch($urlmail,{
           method: "POST",
           headers: {
               'Content-Type': 'application/json;charset=utf-8',
               
            },
           body: new FormData(e.target)
        })
            .then(res => res.json() )
            .then(data => {
                //console.log(res);
                console.log(data);
                $loader.classList.add("none");
                $respuesta.classList.remove("none");
                $respuesta.innerHTML = `<p><b>${data.message}</b></p>`;
                $formulario.reset();
            })
            .catch((err) => {
                console.log(err);
                let message = err.statusText || "Ocurrio un Error envia de nuevo";
                $respuesta.innerHTML=`Error: <p><b>${err.status} : ${message}</b></p>`;
            })
            .finally(() => setTimeout(() => {
                $respuesta.classList.add("none");
                $respuesta.innerHTML = "";
            }, 3000));
    });
}
d.addEventListener("DOMContentLoaded", contactoFormulario);
 
//* SE COMENTA ESTA PARTE DEL CODIGO PARA PODER REALIZAR LA PETICION A TRAVES DEL API FETCH DE AJAX
/*setTimeout(() => {
    $loader.classList.add("none");
    $respuesta.classList.remove("none");
    $formulario.reset();
    setTimeout(() => {
        $respuesta.classList.add("none")
    },3000);
//}, 3000);*/