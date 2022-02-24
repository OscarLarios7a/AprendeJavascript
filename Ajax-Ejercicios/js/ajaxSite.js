(() => {
    const d = document;
    const $main = d.querySelector("main");

    const getHtml = (opt) => { 
        let { url, success, error } = opt;
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", (e) => {
            if (xhr.readyState !== 4) return;

            if (xhr.status >= 200 && xhr.status < 300) {
                console.log("Exito");
                let html =  xhr.responseText;
                success(html);
            } else {
                let message = xhr.statusText || "Ocurrio un Error";
                error(`Error ${xhr.status}: ${message}`);
            }
        });
            xhr.open("GET", url);
            xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xhr.send();
    };
    d.addEventListener("DOMContentLoaded", (e) => {
        getHtml({
            url: "./assets/home.html",
            success: (html) => $main.innerHTML=html,
            error: (err) => $main.innerHTML = `<h1>${err}</h1>`
        });
    });

    d.addEventListener("click", (e) => {
        if (e.target.matches(".menu a")) {
            e.preventDefault();
            getHtml({
                url: e.target.href,
                success: (html) => $main.innerHTML=html,
                error: (err) => $main.innerHTML = `<h1>${err}</h1>`
            });
        }
    });

})();
