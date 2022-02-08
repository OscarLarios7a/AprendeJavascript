const d = document;
const ls = localStorage;
export default function darkTheme(btn, classDark) {
    const $themeDark = d.querySelector(btn);
    const $selectElements = d.querySelectorAll("[data-dark]");

    let moon ="🌙"; // estas variables contendran el elemento 
    let sun = "☀️";



    const lightModeTheme = () => {
        $selectElements.forEach((el) => el.classList.remove(classDark));
        $themeDark.textContent = moon;
        ls.setItem("theme", "light");
    };
    const darkModeTheme = () => {
         $selectElements.forEach((el) => el.classList.add(classDark));
        $themeDark.textContent = sun;
        ls.setItem("theme", "dark");
    }



    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            //console.log($themeDark.textContent);
            if ($themeDark.textContent === moon) {
                //$selectElements.forEach((el) => el.classList.add(classDark));
                //$themeDark.textContent = sun;
                darkModeTheme();
            } else {
                //$selectElements.forEach((el) => el.classList.remove(classDark));
                //$themeDark.textContent = moon;
                lightModeTheme();
            }
        }
    });
/**89. DOM: Ejercicios Prácticos | API localStorage**/
    d.addEventListener("DOMContentLoaded", (e) => { 
        if (ls.getItem("theme")===null) {
            ls.setItem("theme", "light");
        }
        if (ls.getItem("theme") === "light") {
            lightModeTheme();
        }
        if (ls.getItem("theme") === "dark") {
            darkModeTheme();
        }
    });
}