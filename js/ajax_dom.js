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

//? Funcion autoejecutable Clase 107. AJAX: API Fetch
(() => {
    //const xhr = new XMLHttpRequest(); //* instanciar una variable 
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).
        then((res) => {
            console.log(`El resultado es: ${res}`);
            return res.ok ? res.json(): Promise.reject(res);
        }).
        then((json) => {
            console.log(json);
            //$fetch.innerHTML = json;
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        }).
        catch((err) => {
            //console.log(`El Error del Catch es: ${err}`);
            let message = err.statusText || "Ocurrio un Error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        }).
        finally(() => { 
            console.log("Esto se ejecutara independientemente del resultado de la Promesa Fetch");
        }
    );
})();

//? Funcion autoejecutable Clase 108. AJAX: API Fetch + Async-Await
(() => {
    //const xhr = new XMLHttpRequest(); //* instanciar una variable 
    const $fetchAsync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();
    const url = "https://jsonplaceholder.typicode.com/users";
    //!Funcion Asincrona
    async function getData() {
        try {
            let respuesta = await fetch(url);
            let json = await respuesta.json();
            if (!respuesta.ok) throw { status: respuesta.status, statusText: respuesta.statusText };
           // console.log(respuesta, json);
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch (err) {
            console.log(err);
             let message = err.statusText || "Ocurrio un Error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutara independientemente del resultado del Try ... Catch");
        }
    }
    getData();
})();

//? Funcion anonima autoejecutable Clase 109. AJAX: Librería Axios
(() => {
    const $axios = document.getElementById("axios");
    const $fragment = document.createDocumentFragment();
    const $fragment2 = document.createDocumentFragment();
    const url = "https://jsonplaceholder.typicode.com/user";

    axios.get(url)
        .then((res) => {
            console.log(res);
            res.data.forEach((el) => {
                const $li = document.createElement("li");
                const $td = document.createElement("td");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $td.innerHTML =`${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
                $fragment2.appendChild($td);
            });
            $axios.appendChild($fragment);
            $axios.appendChild($fragment2);
         })
         .catch((err) => {
             console.log("Estamos en el cath", err);
             let message = err.response.statusText || "Ocurrio un Error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
         })
         .finally(() => {
             console.log("Esto se ejecutara independientemente del resultado del Axios");
         });

})();