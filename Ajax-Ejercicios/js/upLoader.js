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

    //? Clase 125. Ejercicios AJAX - APIs: Uploader AJAX con Barra de Progreso 
    const progressUpload = (file) => {
        const $progress = d.createElement("progress");
        const $span = d.createElement("span");

        $progress.value = 0;
        $progress.max = 100;

        $main.insertAdjacentElement("beforeend", $progress);
        $main.insertAdjacentElement("beforeend", $span);

        //para detectar los bits q se estan cargando en los archivos
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        //!aca se encarga para la carga del archivo 
        fileReader.addEventListener("progress", (e) => { 
            console.log(e);
            const progress = parseInt((e.loaded * 100) / e.total);
            $progress.value = progress;
            $span.innerHTML = `<b>${file.name} -- ${progress} %</b>`;
        });
        //!aca se subio el archivo 
        fileReader.addEventListener("loadend", (e) => { 
            uploader(file);
            //$span.innerHTML = `<b>El Archivo ya esta en ruta</b>`;
            setTimeout(() => {
                $main.removeChild($progress);
                $main.removeChild($span);
                $files.value = "";
            },3000);
        });

    };

    d.addEventListener("change", (e) => {
        if (e.target === $files) {
            console.table(e.target.files);

            const files = Array.from(e.target.files);

            //files.forEach((el) => uploader(el)); Clase 124 se cambio el metodo
            files.forEach((el) => progressUpload(el)); //? Clase 125. Ejercicios AJAX - APIs: Uploader AJAX con Barra de Progreso 
        }
    });

  

})();