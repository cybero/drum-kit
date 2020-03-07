//1. Detect mouse click on buttons
for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
});
}

//2. Detect keyboard buttons pressed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//3. Make Sound Function/Switch Statement
function makeSound(key) {
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        //default: not required here
  }
}

//4. Drum button flash when pressed for 0.1 seconds
function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function () {activeButton.classList.remove("pressed");}, 100);
}

//Made by Cybero
