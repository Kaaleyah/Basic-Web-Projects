var numSquares = 6;
var colors = [];
var goalColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpMode();
  setUpSquares();
  resetA();
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedcolor = this.style.backgroundColor;
      //compare color to goalColor
      if (clickedcolor === goalColor) {
        message.textContent = "Correct"
        changeAll(clickedcolor)
        h1.style.backgroundColor = clickedcolor;
        reset.textContent = "Play Again?"
      } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

function setUpMode() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      resetA();
    });
  }
}

function resetA() {
  //reset h1 background
  h1.style.backgroundColor = "steelblue";
  //change reset button to new colors
  reset.textContent = "New Colors"
  //clear the message
  messageDisplay.textContent = "";
  //generate new Colors
  colors = generateRandomColors(numSquares);
  //pick a new random colors from array
  goalColor = pickColor();
  //change display to match picked colors
  colorDisplay.textContent = goalColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

reset.addEventListener("click", function() {
  resetA();
});

function changeAll(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change all color to match given clickedcolor
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random colors and push into arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a "red" from 0-255"
  var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255"
  var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255"
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
