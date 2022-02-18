//? Funcion autoejecutable Clase 106. AJAX: Objeto XMLHttpRequest
(() => {
    const xhr = new XMLHttpRequest(); //* instanciar una variable 
    const $xhr = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();
    const url = "https://jsonplaceholder.typicode.com/users";

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return; 
        console.log(xhr);
        if (xhr.status >= 200 && xhr.status <300) {
            console.log("Exito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML = xhr.responseText();
            let json = JSON.parse(xhr.responseText);
            //console.log(json);
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else {
            console.log("Error");
            let message = xhr.statusText || "Ocurrio un Error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        //console.log(xhr);
    }); //* Instanciar los Eventos a Manejar

    xhr.open("GET", url); //* abrir  la peticion de acuerdo al metodo de la respuesta
    
    xhr.send(); //* Enviar la respuesta de la peticion
})();