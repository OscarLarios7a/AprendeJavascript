//* Clase 124. Ejercicios AJAX - APIs: Uploader con AJAX
(() => {
    const d = document;
    const $main = d.querySelector("main");
    const $files = d.getElementById("files");
    const urlphp = "./php/uploader.php";

    const uploader = (file) => {
        console.log(file);
        const xhr = new XMLHttpRequest();
        const formData = new FormData();

        formData.append("file", file);

         xhr.addEventListener("readystatechange", (e) => {
             if (xhr.readyState !== 4) return;
             
             if (xhr.status >= 200 && xhr.status < 300) {
                 
                 let json = JSON.parse(xhr.responseText);
                 console.log(json);
              } else {
                  let message = xhr.statusText || "Ocurrio un Error";
                   console.log (`Error ${xhr.status}: ${message}`);
              }
          });
          //Paso 3
          xhr.open("POST", urlphp);
          //Paso 4
          xhr.setRequestHeader("enc-type", "multipart/form-data"); //* aqui se cambia por que se utilizara php
          //paso 5
          xhr.send(formData);
    };

    d.addEventListener("change", (e) => {
        if (e.target === $files) {
            console.table(e.target.files);

            const files = Array.from(e.target.files);

            files.forEach((el) => uploader(el));
        }
    });
})();