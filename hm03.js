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

pikachu.addEventListener("click", () => {
    try {
        playSound.start(0);
    } catch (e) {
        if (e instanceof InvalidStateError) {}
        else {
            console.log(e)
        }
    }
    console.log("pika pika!")
})