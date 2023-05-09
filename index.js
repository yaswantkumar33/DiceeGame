var randomnumber1 =  Math.floor(Math.random() * 6) + 1 ;

var randomDiceeImage = "dice"+randomnumber1+".png";

var randomImageSource1 = "images/"+randomDiceeImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

var randomnumber2 = Math.floor(Math.random() *6) + 1;

var randomImageSource2 = "images/dice"+randomnumber2+".png";


document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



//If player 1 wins
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }