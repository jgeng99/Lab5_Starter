// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {

  // When you select a horn from the drop down menu
  var choices = document.getElementById("horn-select");
  var cur_butt = document.querySelector("button");
  var cur_imgs = document.querySelectorAll("img");
  var aud = document.getElementsByClassName("hidden")[0];
  var cur_vol = document.querySelector("input#volume");
  var cur_img = cur_imgs[0];
  var sound_img = cur_imgs[1];
  var confetti = new JSConfetti();

  console.log(cur_vol);

  choices.addEventListener("input", function() {

    if (this.value == "air-horn") {

      // The correct image should display
      cur_img.src = "assets/images/air-horn.svg";
      cur_img.alt = "air-horn image";

      // The correct audio sound file should be set
      aud.src = "assets/audio/air-horn.mp3";

      // When you click the “Play Sound” button
      cur_butt.addEventListener("click", function() {
        aud.play();
      });

    }
    else if (this.value == "car-horn") {
      
      // The correct image should display
      cur_img.src = "assets/images/car-horn.svg";
      cur_img.alt = "car-horn image";

      // The correct audio sound file should be set
      aud.src = "assets/audio/car-horn.mp3";

      // When you click the “Play Sound” button
      cur_butt.addEventListener("click", function() {
        aud.play();
      });

    }
    else if (this.value == "party-horn") {

      // The correct image should display
      cur_img.src = "assets/images/party-horn.svg";
      cur_img.alt = "party-horn image";

      // The correct audio sound file should be set
      aud.src = "assets/audio/party-horn.mp3";

      // When you click the “Play Sound” button
      cur_butt.addEventListener("click", function() {
        aud.play();
        
        // Shoot out confetti
        confetti.addConfetti();
      });

    }
  
  });

  cur_vol.addEventListener("change", function() {

    // The corresponding volume should be set for the audio element
    aud.volume = this.value/100;

    // (1). At zero volume, the mute icon (level 0) should be displayed
    if (this.value == 0) {
      sound_img.src = "assets/icons/volume-level-0.svg";
      sound_img.alt = "level 0 sound icon";
    }
    // (2). From 1 to < 33 volume the first volume level should be displayed
    else if (this.value >= 1 && this.value < 33) {
      sound_img.src = "assets/icons/volume-level-1.svg";
      sound_img.alt = "level 1 sound icon";
    }
    // (3). From 33 to < 67 volume the second volume level should be displayed
    else if (this.value >= 33 && this.value < 67) {
      sound_img.src = "assets/icons/volume-level-2.svg";
      sound_img.alt = "level 2 sound icon";
    }
    // (4). From 67 and up the third volume level should be displayed
    else {
      sound_img.src = "assets/icons/volume-level-3.svg";
      sound_img.alt = "level 3 sound icon";
    }
  });
  
}