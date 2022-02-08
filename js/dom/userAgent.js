//92. DOM: Ejercicios Prácticos | Detección de Dispositivos User Agent 
const d = document;
const w = window;
const nav = navigator;
const usrAgent = nav.userAgent;
export default function userAgentDeviceInfo(id) {
    const $id = d.getElementById(id);
    const isMobile = {
        android:()=>usrAgent.match(/android/i),
        ios:()=>usrAgent.match(/iphone|ipad|iphone/i),
        windows:()=>usrAgent.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        }
    };
    const isDesktop =  {
    linux:()=>usrAgent.match(/linux/i),
    mac:()=>usrAgent.match(/mac os/i),
    windows:()=>usrAgent.match(/windows nt/i),
    any: function () {
        return this.linux() || this.mac() || this.windows();
        }
    };
    const isBrowser = {
        chrome: () => usrAgent.match(/chrome/i),
        safari: () => usrAgent.match(/safari/i),
        firefox: () => usrAgent.match(/forefox/i),
        opera: () => usrAgent.match(/opera|opera mini/i),
        ie: () => usrAgent.match(/msie|iemobile/i),
        edge: () => usrAgent.match(/edge/i),
        any: function () {
         return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.firefedgeox();
        }
        
    };
    $id.innerHTML=`
        <ul>
        <li> User Agent: <b> ${usrAgent}</b></li>
        <li> Plataforma: <b> ${isMobile.any() ? isMobile.any() : isDesktop.any()}</b> </li>  
        <li> Navegador: <b> ${isBrowser.any()}</b></li>
        </ul>
        `;
    /** para que mande mensaje de exclusividad en navegadores*/
    if (isBrowser.chrome()) $id.innerHTML += `<p><mark> Este Contenido es exclusivo de Chrome</mark></p>`;
    if (isBrowser.safari()) $id.innerHTML += `<p><mark> Este Contenido es exclusivo de Safari</mark></p>`;
    if (isBrowser.firefox()) $id.innerHTML += `<p><mark> Este Contenido es exclusivo de Firefox</mark></p>`;
    if (isBrowser.opera()) $id.innerHTML += `<p><mark> Este Contenido es exclusivo de Opera</mark></p>`;
    if (isBrowser.ie()) $id.innerHTML += `<p><mark> Este Contenido es exclusivo de Ie</mark></p>`;
    if (isBrowser.edge()) $id.innerHTML += `<p><mark> Este Contenido es exclusivo de Edge</mark></p>`;

    /** para que mande mensaje de exclusividad en SO*/
    if (isDesktop.linux()) $id.innerHTML += `<p><mark> Descargar el Software para el SO Linux</mark></p>`;
    if (isDesktop.mac()) $id.innerHTML += `<p><mark> Descargar el Software para el SO Mac OS X</mark></p>`;
    if (isDesktop.windows()) $id.innerHTML += `<p><mark> Descargar el Software para el SO Windows</mark></p>`;

    /** para que mande mensaje de redireccionamiento */
    if (isMobile.android()) w.location.href = "https://oscarlarios7a.github.io/";
}