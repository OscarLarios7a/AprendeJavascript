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

// Clase_63
console.log("************Clase 63*************");
console.log(document.documentElement.lang);
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

// Clase_64 DOM: Estilos y Variables CSS
console.log("************Clase 64*************");

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

// Clase_64 DOM: DOM: Clases CSS
console.log("************Clase 65*************");