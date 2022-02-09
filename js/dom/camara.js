const d = document;
const nav = navigator;
export default function camaraWeb(id){
    let $video = d.getElementById(id);
    console.log(nav.mediaDevices.getDisplayMedia);
    if (nav.mediaDevices.getUserMedia) {
        nav.mediaDevices.
            getUserMedia({ video: true, audio: false }).
            then((strem) => {
                console.log(strem);
                $video.srcObject = strem;
                $video.play();
             }).
            catch((err) => {
                $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
                console.log(`Paso esto: ${err}`);
            });
    }
}