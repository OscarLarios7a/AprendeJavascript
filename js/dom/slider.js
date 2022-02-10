//? Clase 98. DOM: Ejercicios Prácticos | Responsive Slider 
const d = document;
export default function () {
    const $siguienteBtn=d.querySelector(".slider-btn .next");
    const $atrasBtn=d.querySelector(".slider-btn .prev");
    const $slides = d.querySelectorAll(".slider-slide");
    let index = 0;

    d.addEventListener("click", (e) => {
        if(e.target===$atrasBtn) {
            e.preventDefault();
            $slides[index].classList.remove("active");
            index--;
            if (index<0) {
                index = $slides.length - 1;
            }
            $slides[index].classList.add("active");
        }
    });
    
    d.addEventListener("click", (e) => {
    if(e.target===$siguienteBtn) {
        e.preventDefault();
        $slides[index].classList.remove("active");
        index++;
        if (index>=$slides.length) {
            index = 0;
        }
        $slides[index].classList.add("active");
    }
});
    
}