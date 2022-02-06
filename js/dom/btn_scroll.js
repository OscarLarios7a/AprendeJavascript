/**Eventos con el Scroll Top Button Clase 87**/

const d = document;
const w = window;
export default function scrollTopBtn(btn) {
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll", (e) => {
        let scrolTop = w.pageYOffset || d.documentElement.scrollTop;

        //Aca vamos hacer que se aparezca o no el boton del scroll
        if (scrolTop > 500) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
        //console.log(w.pageYOffset,d.documentElement.scrollTop)
    });
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });
}