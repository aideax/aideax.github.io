let txtColor = document.querySelector("#txtColor");
let header = document.querySelector(".header");
let squares = document.querySelectorAll(".square");
let btnNew = document.querySelector(".new");
let txtResult = document.querySelector(".result");
let btnEasy = document.querySelector(".easy");
let btnHard = document.querySelectorAll(".hard");
let container = document.queryCommandEnabled(".container");
let ansColor = "";
let ansPos = 0;



function getColor(){
   let r = Math.floor(Math.random()*256);
   let g = Math.floor(Math.random()*256);
   let b = Math.floor(Math.random()*256);
   let color = `rgb(${r}, ${g}, ${b})`;
   return color;
}

function getAnsPos(){
   let pos = Math.floor(Math.random()*6);
   return pos;
}

function setColors(){
   ansColor = getColor();
   ansPos = getAnsPos();
   txtColor.textContent = ansColor;
   txtResult.textContent = "";
   header.style.backgroundColor = "dimgray";
   for (let i = 0; i < squares.length; i++) {
      if (i === ansPos) {
         squares[i].style.backgroundColor = ansColor;
      }else{
         squares[i].style.backgroundColor = getColor();
      }
   }
}

for (let i = 0; i < squares.length; i++) {
   squares[i].addEventListener("click", function(){
      if(squares[i].style.backgroundColor === ansColor){
         txtResult.textContent = "Correct!";
         for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = ansColor;
            header.style.backgroundColor = ansColor;
         }
      }else{
         txtResult.textContent = "Try again";
         squares[i].style.backgroundColor = "dimgray";
      }
   });
   
}

btnNew.addEventListener("click", setColors);
btnEasy.addEventListener("click", changeDifficulty);
btnHard.addEventListener("click", changeDifficulty);

function changeDifficulty(){
   if (squares.length > 3) {
      container.textContent = "askdjas";
      setColors();
   }
   else{
      container.innerHTML = `<div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>`;
      setColors();
   }
}



setColors();