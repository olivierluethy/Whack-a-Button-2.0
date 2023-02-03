import { API_KEY } from './apikey';
const container = document.querySelector('.container');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

for (let i = 0; i < 100; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);

  if (i === 15) {
    box.style.backgroundColor = "yellow";
  }

  box.style.top = Math.random() * (viewportHeight - 50) + "px";
  box.style.left = Math.random() * (viewportWidth - 50) + "px";
}

const moveYourAss = setInterval(() => {
  elements = document.getElementsByClassName("box");
  for (let i = 0; i < elements.length; i++) {
    let randomDIr = Math.floor(Math.random() * 2);
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    let nextTop = parseInt(elements[i].style.top) + (randomDIr === 1 ? x : -x);
    let nextLeft = parseInt(elements[i].style.left) + (randomDIr === 1 ? y : -y);

    if (nextTop >= 0 && nextTop <= viewportHeight - 50 && nextLeft >= 0 && nextLeft <= viewportWidth - 50) {
      elements[i].style.top = nextTop + "px";
      elements[i].style.left = nextLeft + "px";
    }
  }
}, 1);
/* Check if clicked */
clickedBox = document.getElementsByClassName("box");
for (let i = 0; i < clickedBox.length; i++) {
clickedBox[i].addEventListener("click", function() {
console.log("Box " + i + " has been clicked!");
if(clickedBox[i].style.backgroundColor == "yellow"){
    console.log("You have won!");
    fetchWinningGif();
    modal.style.display = "block";
    clearInterval(moveYourAss);
}else {
    console.log("Bad!!");
}
});
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function restartIt(){
    location.reload();
}


// function to fetch a random gif related to winning
async function fetchWinningGif() {
    const showGif = document.getElementById("showGif");
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=winning&rating=g`);
    const data = await response.json();
    const imageUrl = data.data.images.fixed_height.url;
    
    // display the gif on an image
    showGif.src=imageUrl;
    }