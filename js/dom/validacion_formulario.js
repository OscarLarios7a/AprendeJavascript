
const d = document;

export default function contactoFormulario() {
    const $formulario = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");
        input.insertAdjacentElement("afterend", $span);
    });
    d.addEventListener((e) => {
        if(e.target.matches(".contact-form [required]"))
            let $input = e.target;
        let pattern = $input.pattern || $input.dataset.pattern;  //operador de corto circuito
        if (pattern&& $input.value!=="") {
            let regex = new RegExp(pattern);
            return !regex.exec($input.value) ? d.getElementById($input.name).classList.add("is-active"):d.getElementById($input.name).classList.remove("is-active")
        }
        if (!pattern) {
            
        }
    });
}