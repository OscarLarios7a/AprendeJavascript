(() => {
    const d = document;
    const $table = d.querySelector(".crud-table-axios-async");
    const $form = d.querySelector(".crud-form-axios-async");;
    const $title = d.querySelector(".crud-title-axios-async");
    const $template = d.getElementById("crud-template-axios-async").content;
    const $fragment = d.createDocumentFragment();
    const $url = "http://localhost:3000/santos/";
    
    
    const getAllSaintsAxiosAsync=async () => {
        try {
            let respuesta = await axios.get($url);
            let json = await respuesta.data;
            console.log(json);
            console.table(json);
            json.forEach((el) => {
                $template.querySelector(".name").textContent = el.nombre;
                $template.querySelector(".constellation").textContent = el.constelacion;
                $template.querySelector(".edit-axios-async").dataset.id = el.id;
                $template.querySelector(".edit-axios-async").dataset.name = el.nombre;
                $template.querySelector(".edit-axios-async").dataset.constellation = el.constelacion;
                $template.querySelector(".delete-axios-async").dataset.id = el.id;
                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);
        }
        catch (err) {
            let message = err.statusText || "Ocurrio un Error";
            $table.insertAdjacentHTML("afterend", `<p><b>${err.status} : ${message}</b></p>`);
        }
    };

    d.addEventListener("DOMContentLoaded", getAllSaintsAxiosAsync);
    
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
                         data: JSON.stringify({
                                 nombre: e.target.nombre.value,
                                 constelacion: e.target.constelacion.value
                             })
                         };
                    let respuesta = await axios($url, opt);
                    let json = await respuesta.data;
                    console.table(json);
                    location.reload();
                } catch (error) {
                    console.log(`Error`, err);
                    let message = err.statusText || "Ocurrio un Error";
                    $form.insertAdjacentHTML("afterend",`<p><b>${err.status}: ${message}</b></p>` );                    
                }
            } else {
                //Create - PUT
                try {
                    let opt = {
                        method: "PUT",
                        headers: {
                            "content-Type": "application/json;charset=utf-8",
                        },
                        data: JSON.stringify({
                                nombre: e.target.nombre.value,
                                constelacion: e.target.constelacion.value
                            })
                        };
                    let respuesta = await axios($url+`${e.target.id.value}`, opt);
                    let json = await respuesta.data;
                    //if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };
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

    d.addEventListener("click", async (e) => {
        if (e.target.matches(".edit-axios-async")) {
            $title.textContent = "Editar Santo";
            $form.nombre.value = e.target.dataset.name;
            $form.constelacion.value = e.target.dataset.constellation;
            $form.id.value = e.target.dataset.id;

        }      
        if (e.target.matches(".delete-axios-async")) 
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
                let respuesta = await axios($url+`${e.target.dataset.id}`, opt);
                let json = await respuesta.data;
                //if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };
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