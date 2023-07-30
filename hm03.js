const pikachu = document.querySelector("#pikachu");

function playLoop() {
    var context = new AudioContext();
    var playSound = context.createBufferSource();
    var getSound = new XMLHttpRequest();

    getSound.open("GET", "theloopforreal2.mp3", true);

    getSound.responseType = "arraybuffer";

    getSound.onload = function() {
        context.decodeAudioData(getSound.response, function(buffer){
            playSound.buffer = buffer;
            playSound.connect(context.destination);
            playSound.loop = true
            playSound.start(0);
        });
    }

    getSound.send();
}

pikachu.addEventListener("click", () => {
    playLoop()
})