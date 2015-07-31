/*
Saul Rincon
SDI 1507
Functions
07/20/2015
*/

//alert("hi!");


// I will use the Florida Lottery or Powerball. This will prompt user what they want to use

//confirm("Do you want to participate in the Florida Lottery or Powerball? (Ok for Lotto, Cancel for Powerball)");


//Variables
var numPicked;
var lottery=false;
var ballChosen;

//Function
function LotteryCheck(){

//This is section for lottery

if(lottery===true){
	numPicked=6;
}
//This section is for Powerball
else{
	numPicked===5;
	}
}


function ballGenerator(min, max){

	var ballArray=[];
for (var i=0; i<numPicked;i++){
	
	var ballChosen=Math.random()*(max-min)+min;
	ballArray[i]=Math.round(ballChosen);

}

	return ballArray;

}





























