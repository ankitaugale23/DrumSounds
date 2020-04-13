

//click events........

for(var i=0;i<7;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var innerhtml = this.innerHTML;
    playingDrums(innerhtml);
    activeAnimation(innerhtml);

  });

}

//keyboard events........

document.addEventListener("keydown",function(event){
  var keyPressed = event.key;
  playingDrums(keyPressed);
  activeAnimation(keyPressed);
})


//Playing sound function
function playingDrums(char)
{
  switch (char) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
    console.log(1);
  }
}


function activeAnimation(currentkey)
{
  document.querySelector("." + currentkey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("." + currentkey).classList.remove("pressed");
  },100);
}
