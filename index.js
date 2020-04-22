// Your code goes here
let text = document.getElementById('text')
//find the browser element 

document.addEventListener("DOMContentLoaded", function() {
    //create EventListener for the DOM loading
    update();
  });

  //create function to change variable from line 2
  // run function in EventListener
  function update(){
    text.textContent = "This is really cool!"
  };