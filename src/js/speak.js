//mudar pro vetor
let txtInput = document.querySelector('#txtInput');
//------

let voiceList = document.querySelector('#voiceList');

//Nao vai ter botao, sera executado pela função 'virar()'
let btnSpeak = document.querySelector('#btnSpeak');


let synth = window.speechSynthesis;
let voices = [];

NewVoices()
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = NewVoices
}

function falar(text_to_speech){
    let toSpeak = new SpeechSynthesisUtterance(text_to_speech) //AQUI_O_QUE_VAI_SER_REPRODUZIDO
    let selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name')
    voices.forEach((voice) =>{
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice
        }

    })
    synth.speak(toSpeak)

}

function NewVoices(){
    voices = synth.getVoices()
    let selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex
    voiceList.innerHTML = ''
    voices.forEach((voice) =>{
        let listItem = document.createElement('option')
        listItem.textContent = voice.name
        listItem.setAttribute('data-lang', voice.lang)
        listItem.setAttribute('data-name', voice.name) 
        voiceList.appendChild(listItem)
    })
    voiceList.selectedIndex = selectedIndex
}