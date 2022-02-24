(() => {
    const d = document;
    const $table = d.querySelector(".crud-table-fetch-async");
    const $form = d.querySelector(".crud-form-fetch-async");;
    const $title = d.querySelector(".crud-title-fetch-async");
    const $template = d.getElementById("crud-template-fetch-async").content;
    const $fragment = d.createDocumentFragment();
    const $url = "http://localhost:3000/santos/";
    //? Declaracion de una Funcion Asincrona
    const getAllSaintsFetchAsync = async () => {
        try {
            let respuesta = await fetch($url);
            let json = await respuesta.json();

            if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };

            json.forEach((el) => {
                $template.querySelector(".name").textContent = el.nombre;
                $template.querySelector(".constellation").textContent = el.constelacion;
                $template.querySelector(".edit-fetch-async").dataset.id = el.id;
                $template.querySelector(".edit-fetch-async").dataset.name = el.nombre;
                $template.querySelector(".edit-fetch-async").dataset.constellation = el.constelacion;
                $template.querySelector(".delete-fetch-async").dataset.id = el.id;
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
        } catch (err) {
             let message = err.statusText || "Ocurrio un Error";
               $table.insertAdjacentHTML("afterend", `<p><b>${err.status} : ${message}</b></p>`);
        }
    };
    //Cargando el evento 
    d.addEventListener("DOMContentLoaded", getAllSaintsFetchAsync);

    //Cargando el Evento de Submit 
    d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();
        if (!e.target.id.value) {
            //Create - POST
            try {
            let opt = {
                     method: "POST",
                     headers: {
                         "content-Type": "application/json;charset=utf-8",
                     },
                     body: JSON.stringify({
                             nombre: e.target.nombre.value,
                             constelacion: e.target.constelacion.value
                         })
                     };
                let respuesta = await fetch($url, opt);
                //let json = await respuesta.json();
                if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };
                location.reload();
            }
            catch (err) {
                console.log(`Error`, err);
                let message = err.statusText || "Ocurrio un Error";
                $form.insertAdjacentHTML("afterend",`<p><b>${err.status}: ${message}</b></p>` );
            }
        } else {
            //Update - PUT
            try {
                let opt = {
                    method: "PUT",
                    headers: {
                        "content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({
                            nombre: e.target.nombre.value,
                            constelacion: e.target.constelacion.value
                        })
                    };
                let respuesta = await fetch($url+`${e.target.id.value}`, opt);
                //let json = await respuesta.json();
                if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };
                location.reload();
            }
            catch (err) {
                    console.log(`Error`, err);
                    let message = err.statusText || "Ocurrio un Error";
                    $form.insertAdjacentHTML("afterend",`<p><b>${err.status}: ${message}</b></p>` );
                }
        }
    }
    });
    //Cargando el Evento de click
    d.addEventListener("click", async (e) => {
        if (e.target.matches(".edit-fetch-async")) {
            $title.textContent = "Editar Santo";
            $form.nombre.value = e.target.dataset.name;
            $form.constelacion.value = e.target.dataset.constellation;
            $form.id.value = e.target.dataset.id;

        }      
        if (e.target.matches(".delete-fetch-async")) 
            {
            let isDelete = confirm(`¿estas Seguro de Eliminar el Elemento ${e.target.dataset.id}`);

            if (isDelete) {
                try {
                    let opt = {
                    method: "DELETE",
                    headers: {
                        "content-Type": "application/json;charset=utf-8",
                    }
                };
                let respuesta = await fetch($url+`${e.target.dataset.id}`, opt);
                //let json = await respuesta.json();
                if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };
                location.reload();
                }
                catch (error) {
                    console.log(`Error`, err);
                    let message = err.statusText || "Ocurrio un Error";
                    $form.insertAdjacentHTML("afterend",`<p><b>${err.status}: ${message}</b></p>` );    
                }
            }
        }
    });

})();