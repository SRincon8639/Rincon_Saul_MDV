/*
Saul Rincon
SDI 1507
Expressions Assignment
07/16/2015
*/
//alert("hi");


//Variables

var myGames=24;     			//declare the variable for myGames		
var oneMoreGame=myGames+=5;		//If you buy 5 more games, you will have myGame plus 5 more
var oneLessGame=myGames-=5;		//If you sell 5 game, you will have myGame minus 5
var divideAllGames=myGames/=2;


alert("I have 24 games");
myGames=prompt("Enter the number of games from the alert");//Enter a number, specifically an even number to work											
oneMoreGame=prompt("I have " + " " + myGames +" " +"now, but If I buy 5 more, I will have" + "!");	//When prompted, you will add 5 more to whichever number you mentioned
oneLessGame=prompt("I have " + " " + myGames + " " + "now, but If I sell 5, I will have" + "!");		//When prompted, you will subtract 5 game to total
divideAllGames=alert("I gave away half, now I have " + (myGames/2));//This will divide the total number of games you have by 2, since you donated half of your games


//Array

var gameStored=[8,8,8];//Games that were stored in game envelopes, on top of Xbox and inside the individual cases
var total= gameStored[0]+gameStored[1]+gameStored[2];//Index number so the code will add the 3 numbers in []
console.log(total);//Adds total of all gamesStored