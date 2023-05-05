// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // Get all available texts
  const synth = window.speechSynthesis;
  var voiceSelect = document.getElementById("voice-select");
  var input_text = document.getElementById("text-to-speak");
  var speak_img = document.querySelector("img");
  var cur_butt = document.querySelector("button");
  var cur_text;
  var voices;
  var cur_voice;

  speechSynthesis.addEventListener("voiceschanged", function() {

    function populateVoiceList() {
      voices = synth.getVoices();
    
      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
    
        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
      }
    }
    
    populateVoiceList();
  });

  // Detect the voice change
  voiceSelect.addEventListener("input", function() {
    cur_voice = this.value.split("(")[0].trim();
  });

  // Record the text value
  input_text.addEventListener("change", function() {
    cur_text = this.value;
  });

  // Use text value to sythesize
  cur_butt.addEventListener("click", function() {

    // Speak
    const utterThis = new SpeechSynthesisUtterance(cur_text);
    utterThis.onstart = function() { 
      // Open the mouth
      speak_img.src = "assets/images/smiling-open.png";
    };
    utterThis.onend = function() { 
      // Close the mouth when speaking finishes
      speak_img.src = "assets/images/smiling.png";
    };

    // Change voice
    for (let i = 0; i < voices.length; i++) {
      // console.log(voices[i].name);
      if (voices[i].name.localeCompare(cur_voice)==0) {
        console.log(cur_voice);
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

  });

}