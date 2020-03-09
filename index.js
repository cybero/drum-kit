var savedRecording = [];
var isRecording = false;
var buttonInnerHtml;

//1. Detect mouse click on buttons & push to array if recording.
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    if (isRecording) {
      savedRecording.push(buttonInnerHtml);
    }
  });

};

//2. Detect keyboard buttons pressed & push to array if recording.
document.addEventListener("keydown", function() {
  makeSound(event.key);
  buttonAnimation(event.key);
  if (isRecording) {
    savedRecording.push(event.key);
    console.log(event.key);
  }
});

//3. Function/Switch Statement to match event with corresponding sound.
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

//4. Drum button flash when pressed. Flash for 0.1 seconds.
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

//5. Begin storing the played sounds in the array when button 'record' is pressed. See corresponding if statements in section 1. and section 2. Clear array of any values first.
document.querySelector(".record").addEventListener("click", function() {
  savedRecording = [];
  isRecording = true;
});

//6. Stop saving the sounds in the array when the 'stop' button is pressed.
document.querySelector(".stop").addEventListener("click", function() {
  isRecording = false;
});


//7. Playback the sounds in the array when the user presses the playback button. Add incremental timeout each loop so they don't playback all at the same time.
function playRecording() {
  var waiter = 180;
  for (var i = 0; i < savedRecording.length; i++) {
    var millisecondsToWait = waiter;
    setTimeout(makeSound.bind(null, savedRecording[i]), millisecondsToWait);
    waiter += 180;
  }
}

document.querySelector(".playback").addEventListener("click", function() {
  playRecording();
});

//Made by Cybero 2020
