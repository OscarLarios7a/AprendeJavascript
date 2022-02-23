(()=>{
    const d = document;
    const $table=d.querySelector(".crud-table");
    const $form=d.querySelector(".crud-form");;
    const $title=d.querySelector(".crud-title");;
    const $template = d.getElementById("crud-template").content;
    const $fragment = d.createDocumentFragment();

    //Crear una funcion de tipo expresada
    const ajax = (opt) => {
        let { url, method, success, error, data } = opt;
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", (e) => { 
            if (xhr.readyState !== 4) return; 

            if (xhr.status >= 200 && xhr.status <300) {
                console.log("Exito");
                let json = JSON.parse(xhr.responseText);
                success(json);
            } else {
                let message = xhr.statusText || "Ocurrio un Error";
              error(`Error ${xhr.status}: ${message}`);
            }
        });
        
        xhr.open(method || "GET", url);
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.send(JSON.stringify(data));
    };
    const getAllSaints = () => {
        ajax({
            //method: "GET",
            url: "http://localhost:3000/santos/",
            success: (res) => {
                console.log(`Exito`, res);
                res.forEach((el) => {
                    $template.querySelector(".name").textContent = el.nombre;
                    $template.querySelector(".constellation").textContent = el.constelacion;
                    $template.querySelector(".edit").dataset.id = el.id;
                    $template.querySelector(".edit").dataset.name = el.nombre;
                    $template.querySelector(".edit").dataset.constellation = el.constelacion;
                    $template.querySelector(".delete").dataset.id = el.id;


                    let $clone = d.importNode($template, true);
                    $fragment.appendChild($clone);
                });
                $table.querySelector("tbody").appendChild($fragment);
            
            },
            error: (err) => {
                console.log(`Error`, err);
                $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
            },
            //data: null
        });
        
    };

    d.addEventListener("DOMContentLoaded", getAllSaints);
    
})()