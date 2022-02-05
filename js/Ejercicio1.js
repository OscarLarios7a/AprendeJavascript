export default function hamburgerMenu(panelBtn, panel,menulink) {
    const d = document;
    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panel}*`)) {
            d.querySelector(panel).classList.toggle("active");
            d.querySelector(panelBtn).classList.toggle("active");
        }
        if (e.target.matches(menulink)){
           d.querySelector(panel).classList.remove("active");
           d.querySelector(panelBtn).classList.remove("active");
            
        }
    });
}
