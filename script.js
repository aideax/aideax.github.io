let txtColor = document.querySelector("#txtColor");
let header = document.querySelector(".header");
let squares = document.querySelectorAll(".square");
let btnNew = document.querySelector(".new");
let txtResult = document.querySelector(".result");
let btnDifficulty = document.querySelectorAll(".btnDifficulty")
let container = document.queryCommandEnabled(".container");
let controls = document.querySelector(".controls *");
let ansColor = "";
let ansPos = 0;
let squareSize = 6;



function getColor() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let color = `rgb(${r}, ${g}, ${b})`;
   return color;
}

function getAnsPos() {
   let pos = Math.floor(Math.random() * squareSize);
   return pos;
}

function setColors() {
   ansColor = getColor();
   ansPos = getAnsPos();
   txtColor.textContent = ansColor;
   txtResult.textContent = "";
   header.style.backgroundColor = "dimgray";
   console.log(squareSize);
   
   for (let i = 0; i < squares.length; i++) {
      squares[i].style.display = "block";
      if (i === ansPos) {
         squares[i].style.backgroundColor = ansColor;
      } else {
         squares[i].style.backgroundColor = getColor();
      }
      if(i > squareSize-1){
         squares[i].style.display = "none";
      }

   }
}

for (let i = 0; i < squares.length; i++) {
   squares[i].addEventListener("click", function () {
      if (squares[i].style.backgroundColor === ansColor) {
         txtResult.textContent = "Correct!";
         for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = ansColor;
            header.style.backgroundColor = ansColor;
         }
      } else {
         txtResult.textContent = "Try again";
         squares[i].style.backgroundColor = "dimgray";
      }
   });
}

for (let i = 0; i < btnDifficulty.length; i++) {
   btnDifficulty[i].addEventListener("click", function(){
      if (btnDifficulty[i].textContent === "HARD") {
         squareSize = 6;
         btnDifficulty[1].classList.add("selected");
         btnDifficulty[0].classList.remove("selected");
      } else{
         squareSize = 3;
         btnDifficulty[0].classList.add("selected");
         btnDifficulty[1].classList.remove("selected");
      } 
      setColors();
   });
   
}

btnNew.addEventListener("click", setColors);
setColors();