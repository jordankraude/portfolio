<script>

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 20; j++){
    randomPlacementLeft();
    randomPlacementRight()
  }

  setTimeout(function (){
    randomPlacementLeft();
    randomPlacementRight()
  // Something you want delayed.
            
}, 500)
;
}

function randomPlacementLeft() {
  var container = document.getElementById("starContainer");
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var element = document.createElement("div");
  element.classList.add('star');
  
  var randomLeft = Math.floor(Math.random() * containerWidth * 0.5); // Adjust the multiplier as needed
  var randomTop = Math.floor(Math.random() * containerHeight);

  var distanceFromTop = containerHeight - randomTop;
  var delay = (distanceFromTop / containerHeight) * 2 * Math.random();

  element.style.left = randomLeft + "px";
  element.style.top = -randomTop + "%";
  element.style.animationDelay = delay + 's';
  container.appendChild(element);
}

function randomPlacementRight() {
  var container = document.getElementById("starContainer");
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var element = document.createElement("div");
  element.classList.add('star');
  
  var randomRight = Math.floor(Math.random() * containerWidth * 0.5); // Adjust the multiplier as needed
  var randomTop = Math.floor(Math.random() * containerHeight);

  var distanceFromTop = containerHeight - randomTop;
  var delay = (distanceFromTop / containerHeight) * 2 * Math.random();

  element.style.right = randomRight + "px";
  element.style.top =   -randomTop + '%';
  element.style.animationDelay = delay + 's';
  container.appendChild(element);
}


</script>



