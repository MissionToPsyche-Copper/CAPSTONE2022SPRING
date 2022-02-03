//Global Vars
var page = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent("togglehidden", {
  //Initialize function
  init: function () {
    //get scene element
    var sceneEl = document.querySelector("a-scene");

    //Get this element
    let el = this.el;

    //get all elements in text frame
    var els = sceneEl.querySelectorAll("#text");

    //get image frame
    var img = sceneEl.querySelector("#image");

    //get toggle button
    var tb = sceneEl.querySelector("#toggleButton");
    
    //get music
    var audio = new Audio('audio_file.mp3');
    audio.play();
    
    function play() {
    var audio = new     Audio('https://github.com/anispas/CAPSTONE2022SPRING/blob/main/zapsplat_nature_ocean_waves_small_break_onto_sandy_beach_distant_surf_68468.mp3');
  audio.play();
  }

    //Give component a function
    this.toggleHide = function () {
      if (page == 0) {
        //change text and font size 
        for (var i = 0; i < els.length; i++) {
          els[i].setAttribute(
            "value",
            "The name Psyche originally originates from the greeks; for them, psyche was the soul of the individual, often represented as a butterfly."
          );
          let currSpacing = els[i].getAttribute("letter-spacing");

          let params = {
            property: "letter-spacing",
            to: 20.0,
            dur: 10,
          };
          els[i].setAttribute("animation", params);
        }
        //change the image and text size
          img.setAttribute("src", "");
        
        page = 1;
        tb.setAttribute("value", "Greek Legend ");
      } else {
        //change the text and text size
        for (var i = 0; i < els.length; i++) {
          els[i].setAttribute(
            "value",
            "In a famous legend of the Greeks, Psyche was a beautiful princess,who's beauty stunned even the gods. It even charmed the God of Love, Eros."
          );
          let currOpacity = els[i].getAttribute("letter-spacing");

          let params = {
            property: "letter-spacing",
            to: 9.0,
            dur: 10,
          };
          els[i].setAttribute("animation", params);
        }
        //change the image back to earth
        img.setAttribute("src","");

        page = 0;
        tb.setAttribute("value", "Meaning of the Word 'Psyche'");

        //buttons
        let params = {
          property: "opacity",
          to: 0.0,
          dur: 750,
        };
      }
    };

    //Add EventListener
    this.el.addEventListener("click", this.toggleHide);
  },
  //On Remove
  remove: function () {
    this.el.removeEventListener("click", this.toggleHide);
  },
});
