
var randomNumber1 =(Math.floor(Math.random()*6)) + 1;

var randomNumber2 =(Math.floor(Math.random()*6)) + 1;


var dicea="images/dice"+randomNumber1+".png";

var diceb="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src", dicea);

document.querySelectorAll("img")[1].setAttribute("src", diceb);


if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!";

}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!";

}
else {
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!";
}