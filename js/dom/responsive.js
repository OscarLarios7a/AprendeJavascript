/**Clase 90**/
const d = document;
const w = window;

export default function responsiveMediaquery(id, mediaQuery,mobileQuery,desktopContent) {
    let breakpoint = w.matchMedia(mediaQuery);
    const $responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileQuery;
        }
    }
    breakpoint.addListener($responsive);
    $responsive(breakpoint);
}