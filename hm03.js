const pikachu = document.querySelector("#pikachu");

var context = new AudioContext();
var playSound = context.createBufferSource();
var getSound = new XMLHttpRequest();

getSound.open("GET", "sea.wav", true);

getSound.responseType = "arraybuffer";

getSound.onload = function() {
    context.decodeAudioData(getSound.response, function(buffer){
        playSound.buffer = buffer;
        playSound.connect(context.destination);
        playSound.loop = true
    });
}

getSound.send();

function surf() {
    if (pikachu.getAttribute("clicked")) {
        console.log("pika pika!")
    } else {
        playSound.start(0);
        pikachu.setAttribute("clicked", true);
    }
}

pikachu.addEventListener("click", () => {
    surf()
})
pikachu.addEventListener("touchend", () => {
    surf()
})