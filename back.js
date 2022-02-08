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

    //Give component a function
    this.toggleHide = function () {
      if (page == 0) {
        //change text and font size 
        for (var i = 0; i < els.length; i++) {
          els[i].setAttribute(
            "value",
            "To find out a little more about the meaning of the word Psyche, click the START button below."
          );
          
          //change the image and text size
        img.setAttribute("src","https://cdn.glitch.global/cd5fd83c-c3ea-4273-a881-6b26955591f3/WELCOME.png?v=1644023354575");
        
       
          let currSpacing = els[i].getAttribute("letter-spacing");

          let params = {
            property: "letter-spacing",
            to: 20.0,
            dur: 10,
          };
          els[i].setAttribute("animation", params);
           page = 1;
        tb.setAttribute("value", "START");
        }
        
      } else if(page == 1){
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
          
          //change the image and text size
        img.setAttribute("src","https://cdn.glitch.global/cd5fd83c-c3ea-4273-a881-6b26955591f3/piril-osmanoglu-MIQCmVw1h0M-unsplash.jpg?v=1644017213537");
        
        page = 2;
        tb.setAttribute("value", "CLICK FOR: Greek Legend");
        }
        
        
      } else if(page == 2){
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
          //change the image back to Butterfly
        img.setAttribute("src","https://cdn.glitch.global/cd5fd83c-c3ea-4273-a881-6b26955591f3/Objects.png?v=1644017120525");
          
          page = 3;
        tb.setAttribute("value","CLICK FOR: Meaning of 'Psyche'");

        //buttons
        params = {
          property: "opacity",
          to: 0.0,
          dur: 750,
        };
        }
        
      } else{
        
        //change the text and text size
        for (var i = 0; i < els.length; i++) {
          els[i].setAttribute(
            "value",
            "And that's all, folks! Feel free to START AGAIN, or check out the rest of the exhibit!"
          );
          let currOpacity = els[i].getAttribute("letter-spacing");

          let params = {
            property: "letter-spacing",
            to: 9.0,
            dur: 10,
          };
          els[i].setAttribute("animation", params);
          //change the image back to Butterfly
        img.setAttribute("src","https://cdn.glitch.global/cd5fd83c-c3ea-4273-a881-6b26955591f3/Ending.png?v=1644023887629");
        }
        
        page = 0;
        tb.setAttribute("value","START AGAIN!");
        
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
