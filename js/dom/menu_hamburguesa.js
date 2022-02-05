export default function hamburgerMenu(panelBtn,panel,menulink) {
    const d = document;
    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active"); //aqui es para activar la clase del elemento de panel 
            d.querySelector(panelBtn).classList.toggle("is-active");
        } 
        if (e.target.matches(menulink)) {
            d.querySelector(panel).classList.remove("is-active");// aqui sera para remover la clase del elemento de menu y sus elementos a
            d.querySelector(panelBtn).classList.remove("is-active");
        }
        
    });
}