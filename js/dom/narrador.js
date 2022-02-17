//? clase 104. DOM: Ejercicios Prácticos | Narrador (Lector de Voz)-->
const d = document;
const w = window;
export default function speechReader() {
    const $speechSelect = d.getElementById("speechSelect");
    const $speechTextArea = d.getElementById("speechText");
    const $speedButton = d.getElementById("speechBtn");
    const msnSpeech = new SpeechSynthesisUtterance();


    let voiceList = [];
    //? Aca cargo en mi listado los tipos de voces que contiene elNavegador
    d.addEventListener("DOMContentLoaded", (e) => { 
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            voiceList = w.speechSynthesis.getVoices();
            voiceList.forEach((voice) => {
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} --- ${voice.lang}`;
                $speechSelect.appendChild($option);
            });
        });
    });

    d.addEventListener("change", (e) => { 
        if (e.target === $speechSelect) {
            msnSpeech.voice = voiceList.find((voice) => voice.name === e.target.value);
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === $speedButton) {
            msnSpeech.text = $speechTextArea.value;
            w.speechSynthesis.speak(msnSpeech);
        }
    });
}