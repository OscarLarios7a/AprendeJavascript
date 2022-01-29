console.log("************Elementos del Documento*************");
// console.log(window.document);

// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);

// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

// document.write("<h2>Hola Mundo desde el DOM</h2>");

console.log("************Clase 62*************");

/*
console.log(document.getElementsByTagName("li")); //por elemento
console.log(document.getElementsByClassName("card"));//por clase del elemento
console.log(document.getElementsByName("nombre"));//por nombre del elemento
console.log(document.getElementById("menu")); //por id del elemento
console.log(document.querySelector("#menu"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length)


document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelector(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
*/
// Clase_63
console.log("************Clase 63*************");
/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
console.log(document.documentElement.setAttribute("lang", "es-Mx"));
console.log(document.documentElement.lang);

const $linkDom = document.querySelector(".link-dom");
$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://github.com/OscarLarios7a/AprendeJavascript");
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

//data attributes

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description= "Comparte mi GitHub";
console.log($linkDom.dataset.description);

console.log($linkDom.hasAttribute("data-id"));
console.log($linkDom.removeAttribute("data-id"));
console.log($linkDom.hasAttribute("data-id"));
*/
// Clase_64 DOM: Estilos y Variables CSS
console.log("************Clase 64*************");
/*
const $linkDom2 = document.querySelector(".link-dom");

console.log($linkDom2.style);
console.log($linkDom2.getAttribute("style"));
console.log($linkDom2.style.backgroundColor);
console.log($linkDom2.style.color);
console.log(window.getComputedStyle($linkDom2));

//Modificacion de los estilos del elemento "a"
$linkDom2.style.setProperty("text-decoration", "none");
$linkDom2.style.setProperty("display", "block");
$linkDom2.style.width = "50%";
$linkDom2.style.textAlign = "center";
$linkDom2.style.marginLeft = "auto";
$linkDom2.style.marginRight = "auto";
$linkDom2.style.padding = "1rem";
$linkDom2.style.borderRadius = ".5rem";

console.log($linkDom2.style);
console.log($linkDom2.getAttribute("style"));
console.log(window.getComputedStyle($linkDom2));

//Custom Proporties CSS - Variables CSS

const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);
*/
// Clase_65 DOM: Clases CSS
console.log("************Clase 65*************");
/*const $card = document.querySelector(".card");

console.log($card);
console.log($card.className); //className sirve para mostrar el nombre de la clase Css que estamos haciendo la referencia
console.log($card.classList);//classLista sirve para mostrar las propiedades que tiene la Clase Css que estamos haciendo referencia

console.log($card.classList.contains("rotate-45")); // con la propiedad de contains que esta dentro del metodo de classList nos sirve para verificar si tiene un una clases Css nuesto elemento a traves de un boolean  
$card.classList.add("rotate-45");// el add es un metodo de la propiedad de classList el cual nos sirve para agregar una Clase Css a un elemento de nuestro Dom de HTML
console.log($card.classList.contains("rotate-45")); 
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");*/

// Clase_66 DOM: Texto y HTML
console.log("************Clase 66*************");
/*
const $whatIsDom = document.getElementById("que-es");

let text = `
<p>
El modelo de objetos del documento (<b><i>DOM - Document Object Model </i></b>) es un  API para documentos HTML y XML
</p>
<p>
este Provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo.
</p>
<p>
<mark>
El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores.
</mark>
</p>
`;

// $whatIsDom.innerText = text; // lo pone como un texto
$whatIsDom.textContent = text;
$whatIsDom.innerHTML = text;  //el innerHTML sirva para agregar mas elementos a un elemento padre
$whatIsDom.outerHTML = text; //el outerHTML sirva para agregar mas elementos por separado eliminando a un elemento padre
*/
// Clase_67 DOM Traversing: Recorriendo el DOM
console.log("************Clase 67*************");
/*
$cardDom = document.querySelector(".cards");
console.log($cardDom);
console.log($cardDom.children);
console.log($cardDom.children[2]);

console.log($cardDom.parentElement);
console.log($cardDom.firstElementChild);
console.log($cardDom.lastElementChild);
console.log($cardDom.previousElementSibling);
console.log($cardDom.nextElementSibling);
console.log($cardDom.closest("div"));//es un metodo que busca el anscentro mas cercano 
console.log($cardDom.closest("body"));
console.log($cardDom.children[3].closest("section"));
*/
// Clase_68 DOM: Creando Elementos y Fragmentos
console.log("************Clase 68*************");
/*
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption");
    $figcaptionText = document.createTextNode("Tarado")
    $cards = document.querySelector(".cards"),
    $figure2=document.createElement("figure");
    
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild ($figcaption);
$cards.appendChild($figure);


$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);
////////

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul1 = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul1);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul1.appendChild($li);
});


///// mi parte 
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    $ul3 = document.createElement("ul"),
    $fragmento = document.createDocumentFragment();
    
meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragmento.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3);
*/

// Clase_69 DOM: Templates HTML
console.log("************Clase 69*************");

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content; // seleccionando un elemento de mi Dom
const $fragmento = document.createDocumentFragment();
const cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title: "Personas",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    }
];
cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragmento.appendChild($clone);
});
$cards.appendChild($fragmento);

// Clase_70 DOM: Modificando Elementos (Old Style)
console.log("************Clase 70*************");
const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");