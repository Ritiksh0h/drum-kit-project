// for button press

var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numberOfDrumButton; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
 
// for keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var crashAudio = new Audio('sounds/crash.mp3');
            crashAudio.play();
            break;

        case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tomAudio1 = new Audio('sounds/tom-1.mp3');
            tomAudio1.play();
            break;    
    
        case "j":
            var tomAudio2 = new Audio('sounds/tom-2.mp3');
            tomAudio2.play();
            break;

        case "k":
            var tomAudio3 = new Audio('sounds/tom-3.mp3');
            tomAudio3.play();
            break;
            
        case "l":
            var tomAudio4 = new Audio('sounds/tom-4.mp3');
            tomAudio4.play();
            break;

        default:
            break;
    }
}

// for button animation

function buttonAnimation (currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150);

}

// footer
var cpYear = document.getElementById("cp-date");
var d = new Date();
var year = d.getFullYear()

cpYear.innerHTML = year;