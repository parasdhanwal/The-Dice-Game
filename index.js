var randomNumber1=Math.random();
var randomNumber2=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);
randomNumber2=Math.floor((randomNumber2*6)+1);
var randomDice="images/dice"+randomNumber1+".png";
var image=document.querySelectorAll("img")[0];

image.setAttribute("src", randomDice);
var randomDice1="images/dice"+randomNumber2+".png";
var image1=document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDice1);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Draw🚩";
}
