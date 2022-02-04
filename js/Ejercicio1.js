export default function hamburgerMenu(panelBtn, panel) {
    let d = document;
    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn)) {
            d.querySelector(panel).classList.toggle("active");
        }
    });
}
