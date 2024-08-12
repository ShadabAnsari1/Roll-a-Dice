var randomnumber1 = Math.floor(Math.random() * 6)+1;

var randomdiceimmage = "images/dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceimmage);


var randomnumber2 = Math.floor(Math.random() * 6)+1;

var randomdiceimmage = "images/dice" + randomnumber2 + ".png";

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomdiceimmage);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🏆";
    
}

else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆";
    
}

else 
{
    document.querySelector("h1").innerHTML = "DRAW 🤪";
}









// Adding event listener to img1
document.querySelector(".img1").addEventListener("click", handClicked);


// Adding event listener to img2
document.querySelector(".img2").addEventListener("click", handClicked);

function handClicked() {
  alert("REFRESH THE PAGE and Don’t steal this dice; try to buy your own.😉");
}