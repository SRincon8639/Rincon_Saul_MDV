/*
Saul Rincon
SDI 1507
Expressions Assignment
07/16/2015
*/
//alert("hi");


//Variables

var myGames=24;     				//declare the variable for myGames		
var fiveMoreGames=myGames+5;		//If you buy 5 more games, you will have myGame plus 5 more
var tenLessGames=myGames-10;		//If you sell 10 games, you will have myGame minus 10
var divideAllGames=myGames/2;		//This divdes 24 games divided by 2


alert("I have 24 games");
myGames=prompt("Enter the number of games from the alert");//Enter a number, specifically an even number to work or from the alert										
fiveMoreGame=prompt("I have " + " " + myGames +" " +"now, but if I buy 5 more, I will have" + "?");	//When prompted, you will add 5 more to whichever number you mentioned
tenLessGame=prompt("I have " + " " + myGames + " " + "now, but if I sell 10, I will have" + "?");		//When prompted, you will subtract 10 games to total
divideAllGames=prompt("I gave away half, now I have ");//This will divide the total number of games you have by 2, since you donated half of your games


//Array

var gameStored=[8,6,10];//Games that were stored in game envelopes, on top of Xbox and inside the individual cases
var total= gameStored[0]+gameStored[1]+gameStored[2];//Index number so the code will add the 3 numbers in []
console.log(total+ " " + "games stored at home");//Adds total of all gamesStored at home


//Outputs
console.log("I have" +" "+ myGames + " " + "games but if I buy 5 more, I will have" + " " + fiveMoreGames+ " "+"games");//This output combines 24 total of games and adds 5 more
console.log("I have" +" "+ myGames + " " + "games but if I sell 10, I will have" + " " + tenLessGames+ " " + "games");//This output combines 24 total games minus 10
console.log("If I gave away half of my" + " " + myGames+ " "+ "games, I will have" + " " + divideAllGames+" "+ "left");//This output shows that if I divide my total games in half, I will have 12