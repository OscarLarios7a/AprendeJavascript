//?Clase 100. DOM: Video Inteligente (IntersectionObserver & VisibilityChange)
const d = document; 
const w = window;
export default function inteligentVideo() {
    const $videos = d.querySelectorAll("video[data-smart-video]");
    const callBack = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
            w.addEventListener("visibilitychange", (e) => d.visibilityState === "visible" ? entry.target.play() : entry.target.pause());
            
        });  
    };
    const observador = new IntersectionObserver(callBack, { threshold: 0.5 });
    $videos.forEach((el) => observador.observe(el));
}