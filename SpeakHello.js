
let speakWordHello = "Hello";

function HelloSpeaker () {
    this.speak = function(name) {
        console.log(speakWordHello + " " + name);
    };
}