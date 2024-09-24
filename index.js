
let totalButton = document.querySelectorAll("button").length;

// for yang menjalankan musik dan animasi
for (let i = 0; i < totalButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); 
  });
}

// event untuk menangkap dari keyboard
document.addEventListener("keydown", function(event) {
  playSound(event.key); 
  buttonAnimation(event.key); 
});

// function untuk memainkan suara berdasarkan input
function playSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

// function animasi saat tombol diklik atau ditekan
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey); 
  if (activeButton) { 
    activeButton.classList.add("pressed"); 
    activeButton.classList.add("red"); 

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 200);
    setTimeout(function(){
        activeButton.classList.remove("red");
    }, 2000);
  }
}
