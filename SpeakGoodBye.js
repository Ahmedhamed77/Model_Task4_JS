let speakWordBye = "Good Bye";

function goodbyeSpeaker(){

    this.speak = function speak(name){
        console.log(speakWordBye + " " + name);
    }
}