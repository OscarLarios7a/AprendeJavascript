//? Clase 123
(() => {
    document.addEventListener("DOMContentLoaded", (e) => {
        const includeHtml = (el,url) => {
            //Paso 1
            const xhr = new XMLHttpRequest();
            //Paso 2
            xhr.addEventListener("readystatechange", (e) => {
                if (xhr.readyState !== 4) return;
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log("Exito");
                    el.outerHTML =  xhr.responseText;
                    //success(html);
                } else {
                    let message = xhr.statusText || "Ocurrio un Error";
                    el.outerHTML =  (`<div> <p>Error ${xhr.status}: ${message} </p></div>`);
                }
            });
            //Paso 3
            xhr.open("GET", url);
            //Paso 4
            xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            //paso 5
                xhr.send();
        };

        document.querySelectorAll("[data-include]").forEach((el) => includeHtml(el,el.getAttribute("data-include")));
    });
})();